import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private slimLoader: SlimLoadingBarService) {}

    completeProgress() {
        this.slimLoader.complete();
    }
    title = "Lazy Loading";
}
