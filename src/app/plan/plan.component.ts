import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlCodec } from '@angular/common/upgrade';

@Component({
  selector: 'app-plan',
  imports: [AppModule],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {
  amount = [
    { type: "arcade", price: 9, image: "./icon-advanced.svg" },
    { type: "advanced", price: 12, image: "./icon-pro.svg" },
    { type: "pro", price: 15, image: "./icon-pro.svg" },
  ]
  active: boolean = true
  router = inject(Router)
  nextPlan = new FormGroup({
    index: new FormControl(null, Validators.required)
  })
  next() {
    let index = this.nextPlan.value.index!
    let plan;
    if (!isNaN(index)) {
      plan = { type: this.amount[index].type, price: this.amount[index].price, process: this.active }
      localStorage.setItem("plan", JSON.stringify(plan))
      this.router.navigate(["/add-ons"])
    }
  }
  back() {
    this.router.navigate(["/info"])
  }
  value() {
    this.active = !this.active
    console.log(this.active)
  }
}
