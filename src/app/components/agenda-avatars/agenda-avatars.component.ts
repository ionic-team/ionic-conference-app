import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-avatars',
  templateUrl: './agenda-avatars.component.html',
  styleUrls: ['./agenda-avatars.component.scss'],
})
export class AgendaAvatarsComponent implements OnInit {
  @Input() urls: string[] = [];
  @Input() size: string = '100%';

  constructor() { }

  ngOnInit() {}

}
