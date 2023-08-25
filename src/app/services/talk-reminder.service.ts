import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { LocalNotifications } from '@capacitor/local-notifications';
import { AgendaItem } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TalkReminderService  {
  constructor(private ngZone: NgZone, public router: Router) {
    this.configure();
  }

  // Navigate the user to the talk they wanted to be reminded about
  async configure() {
    LocalNotifications.addListener("localNotificationActionPerformed", (notification => {
      this.ngZone.run(() => {
        this.router.navigate([`agenda/${notification.notification.extra.agendaId}`]);
      });
    }));
  }
  
  async scheduleReminder(agendaItem: AgendaItem) {
    // Set reminder 5 minutes before the talk begins
    const timeSlice = agendaItem.startTime.substring(0, 5);
    const reminderDate = new Date(`December 8, 2021 ${timeSlice}:00`);
    reminderDate.setMinutes(reminderDate.getMinutes() - 5);
    
    // Schedule reminder
    await LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: "Talk starting soon!",
          body: agendaItem.title,
          schedule: { at: reminderDate },
          extra: {
            agendaId: agendaItem.id
          }
        }
      ]
    });
  }
}
