import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  //user-group
  user_group_name : any;
  name:any;

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
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone_no: ['', Validators.required],
      address: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      user_group: ['', Validators.required]
    });

    //testing
    


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
    console.log("breadCrumblocationsList", this.breadCrumblocationsList);
  }
  redirect(link: any) {
    console.log(link);
    if (link != undefined && link != '') {
      this.router.navigateByUrl(link);
    }
  }

  // Demographic
  valid_user(){
    let body =  this.firstFormGroup.value
    
    this.apiMethod.post_request(this.apiString.single_user.valid_user,body).subscribe(data=>{
      console.log(data)
    })
    console.log(body)
  }

  insert_values(){
    let body = {
      first_group : this.firstFormGroup.value
   }
   this.apiMethod.post_request(this.apiString.single_user.insert_values, body).subscribe(data=>{
    console.log('hiii',data)
   })
  }
  user_group(){
    this.apiMethod.get_request(this.apiString.group_user.user_access).subscribe(data=>{
      // console.log('User_group : ',data)
      this.user_group_name = data;
      this.name = this.user_group_name.data
    })
    console.log(this.name)
  }
  submit() {
    // console.log(this.firstFormGroup.value, this.secondFormGroup.value)
    
  }

 
}
