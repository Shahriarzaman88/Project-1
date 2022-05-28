import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { SubscriptionFormComponent } from "./subscription-form/subscription-form.component";
import { SubscriptionUsersComponent } from "./subscription-users/subscription-users.component";


const routes: Routes = [
    {path: 'SubscriptionForm', component: SubscriptionFormComponent},
    {path:'SubscriptionUser', component: SubscriptionUsersComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [SubscriptionFormComponent, SubscriptionUsersComponent]