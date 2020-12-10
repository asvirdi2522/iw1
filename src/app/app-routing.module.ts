import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { GalComponent } from './gal/gal.component';

const routes: Routes = [
  { path: 'home',             component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'iwsc', component: GalleryComponent},
  { path: 'gallery', component: GalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GalleryComponent, GalComponent]
