import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './utils/constants';
import {Observable, BehaviorSubject} from 'rxjs';

const startCase = require('lodash.startcase');

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    private playersSource = new BehaviorSubject({});
    playersList = this.playersSource.asObservable();

    constructor(private http: HttpClient) {
    }

    private getPlayer(name: string): Observable<any> {
        return this.http.get(Constants.getPlayerURL(name));
    }

    private getInfo(id): Observable<any> {
        return this.http.get(Constants.getPlayerInfoURL(id));
    }

    private formatData(playerInfo) {
        const newStats = [];
        Object.entries(playerInfo.stats).forEach(([key, value]) => newStats.push(
            {stat: startCase(key), value}));
        playerInfo.stats = newStats;
        return playerInfo;
    }

    set(name: string = 'fabio') {
        this.getPlayer(name).subscribe(player => {
                if (player.active === 'true') {
                    this.getInfo(player['profile-id']).subscribe(playerInfo => {
                        this.playersSource.next(this.formatData(playerInfo));
                    });
                }
            },
            error => {
                this.playersSource.next({error: 'No player found'});
            });
    }
}
