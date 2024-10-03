import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { issuebookComponent } from './issuebook/issuebook.component';
import { RecordsComponent } from './records/records.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BooklistComponent } from './booklist/booklist.component';
import { ApiService } from './service/api.service';
import { ApiiService } from './service/api.service';
import { StatsComponent } from './stats/stats.component';
import { OrgChartComponent } from './org-chart/org-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    issuebookComponent,
    RecordsComponent,
    UpdatebookComponent,
    AddbookComponent,
    BooklistComponent,
    StatsComponent,
    OrgChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      preventDuplicates: true
    }),
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
  
    
  ],
  providers: [ApiService, ApiiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
