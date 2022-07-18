import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { LoggerService } from '../../Services/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  name: string = '';
  constructor(private logger: LoggerService, private data: DataService) {}

  ngOnInit() {}

  login() {
    //login Api

    const user = {
      userId: this.name,
      status: 'LoggedIn',
    };

    this.data.userData.next(user);

    this.logger.logToServer(`${this.name} has tried to logged in`);
  }
}
