import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { issuemodel } from '../issuemodel';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  public dataid:any;
  public book:issuemodel={} as issuemodel
  constructor(private api:ApiService,private activateroute:ActivatedRoute,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.activateroute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('id');
      //console.log(this.dataid)
    })
    this.api.fetchdata(this.dataid).subscribe((data:any)=>{
     this.book = data;
    // console.log(this.book)
    })
  }

  //update
  updatedata(){
    this.api.update(this.book,this.dataid).subscribe((data:any)=>{
      this.toastr.success("Data updated successfully!!!!")
      this.router.navigate(['/records'])
    })
  }
}
  

 