import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addOns, plan } from '../interface';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent implements OnInit {
  monthly: boolean = true
  plan!: plan;
  addOns: addOns[] = []
  total: number = 0
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.total = 0
    if (localStorage.getItem("plan")) {
      this.plan = JSON.parse(localStorage.getItem("plan")!)
      this.monthly = this.plan.process
      this.total += this.plan.price
    }
    if (localStorage.getItem("addOns")) {
      this.addOns = JSON.parse(localStorage.getItem("addOns")!)
      for (let i of this.addOns) {
        this.total += +i.price
      }
    }
  }
  router = inject(Router)
  back() {
    this.router.navigate(["/add-ons"])
  }
  change() {
    this.monthly = !this.monthly
    this.total
  }
  confirm() {
    localStorage.clear()
    localStorage.setItem("summary", "added")
    this.router.navigate(["/finish"])
  }
}
