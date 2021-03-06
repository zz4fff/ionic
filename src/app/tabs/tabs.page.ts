import { Component } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';
import { FeedPage } from '../feed/feed.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tabs1Root = Tab1Page;
  tabs2Root = Tab2Page;
  tabs3Root = Tab3Page;
  tabs4Root = FeedPage;

  constructor() {}

}
