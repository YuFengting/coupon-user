import { Component } from '@angular/core';

import { StorePage } from '../store/store';
import { NearbyPage } from '../nearby/nearby';
import { AccountPage } from '../account/account';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StorePage;
  tab3Root = NearbyPage;
  tab4Root = AccountPage;

  constructor() {

  }
}
