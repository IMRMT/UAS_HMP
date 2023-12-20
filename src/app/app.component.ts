import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AccountserviceService } from './accountservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showTabs = false;
  constructor(private accountService: AccountserviceService, private appRouting: AppRoutingModule) {

  }
}
