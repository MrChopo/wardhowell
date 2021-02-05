import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutasComponent } from './aboutas/aboutas.component';
import { HistoryComponent } from './history/history.component';
import { MainComponent } from './main/main.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'aboutas', component: AboutasComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'media', component: MediaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
