import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  if (localStorage.getItem("user")) {
    return true;
  } else {
    router.navigate(["/info"])
    return false
  }
};
export const planGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  if (localStorage.getItem("user") && localStorage.getItem("plan")) {
    return true;
  } else {
    router.navigate(["/info"])
    return false
  }
};
export const onsGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  if (localStorage.getItem("addOns") && localStorage.getItem("plan")) {
    return true;
  } else {
    router.navigate(["/info"])
    return false
  }
}
export const summaryGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  if (localStorage.getItem("summary")) {
    return true;
  } else {
    router.navigate(["/info"])
    return false
  }
};
