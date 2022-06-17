import { Component, OnInit } from '@angular/core';
import { LaunchDarklyService } from '../launch-darkly-service';
import { Order, mockApiOrders } from '../api-types';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
})
export class OrderManagerComponent implements OnInit {
  testFlag: boolean = true;
  orderList: Order[] = mockApiOrders;
  selectedOrder: Order | undefined;

  choose(i: number) {
    this.selectedOrder = this.orderList[i];
  }
  constructor(launchDarklyService: LaunchDarklyService) {
    // Subscribe to any changes to the feature flags
    launchDarklyService.flagChange.subscribe(
      () => (this.testFlag = launchDarklyService.getFlag('test-ss-page'))
    );
  }

  ngOnInit(): void {}
}
