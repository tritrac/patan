import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NavController} from '@ionic/angular';
import { ToastController, Platform} from '@ionic/angular';

import {FormControl,FormGroupDirective,FormBuilder,FormGroup,FormArray,NgForm,Validators} from '@angular/forms';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
//import { LoginService } from '../../services/login.service';
import {  HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { UserCrudService } from './../services/user-crud.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'})

};
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordType: any = 'password';
  passwordIcon: any = 'eye-off';
  login: FormGroup;
  Users: any = [];
    baseUrl = environment.baseUrl;
  constructor(
      private router:Router,
      private navCtrl:NavController,
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private userCrudService: UserCrudService,
     // private loginService:LoginService,
      private toastCtrl: ToastController,
   
  ) 
  { 
  this.login = formBuilder.group({
          mem_mobile: ['', Validators.required]
       });
  }

  ngOnInit() {
  }
  goToRegister() {
    //this.router.navigate(['/register']);
  }
  hideShowPassword() {
    console.log('pressed');
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
 onFormSubmit(form:NgForm)  {

   alert(form);
    //localStorage.setItem('uid','rahul');
   // this.navCtrl.navigateRoot(['/home']);
    console.log(form);

     this.userCrudService.getUsers().subscribe((response) => {
      this.Users = response;
      console.log(this.Users);
      alert(JSON.stringify(response));
    })

  
    //================service for send otp and store otp in db=========

       
    //================service for send otp ============================
  }



  goToForgot() {
    //this.router.navigate(['/reset']);
  }

    async showSuccesToast(message: string) {
          const toast = await this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'bottom',
            //showCloseButton: true
          });
          toast.present();
        }

        async showFailToast(message: string) {
          const toast = await this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top'
          });
           toast.present();
        }
}
