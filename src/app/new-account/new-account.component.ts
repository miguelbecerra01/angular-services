import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  // providers: [LoggingService] //has AccountService herited since is on app.component //specify the service to inject the class
})
export class NewAccountComponent {
  constructor(private logginService: LoggingService,
    private accountsService: AccountsService) {

    //when statusUpdated emits this listen to it and executes an action, this case an alert.
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert(status)
    );

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    //this.logginService.logStatusChange('A server status changed, new status: ' + accountStatus);
  }
}
