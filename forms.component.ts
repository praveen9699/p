import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
 Name:any;
 Mail:any;
 PhoneNumber:any;
 password:any;
 Conformpassword:any;
 passworderror:any;
 employee:any = [
   {employee:"Developer"},
   {employee:"Tester"},
   {employee:"Admin"},
   {employee:"HR"},
   {employee:'Maneger'},
   {id:"123"},
]
header=["Sno","Name","Mail","PhoneNumber","Dropdown",];
rows:any =[
  {
    Name:"test ",
    Mail:" afd@gmail.com",
    PhoneNumber:" 789658442",
    Dropdown:" tester",
  }
]
  captchatext: any;
  myCanvas: any;
  context: any;
  random: any;
  captchaerror:any;
 constructor(private fb: FormBuilder, public http: HttpClient) { }
  profiles = this.fb.group({
    Name: ['',[Validators.required,Validators.minLength(4) ]],
    Mail: ['',[Validators.required,Validators.minLength(12),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    PhoneNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[6-9]\\d{9}') ]],
    password:['',[Validators.required,Validators.minLength (8)]],
    Conformpassword:['',[Validators.required , Validators.minLength(8)]],
    captcha:['',[Validators.required]],
  })
  ngOnInit(): void {
    this.captcha();
    }
    reGenCaptcha(){
      this.captcha();
    }
    captcha(){
      setTimeout(()=>{
        this.random = Math.floor(100000 + Math.random() * 900000);
         var canvas = <HTMLCanvasElement>document.getElementById('random');
         var context = canvas.getContext('2d');
         context?.clearRect(0,0,canvas.width,canvas.height);
         context!.font ='30px Arial, Helvetica, sans-serif';
         context?.fillText(this.random, 10, 35);
       },200);
    }
changepassword(event:any){
this.profiles.value.password
let password = this.profiles.value.password
if(event.target.value==password){
  this.passworderror = false;
}
else{
  this.passworderror = true;
}
}
captchamat(event:any){
  this.profiles.value.captcha
  let random= this.profiles.value.captcha
  if(event.target.value == this.random){
    this.captchaerror = false;
  }
 else{
   this.captchaerror = true;
 }
}
register(){
  debugger
  let req={
    Name:this.profiles.value.Name,
    Mail:this.profiles.value.Mail,
    PhoneNumber:this.profiles.value.PhoneNumber,
    Dropdown:this.profiles.value.Dropdown,
   }
   this.rows=this.rows.push(req)
}
}

