import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { PeopleComponent } from './shared/people/people.component';
import { NewsComponent } from './shared/news/news.component';
import { MainMenuComponent } from './shared/main-menu/main-menu.component';
import { BoastingTableComponent } from './shared/boasting-table/boasting-table.component';
import { MainComponent } from './main/main.component';
import { HeaderMenuComponent } from './shared/header/header-menu/header-menu.component';
import { HeaderScreenComponent } from './shared/header/header-screen/header-screen.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './shared/contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { AboutasComponent } from './aboutas/aboutas.component';
import { MoreButtonComponent } from './shared/more-button/more-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PeopleComponent,
    NewsComponent,
    MainMenuComponent,
    BoastingTableComponent,
    MainComponent,
    HeaderMenuComponent,
    HeaderScreenComponent,
    MediaComponent,
    ContactComponent,
    HistoryComponent,
    AboutasComponent,
    MoreButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
