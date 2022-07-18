import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../Services/data.service';
import { LoggerService } from '../../Services/logger.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css'],
})
export class LoggedInComponent implements OnInit, OnDestroy {
  public subscription: Subscription[] = [];
  users: any[] = [
    {
      userId: 'Test 1',
      status: 'LoggedIn',
    },
    {
      userId: 'Test 3',
      status: 'LoggedIn',
    },
    {
      userId: 'Test 2',
      status: 'LoggedIn',
    },
    {
      userId: 'Test 4',
      status: 'LoggedIn',
    },
  ];

  constructor(
    private logger: LoggerService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.subscription.push(
      this.dataService.userData.subscribe((data: any) => {
        Object.keys(data).length && this.users.unshift(data);
      }));
  }

  ngOnDestroy() {
    this.subscription.forEach((subs: Subscription) => {
      subs.unsubscribe();
    });
  }

  blockUser(index: number) {
    this.users[index].status = 'blocked';
    //log to server
    this.logger.logToServer(`${this.users[index].userId} is blocked!`);
  }
}
