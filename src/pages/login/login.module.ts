import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LoginPage} from './login';  /*登录页*/

@NgModule({
  imports: [IonicPageModule.forChild(LoginPage)],
  declarations: [LoginPage],
  providers: []
})
export class LoginPageModule {
}
