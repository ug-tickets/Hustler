import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-pendinggigs',
  templateUrl: './pendinggigs.page.html',
  styleUrls: ['./pendinggigs.page.scss'],
})
export class PendinggigsPage implements OnInit {

  RecentHustlers = false;

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toGigDetails() {
    this.router.navigateByUrl('/gigdetails');
  }
  toReviews() {
    this.router.navigateByUrl('/gigreviews');
  }
  onFilter(event: CustomEvent<SegmentChangeEventDetail>) {
    if (event.detail.value === 'recenthustlers') {
      this.RecentHustlers = true;

    } else {
      this.RecentHustlers = false;

    }

  }

}
