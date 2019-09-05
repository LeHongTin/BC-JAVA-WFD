import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './components/timelines/timelines.component';
import { AbcComponent } from './components/abc/abc.component';
import { DateUtilService } from './service/service-date-util/date-util.service';
import { YoutubePlaylistComponent } from './components/youtube/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './components/youtube/youtube-player/youtube-player.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    AbcComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DateUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
