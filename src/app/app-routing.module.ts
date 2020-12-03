import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'iwsc', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GalleryComponent]
