import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-head',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {

}
