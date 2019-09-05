import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TimelinesComponent } from './components/timelines/timelines.component';
import { AbcComponent } from './components/abc/abc.component';
import { YoutubePlaylistComponent } from './components/youtube/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './components/youtube/youtube-player/youtube-player.component';
import { DictionaryService } from './service/dictionary.service';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'abcd',
    component: AbcComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: 'id',
      component: YoutubePlayerComponent
    }]
  }
];

@NgModule({
  providers: [DictionaryService],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
