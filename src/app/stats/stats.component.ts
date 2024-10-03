import { Component, OnInit } from '@angular/core';
import { ApiService, ApiiService } from '../service/api.service';
import { issuemodel } from '../issuemodel';
import { addbookmodel } from '../addbookmodel';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  totalBooks: number = 0;         
  totalStudents: number = 0;       
  totalIssuedBooks: number = 0;    
  totalAvailableBooks: number = 0;  

  constructor(private apiService: ApiService, private apiiService: ApiiService) {}

  ngOnInit(): void {
    this.getTotalBooks();
    this.getTotalStudents();
  }

  getTotalBooks(): void {
    // No need to use { books: addbookmodel[] } type; just use addbookmodel[]
    this.apiiService.booklist().subscribe(
      (books: addbookmodel[]) => { // Directly use addbookmodel[]
        console.log('Fetched books:', books); // Log the books response
        // Convert total from string to number
        this.totalBooks = books.reduce((sum, book) => sum + (Number(book.total) || 0), 0); 
        console.log('Total Books:', this.totalBooks); // Log the total books
        this.getTotalIssuedBooks();
      },
      (error) => {
        console.error('Error fetching books:', error); // Log any errors
      }
    );
  }

  getTotalStudents(): void {
    this.apiService.records().subscribe((records: issuemodel[]) => {
      const issuedStudents = new Set(records.map(record => record.sid));
      this.totalStudents = issuedStudents.size; // Count unique students
    });
  }

  getTotalIssuedBooks(): void {
    this.apiService.records().subscribe((records: issuemodel[]) => {
      this.totalIssuedBooks = records.length; // Each record represents an issued book
      this.calculateAvailableBooks(); // Calculate available books after fetching issued books
    });
  }

  calculateAvailableBooks(): void {
    this.totalAvailableBooks = this.totalBooks - this.totalIssuedBooks; // Calculate available books
    console.log('Total Available Books:', this.totalAvailableBooks); // Log available books
  }
}
