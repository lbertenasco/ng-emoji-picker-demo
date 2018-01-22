import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'app';
  text: string = '';
  openPopup: Function;

  setPopupAction(fn: any) {
    console.log('setPopupAction');
    this.openPopup = fn;
  }
}
