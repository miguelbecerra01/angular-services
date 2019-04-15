import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

//something can be injected in this class
@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    //trigger an event so other can listen to it
    statusUpdated = new EventEmitter<string>();

    constructor(private logginService: LoggingService) { }

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.logginService.logStatusChange(status);

    }
    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.logginService.logStatusChange(status);
    }
}