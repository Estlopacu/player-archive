import {Component, OnInit} from '@angular/core';
import {Observable} from '@rxjs/rx/observable';
import {PlayersService} from '../players.service';

@Component({
    selector: 'app-players-list',
    templateUrl: './players-list.component.html',
    styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

    private player: Observable<any>;

    constructor(private players: PlayersService) {
    }

    ngOnInit() {
        this.players.playersList.subscribe(player => {
            this.player = player;
        });
    }

}
