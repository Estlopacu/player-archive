import {Component, OnInit} from '@angular/core';
import {Observable} from '@rxjs/rx/observable';
import {PlayersService} from '../players.service';
import {PlayerInfo} from '../player';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

    private playersList: Observable<PlayerInfo>;

    constructor(private players: PlayersService) {
    }

    ngOnInit() {
    }

    search(form) {
        this.players.set(form.trim());
    }

}
