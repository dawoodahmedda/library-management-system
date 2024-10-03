import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  
  displayedColumns: string[] = ['Student-id', 'Student Name', 'Fromdate', 'Todate', 'Book Name',  'Action'];
  dataSource = new MatTableDataSource<any>();
  totalItems: number = 0; // Total number of items
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to paginator

  constructor(private api: ApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.displaybook();
  }

  displaybook() {
    this.api.records().subscribe({
      next: (res) => {
        this.dataSource.data = res;
        this.totalItems = res.length; // Update total items count
        this.dataSource.paginator = this.paginator; // Assign paginator to dataSource
      },
      error: (err) => {
        this.toastr.error("Error fetching books!");
      }
    });
  }

  // Delete
  delete(id: number) {
    this.api.delete(id).subscribe({
      next: (res) => {
        this.toastr.success("Book deleted successfully!!!");
        this.displaybook(); // Refresh the list after deletion
      },
      error: (err) => {
        this.toastr.error("Error deleting book!");
      }
    });
  }
}
