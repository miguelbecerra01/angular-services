import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  ///providers: [LoggingService] //has AccountService herited since is on app.component
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;


  constructor(private logginService: LoggingService, private accountsService: AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //this.logginService.logStatusChange('A server status changed, new status: ' + status);
    this.accountsService.statusUpdated.emit(status);
  }
}
