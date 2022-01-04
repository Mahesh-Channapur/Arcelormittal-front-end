import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CitGlobalConstantService } from 'src/app/services/api-collection';
import { ApiService } from 'src/app/services/api.service';
import { orderStatus } from '../../managment-interface.serviec';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

  displayedColumns: string[] = [
    "confirmed_delivery_date",
    "customer_reference",
    "delivering_plant",
    "delv_week",
    "order_status",
    "quantity",
    "sales_doc_item_number",
    "sales_doc_number",
    "ship_to",
    "sold_to"
  ];
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  dataSource: any;
  loadingRouteConfig: boolean = false;
  filterForm: any = FormGroup
  resultdata: any = [];
  totalCount: any;
  show: boolean = false
  constructor(
    private apiString: CitGlobalConstantService,
    private apiMethod: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      search_string: [''],
      Order_Status: [''],
      Ship_To: [''],
      Sales_Doc_Number: [''],
      // DELV_WEEK: [''],
      limit: [100],
      offset: [0]
    })
    this.getOfferStatus()

  }
  getOfferStatus() {
    this.loadingRouteConfig = true
    let body = this.filterForm.value
    Object.keys(body).forEach(key => {
      if (body[key] === 'limit' || body[key] === 'offset') {
      } else {
        if (body[key] === "") {
          body[key] = 'all';
        }
      }
    });
    console.log(body)
    // this.resultdata = this.offer
    this.resultdata = []
    setTimeout(() => {
      this.apiMethod.get_request_Param(this.apiString.myTask.orderStatus, body).subscribe((result: any) => {
        this.loadingRouteConfig = false
        this.resultdata = result     
         this.totalCount=result.Count
        this.dataSource = new MatTableDataSource<orderStatus>((this.resultdata.data))
        console.log(this.resultdata)
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;

        }, 1000);

      }, error => {
        this.loadingRouteConfig = false
        this.apiMethod.popupMessage('error', 'Error while getting offer status')
      })
    }, 1000);

  }
  pageChangeCall(event: any) {
    console.log(event)
    this.filterForm.patchValue({
      offset: event.pageIndex,
      limit: event.pageSize
    })
    this.getOfferStatus()
  }
}
