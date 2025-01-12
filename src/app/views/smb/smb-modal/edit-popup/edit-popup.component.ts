import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.scss']
})
export class EditPopupComponent implements OnInit {

  loadingRouteConfig: boolean = false
  updateRecord: any = FormGroup
  url: any;
  apiStringURL: any;
  constructor(
    public dialogRef: MatDialogRef<EditPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {

    if (this.data.fileName === 'smb') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.smb_mini_bar : this.apiString.smb
    } else if (this.data.fileName === 'incoterm_exceptions') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.incoterm_exceptions_mini_bar : this.apiString.incoterm_exceptions
    } else if (this.data.fileName === 'certificate') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.certificate_mini_bar : this.apiString.certificate
    } else if (this.data.fileName === 'freight_parity') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.freight_parity_mini_bar : this.apiString.freight_parity
    } else if (this.data.fileName === 'grade') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.grade_mini_bar : this.apiString.grade
    } else if (this.data.fileName === 'length_logistic') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.length_logistic_mini_bar : this.apiString.length_logistic
    } else if (this.data.fileName === 'length_production') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.length_production_mini_bar : this.apiString.length_production
    } else if (this.data.fileName === 'profile') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.profile_mini_bar : this.apiString.profile
    } else if (this.data.fileName === 'profile_lberia_italy') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.profile_lberia_italy_mini_bar : this.apiString.profile_lberia_italy
    } else if (this.data.fileName === 'transport_mode') {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.transport_mode_mini_bar : this.apiString.transport_mode
    } else {
      this.apiStringURL = this.data.type === 'miniBar' ? this.apiString.delivery_mill_mini_bar : this.apiString.delivery_mill

    }
  }

  ngOnInit(): void {
    console.log(this.url, this.data)
    var objects: any = {};
    this.data.fieldValue.forEach((element: any, index: any) => {
      objects[element] = []
      if (index === this.data.fieldValue.length - 1) {
        objects['id'] = []
      }
    });
    console.log(objects)
    this.updateRecord = this.fb.group(objects)
    console.log(this.updateRecord)
    setTimeout(() => {
      this.patchValue()
    })
  }
  patchValue() {
    this.updateRecord.patchValue(this.data.content)
  }
  closeModel() {
    this.dialogRef.close()

  }
  editRecord() {
    delete this.updateRecord.value.action
    console.group(this.updateRecord.value)
    this.loadingRouteConfig = true
    this.apiMethod.post_request(this.data.updateURL, this.updateRecord.value).subscribe(result => {
      console.log(result)
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('success', ' Record successfully updated')
      this.closeModel()
    }, error => {
      console.log(error)
      this.loadingRouteConfig = false
      this.apiMethod.popupMessage('error', 'Error while updating bace price addition')
      // this.closeModel()
    })
  }
}
