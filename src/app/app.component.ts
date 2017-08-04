/* tslint:disable:no-console */
import { Component } from '@angular/core';

// Import Services Here
import { A03Service } from './services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public title = 'Algorithms!';

  constructor(private service: A03Service) {
    this.callService();
  }

  callService() {
    this.service.getPermutations([4, 3, 2, 1], 5)
      .subscribe(
      (d: any) => console.log(d),
      (e: Error) => console.log(e),
      () => console.log('completed'),
    );

    this.service.getPermutations('FADE', 5)
      .subscribe(
      (d: any) => console.log(d),
      (e: Error) => console.log(e),
      () => console.log('completed'),
    );
  }
}
