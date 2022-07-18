import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './common/login/login.component';
import { LoggedInComponent } from './common/logged-in/logged-in.component';
import { LoggerService } from './Services/logger.service';
import { UserStatusComponent } from './common/logged-in/user-status/user-status.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    LoggedInComponent,
    UserStatusComponent,
  ],
  bootstrap: [AppComponent],
  // providers: [LoggerService]
})
export class AppModule {}
