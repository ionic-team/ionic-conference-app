import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { SessionData } from '../../providers/session-data';
import { Session, User } from '../../models';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: Session;
  user: User;
  isFavorite = false;

  constructor(
    private sessionProvider: SessionData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('sessionId');
    this.sessionProvider.getSession(id)
      .then( data => {
        data.id = id;
        this.session = data;
        this.userProvider.getUser().then(user => {
          this.user = user;
          this.user.favorites.forEach(favorite => {
            if (favorite.id === this.session.id) { this.isFavorite = true; }
          });
        });
      }
    );
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (this.isFavorite) {
      const index = this.user.favorites.findIndex(f => f.id === this.session.id);
      if (index > -1) {
        this.user.favorites.splice(index, 1);
      }
    } else {
      this.user.favorites.push({id: this.session.id, name: this.session.name });
    }
    this.userProvider.updateUser(this.user);
    this.isFavorite = !this.isFavorite;
  }
}
