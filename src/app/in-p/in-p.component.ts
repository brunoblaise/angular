import { Component } from '@angular/core';

@Component({
  selector: 'app-in-p',
  templateUrl: './in-p.component.html',
  styleUrls: ['./in-p.component.scss'],
})
export class InPComponent {
  title = 'learning angular';
  toogle() {
    console.log('toogle');
  }
}
