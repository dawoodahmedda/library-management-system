import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { ApiiService } from '../service/api.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  
  displayedColumns: string[] = ['Book-image', 'Book-isbn', 'Book Name',  'Author',  'Book Total'];
  dataSource = new MatTableDataSource<any>();
  totalItems: number = 0; // Total number of items
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to paginator

  constructor(private api: ApiiService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.displaybook();
  }

  displaybook() {
    this.api.booklist().subscribe({
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
