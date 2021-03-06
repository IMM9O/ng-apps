import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { Routes, RouterModule } from '@angular/router';

import { AlbumListComponent } from './album-list/album-list.component';

import { SpotifyService } from './spotify.service';
import { CountSizePipe } from './count-size.pipe';
import { SearchComponent } from './search/search.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'album/:id',
    component: AlbumComponent
  },
  { path: '', component: AlbumListComponent }
];

@NgModule({
  declarations: [
    AppComponent, AlbumComponent, AboutComponent, AlbumListComponent, CountSizePipe, SearchComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }