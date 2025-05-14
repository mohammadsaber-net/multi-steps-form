import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-add-ons',
  imports: [AppModule],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css'
})
export class AddOnsComponent {
  state = [
    { kind: "online service", price: 1, infoo: "access to multiplayer games" },
    { kind: "large storage", price: 2, infoo: "extra 5TB of cloud save" },
    { kind: "customizable profile", price: 3, infoo: "custom theme in your profile" }
  ]
  onsNext = new FormGroup(
    Object.fromEntries(
      this.state.map((option, index) => {
        return [index, new FormControl(null, { nonNullable: true })]
      })
    )
  )
  router = inject(Router)
  next() {
    let amount = Object.keys(this.onsNext.value).filter((key) => {
      return this.onsNext.value[key]
    })
    if (amount.length > 0) {
      let addOns;
      addOns = (amount.map(num => {
        return { type: this.state[+num].kind, price: this.state[+num].price }
      }))
      localStorage.setItem("addOns", JSON.stringify(addOns))
      this.router.navigate(["/summary"])
    }
  }
  back() {
    this.router.navigate(["/plan"])
  }
  control(event: Event) {
    let parent = (event.target as HTMLInputElement).parentElement?.parentElement
    parent?.classList.contains("active") ? parent?.classList.remove("active") : parent?.classList.add("active")

  }
}
