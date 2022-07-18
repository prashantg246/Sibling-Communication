import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css'],
})
export class UserStatusComponent implements OnInit {
  @Input() user: any = {};
  @Output() blockEvent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  blockUser() {
    this.blockEvent.emit();
  }
}
