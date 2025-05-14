import { Routes } from '@angular/router';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { InfoComponent } from './info/info.component';
import { SummaryComponent } from './summary/summary.component';
import { PlanComponent } from './plan/plan.component';
import { FinishComponent } from './finish/finish.component';
import { onsGuard, planGuard, summaryGuard, userGuard } from './user.guard';

export const routes: Routes = [
    { path: "", redirectTo: "info", pathMatch: 'full' },
    { path: "info", component: InfoComponent },
    { path: "add-ons", canActivate: [planGuard], component: AddOnsComponent },
    { path: "summary", canActivate: [onsGuard], component: SummaryComponent },
    { path: "plan", canActivate: [userGuard], component: PlanComponent },
    { path: "finish", canActivate: [summaryGuard], component: FinishComponent },
    { path: "**", redirectTo: "info", pathMatch: 'full' },
];
