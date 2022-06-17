import { Component, Input, OnInit } from '@angular/core';
import { LaunchDarklyService } from '../launch-darkly-service';

import { Order } from '../api-types';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
})
export class OrderDetailsComponent implements OnInit {
  ngOnInit(): void {}
  displayItems: boolean = true;
  @Input() details: Order | undefined;
  constructor(launchDarklyService: LaunchDarklyService) {
    // Subscribe to any changes to the feature flags
    launchDarklyService.flagChange.subscribe(
      () => (this.displayItems = launchDarklyService.getFlag('displayItems'))
    );
  }
}
