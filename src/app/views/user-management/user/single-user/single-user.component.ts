import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { indexOf } from 'lodash';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {
  isLinear = false;
  firstFormGroup: any = FormGroup;
  secondFormGroup: any = FormGroup;
  breadCrumblocationsList: any = []
  loadingRouteConfig: boolean = false

  result: any;
  //user-group
  user_group_name: any;
  name: any;

  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private router: Router,
    private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.updateBreadCrumb()

    this.firstFormGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      username: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone_no: [null, [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      address: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      user_group: ['', Validators.required]
    });
   
  }
  updateBreadCrumb() {
    this.breadCrumblocationsList = [
      {
        'locationName': 'Managment',
        'link': '/user/group-management',
        'currentPage': false
      },
      {
        'locationName': 'User Group',
        'link': '/user/group-management',
        'currentPage': true
      }
    ];

    window.scrollTo(0, 0);
    // console.log("breadCrumblocationsList", this.breadCrumblocationsList);
  }
  redirect(link: any) {
    console.log(link);
    if (link != undefined && link != '') {
      this.router.navigateByUrl(link);
    }
  }

  // Demographic
  valid_user() {
    let body = {
      username: this.firstFormGroup.value.username
    }
    this.apiMethod.get_request_Param(this.apiString.single_user.valid_user, body).subscribe(data => {
      this.result = data
      console.log('r = ', this.result.status)
      if (this.result.status == "Exist Username") {
        this.apiMethod.popupMessage('error', 'UserName Exist!!')
      }
      else {
        this.apiMethod.popupMessage('success', 'UserName Okk!!')
      }
    })
    
    // console.log(this.result.status)
  }
  valid_email() {
    let body = {
      email: this.firstFormGroup.value.email
    }

    this.apiMethod.get_request_Param(this.apiString.single_user.valid_email, body).subscribe(data => {

      this.result = data
      // console.log('r = ',this.result.status)
      if (this.result.status === "Exist-Email") {
        this.apiMethod.popupMessage('error', 'Email Already Exist!!')
      }
    }) 
    // console.log(this.firstFormGroup.value.email)
  }

  user_group() {

    this.apiMethod.get_request(this.apiString.group_user.user_access).subscribe(data => {
      // console.log('User_group : ',data)
      this.user_group_name = data;
      this.name = this.user_group_name.data
    })

  }

  insert_values() {
    let f_group = this.firstFormGroup.value
    let s_group = this.secondFormGroup.value
    let body = Object.assign({}, f_group, s_group);

    this.apiMethod.post_request(this.apiString.single_user.insert_values, body).subscribe(data => {
      this.result = data
      console.log(this.result)
      if(this.result.status_code == 204){
        this.apiMethod.popupMessage('success', 'Updated Successfully !!')
      }
      else {
        this.apiMethod.popupMessage('error','Not Updated !!')     
      }
    })
   
   
  }

  // selected_value(val : any){
  //   let param = val
  //     this.apiMethod.get_request_Param(this.apiString.group_user.group_description,param).subscribe(data=>{
  //       console.log(data)
  //     })

  //   console.log(param)
  // }

  submit() {
    // console.log(this.firstFormGroup.value, this.secondFormGroup.value)
    this.insert_values()
  }


}
