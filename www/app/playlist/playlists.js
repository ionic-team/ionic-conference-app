import {IonicView, NavController} from 'ionic/ionic';

@IonicView({
  templateUrl: 'app/playlist/playlist.html'
})
export class PlaylistPage {
  constructor(nav: NavController) {
    this.nav = nav;
    this.playlists = ['Ionic Jams', 'Ionitron Siri'];
  }

  openPlaylist(playlist) {
    this.nav.push(PlaylistPage, {
      playlist: playlist
    })
  }
}
