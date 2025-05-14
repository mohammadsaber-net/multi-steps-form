import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-info',
  imports: [AppModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  nextForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{5,}$/)]),
  })
  router = inject(Router)
  next() {
    localStorage.getItem("summary") ? localStorage.removeItem("summary") : ''
    localStorage.setItem("user", JSON.stringify(this.nextForm.value))
    this.router.navigate(["/plan"])
  }
}
