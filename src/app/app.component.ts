import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

currentPageTitle = 'Dashboard';
your_appcomponent_member=[];


  appPages = [
    {
      title: 'Dashboard',
      url: '',
      icon: 'easel'
    },
    {
      title: 'Vastipatrak',
      url: '/family-list',
      icon: 'git-network'
    },
    {
      title: 'Family List',
      url: '/family-list',
      icon: 'people'
    },
    /*{
      title: 'Vastipatrak',
      url: '/family-head-profile',
      icon: 'git-network'
    },*/
    {
      title: 'Metrimonial',
      url: '/settings',
      icon: 'heart'
    }
    ,
    {
      title: 'Online Pratibimb',
      url: '/categories',
      icon: 'book'
    }
    ,
    {
      title: 'Shahay',
      url: '/settings',
      icon: 'rose'
    },
    {
      title: 'RSVP',
      url: '/settings',
      icon: 'list'
    },
    {
      title: 'Calender',
      url: '/settings',
      icon: 'calendar'
    }
    
  ];
  constructor(
    private platform: Platform,

  ) {
 // console.log(this.your_appcomponent_member);
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {

     const data =localStorage.getItem('userData');
    // console.log(this.your_appcomponent_member);

    });
  }
}
