import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'StorePage';
  tab3Root = 'NearbyPage';
  tab4Root = 'AccountPage';

  constructor() {

  }
}
