import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserData } from '../../providers/user-data';
import { SessionData } from '../../providers/session-data';
import { Session } from '../../models';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: Session;
  isFavorite = false;
  constructor(
    private sessionProvider: SessionData,
    private userProvider: UserData,
    private route: ActivatedRoute
  ) {}

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('sessionId');
    this.sessionProvider.getSession(id)
      .then( data => { this.session = data; }
    );
    // const id = this.route.snapshot.paramMap.get('sessionId');
    // this.session = this.sessionProvider.getSession(id);
    // this.dataProvider.load().subscribe((data: any) => {
    //   if (
    //     data &&
    //     data.schedule &&
    //     data.schedule[0] &&
    //     data.schedule[0].groups
    //   ) {
    //     const sessionId = this.route.snapshot.paramMap.get('sessionId');
    //     for (const group of data.schedule[0].groups) {
    //       if (group && group.sessions) {
    //         for (const session of group.sessions) {
    //           if (session && session.id === sessionId) {
    //             this.session = session;
    //             this.isFavorite = this.userProvider.hasFavorite(this.session.name);
    //             break;
    //           }
    //         }
    //       }
    //     }
    //   }
    // });
  }
}
