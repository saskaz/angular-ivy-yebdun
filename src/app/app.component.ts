import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Saskaz ' + VERSION.major;
  clickCount: number = 0;

  HandleChildButtonClick(clearFlag: boolean): void {
    if (clearFlag) {
      this.clickCount = 0;
    } else {
      this.clickCount++;
    }

    console.log(this.clickCount);
  }
}
