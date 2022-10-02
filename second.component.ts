import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {
  alert=false;
  headers =["sno","firstName","lastName","email","phno",]
  rows:any = [
    {
      firstName:"abcd",
      lastName:"abcd",
      email:'abc@gmail.com',
      phno:'1234567895'
    },
    
  ]

  showmsg:boolean=false;
  firstName: any;
  lastName:any;
  mail:any;
  phno:any;
  // constructor(public http: HttpClient) {
  // }
  constructor(private fb: FormBuilder, public http: HttpClient) { }
  profiles = this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(4), forbiddenNameValidator(() => this.rows) ]],
    lastName: ['',[Validators.required, Validators.minLength(4)]],
    mail: ['',[Validators.required,Validators.minLength(12),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
              phno:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[6-9]\\d{9}')
            ]]
    // mob: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    // Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  })

  ngOnInit(): void { 
    this.getData()
  }
  getData(){
    // debugger
    this.http.get<any[]>('https://crudcrud.com/api/888b2e69ff8740cab51f0f66f8fbc8bc/users')
     .subscribe(data => {
        this.rows = data;
      },
    )
  }
  taskremove(id:any){
    // const index = this.rows.indexOf(row);
    // this.rows.splice(index,1);
    // debugger
     if(id !=undefined && id !=null && id !="")
     {
       var url='https://crudcrud.com/api/888b2e69ff8740cab51f0f66f8fbc8bc/users'+id;
       this.http.delete<any>(url).subscribe(data =>{
         this.getData();
       })
      }
  }  
  editform(row:any){  }
  
  onSubmit() {
  }
  createUser(){
    debugger
    // this.rows.forEach((element:any) => {
    //   if(element.firstName != this.profiles.value.firstName){
    //     debugger
        let req={
          firstName:this.profiles.value.firstName,
          lastName:this.profiles.value.lastName,
          mail:this.profiles.value.mail,
          phno:this.profiles.value.phno,
         }
         this.http.post<any[]>('https://crudcrud.com/api/888b2e69ff8740cab51f0f66f8fbc8bc/users',req)
         .subscribe(abc => {
              let x =abc
              this.profiles.get("firstName")?.setValue("");
              this.profiles.get("lastName")?.setValue("");
              this.profiles.get("mail")?.setValue("");
              this.profiles.get("phno")?.setValue("");
              // alert('Data Added')
            })
      // }else{
      // alert('Data Already Existed')
      }    
}



