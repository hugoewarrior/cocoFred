import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { EVENTS } from '../../../apollo-server/queries/events';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  loading: boolean;
  events: any;
  storage: any; 

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {


   }

  ngOnInit() {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: EVENTS
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        console.log(loading, data, "Loading")
        this.events = data.events
      });

  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

//   getUrl = (event:any) => {
//     if (event.pic1) {
//         this.storage.ref('/events/commonUserEvents/' + event.pic1).getDownloadURL().then((url) => {
//             return(url)
//         })
//     }
// }

}
