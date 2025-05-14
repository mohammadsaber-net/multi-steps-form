import { Component } from '@angular/core';
import { HeadComponent } from './head/head.component';
import { AppModule } from './app.module';
@Component({
  selector: 'app-root',
  imports: [HeadComponent, AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app2';
}
