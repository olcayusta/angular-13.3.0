import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Angular 13.3.0</h1>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
