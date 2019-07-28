import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchFormComponent} from './search-form/search-form.component';
import {PlayersListComponent} from './players-list/players-list.component';
import {PlayerComponent} from './player/player.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchFormComponent,
        PlayersListComponent,
        PlayerComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
