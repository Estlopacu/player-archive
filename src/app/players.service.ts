import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './utils/constants';
import {Observable, BehaviorSubject} from 'rxjs';
import {PlayerBasic, PlayerInfo} from './player';
// const startCase = require('lodash.startcase');

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    private playersSource = new BehaviorSubject({});
    playersList = this.playersSource.asObservable();

    constructor(private http: HttpClient) {
    }

    private getPlayer(name: string): Observable<PlayerBasic> {
        return this.http.get<PlayerBasic>(Constants.getPlayerURL(name));
    }

    private getInfo(id): Observable<PlayerInfo> {
        return this.http.get<PlayerInfo>(Constants.getPlayerInfoURL(id));
    }

    private formatData(playerInfo) {
        const newStats = [];
        Object.entries(playerInfo.stats).forEach(([key, value]) => newStats.push(
            {stat: key, value}));
        playerInfo.stats = newStats;
        return playerInfo;
    }

    set(name: string = 'fabio') {
        this.getPlayer(name).subscribe(player => {
                if (player.active === 'true') {
                    this.getInfo(player['profile-id']).subscribe(playerInfo => {
                        console.log(playerInfo)
                        this.playersSource.next(this.formatData(playerInfo));
                    });
                }
                this.playersSource.next({error: 'No player found'});
            },
            error => {
                this.playersSource.next({error: 'No player found'});
            });
    }
}
