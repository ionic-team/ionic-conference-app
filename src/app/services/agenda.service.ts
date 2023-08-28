import { Injectable } from '@angular/core';
import { AgendaItem } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private agenda: AgendaItem[] = [
    {
      id: 1,
      title: 'Day 1: Conference Delegate Registration (Collection of Delegate Cards)',
      speakerIds: [],
      startTime: '08/30/2023 12:30 PM',
      endTime: '14:00 PM',
      description: ''
      },
      {
          id: 2,
          title: 'Welcoming Remarks & Opening',
          speakerIds: [16],
          startTime: '08/30/2023 12:00 PM',
          endTime: '14:05 PM',
          description: ''
          },
          {
              id: 3,
              title: 'Safety Moment Chamber of Mines Safety Awards',
              speakerIds: [13],
              startTime: '08/30/2023 14:05 PM',
              endTime: '14:20 PM',
              description: ''
              },
              {
                  id: 4,
                  title: 'Session 1:  Chairperson of Session – Mr Zebra Kasete (President, CoM) Mining in Namibia: Policy & Sector Overview',
                  speakerIds: [16],
                  startTime: '08/30/2023 14:20 PM',
                  endTime: '14:20 PM',
                  description: ''
                  },
                  {
                      id: 5,
                      title: 'Q & A Session with Minister: Burning Issues on Namibia’s mining sector – local content, ownership, Mining’s contribution to Namibia’s economy ',
                      speakerIds: [1],
                      startTime: '08/30/2023 14:20 PM',
                      endTime: '15:20 PM',
                      description: ''
                      },
                      {
      id: 6,
      title: 'RMB Panel Discussion - Exploring Investment, Innovation & Sustainable Practice Along the Mining Lifecyle: The Case of Namibia',
      speakerIds: [7,9,12,14,5],
      startTime: '08/30/2023 15:20 PM',
      endTime: '16:20 PM',
      description: ''
      },
      {
      id: 7,
      title: 'Nuclear energy in the global energy transition and implications for Namibias uranium sector',
      speakerIds: [11],
      startTime: '08/30/2023 2023 16:20 PM',
      endTime: '17:00 PM',
      description: ''
      },
      {
          id: 8,
          title: 'Q & A Session',
          speakerIds: [],
          startTime: '08/30/2023 17:00 PM',
          endTime: '17:10 PM',
          description: ''
          },
      {
      id: 9,
      title: 'Session 2: Chairperson of Session – Mr George Botshiwe (1st Vice President, CoM) Critical Minerals projects in Namibia',
      speakerIds: [17],
      startTime: '08/30/2023 17:00 PM',
      endTime: '17:00 PM',
      description: ''
      },
      {
          id: 10,
          title: 'Day 2: Conference Registration',
          speakerIds: [],
          startTime: '08/31/2023 7:30 AM',
          endTime: '07:55 AM',
          description: ''
          },
          {
      id: 11,
      title: 'Welcoming Remarks ',
      speakerIds: [16],
      startTime: '08/31/2023 7:55 AM',
      endTime: '08:00 AM',
      description: ''
      },
      {
          id: 12,
          title: 'The Ministry’s Position on Critical Minerals ',
          speakerIds: [15],
          startTime: '08/31/2023 8:00 AM',
          endTime: '08:30 AM',
          description: ''
          },
          {
      id: 13,
      title: 'Africa’s next biggest Lithium & Tin mine– the case of Uis tin mine',
      speakerIds: [3],
      startTime: '08/31/2023 8:30 AM',
      endTime: '09:10 AM',
      description: ''
      },
      {
          id: 14,
          title: 'Re-developing the Okanjande mine: Building a leading Graphite and Processing Company ',
          speakerIds: [6],
          startTime: '31/08/2023 9:10 AM',
          endTime: '09:50 AM',
          description: ''
          },
          {
      id: 15,
      title: 'Rare Earths Alliance Namibia: Strategic Partnerships for Namibia to become the next major rare earths producer',
      speakerIds: [10],
      startTime: '08/31/2023 9:50 AM',
      endTime: '10:30 AM',
      description: ''
      },
      {
      id: 16,
      title: 'Q & A',
      speakerIds: [],
      startTime: '08/31/2023 10:30 AM',
      endTime: '10:40 AM',
      description: ''
      },
      {
      id: 17,
      title: 'Health Break',
      speakerIds: [],
      startTime: '08/31/2023 10:40 AM',
      endTime: '10:50 AM',
      description: ''
      },
      {
      id: 18,
      title: 'Session 3: Chairperson of Session – Mr Veston Malango (CEO, CoM) Value Addition of Critical Minerals in Namibia',
      speakerIds: [],
      startTime: '08/31/2023 10:40 AM',
      endTime: '10:40 AM',
      description: ''
      },
      {
      id: 19,
      title: 'Overview of Critical Minerals Deposits in Namibia',
      speakerIds: [2],
      startTime: '08/31/2023 10:50 AM',
      endTime: '11:30 AM',
      description: ''
      },
      {
      id: 20,
      title: 'The mineral value chains in battery industry – from exploration to beneficiation',
      speakerIds: [4],
      startTime: '08/31/2023 11:30 AM',
      endTime: '12:10 PM',
      description: ''
      },
      {
      id: 21,
      title: 'The Memorandum of Understanding between Namibia and EU: Partnership on Sustainable Raw Materials Value Chains',
      speakerIds: [8],
      startTime: '08/31/2023 12:10 PM',
      endTime: '12:30 PM',
      description: ''
      },
      {
      id: 22,
      title: 'Q& A Session ',
      speakerIds: [],
      startTime: '08/31/2023 12:30 PM',
      endTime: '12:50 PM',
      description: ''
      },
      {
      id: 23,
      title: 'Closing Remarks ',
      speakerIds: [17],
      startTime: '08/31/2023 12:50 PM',
      endTime: '13:00 PM',
      description: ''
      },
  ];

  constructor() {}

  getAgenda(): AgendaItem[] {
    return this.agenda;
  }

  getAgendaItem(id: number): AgendaItem | undefined {
    return this.agenda.find(agenda => agenda.id === id);
  }

  public formatTalkTime(agendaItem: AgendaItem) {
    return `${this.convertToTwelveHourFormat(agendaItem.startTime)} - ${this.convertToTwelveHourFormat(agendaItem.endTime)}`;
  }

  // Talk times are stored in military time to make it easier to work with 
  // local notifications. Convert to 12 hour clock format.
  // Likely better ways to do this with Date object.

  // time: 08:00 AM, 12:30 PM, 14:00 PM etc.
  private convertToTwelveHourFormat(time: string) {
    let hour = parseInt(time.substring(0,2));

    if (hour > 12) {
      hour = hour - 12;
    }

    return hour + time.slice(2);
  }
}
