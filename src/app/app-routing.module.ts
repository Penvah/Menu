import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{path:"",component:MenuComponent,children:[{path:"login", component:LoginComponent},
  {path:"contact", component:ContactComponent},{path:"about",component:AboutComponent}]}]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
