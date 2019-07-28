import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from './utils/constants';
import {Observable, BehaviorSubject} from 'rxjs';
import {PlayerInfo} from './player';

@Injectable({
    providedIn: 'root'
})
export class PlayersService {

    private playersSource = new BehaviorSubject({});
    playersList = this.playersSource.asObservable();

    constructor(private http: HttpClient) {
    }

    private getPlayer(name: string): Observable<PlayerInfo> {
        return this.http.get<PlayerInfo>(Constants.getPlayerURL(name));
    }

    set(name: string = '') {
        this.getPlayer(name).subscribe(player => {
                this.playersSource.next(player);
            },
            error => {
                this.playersSource.next({error: 'No player found'});
            });
    }
}
