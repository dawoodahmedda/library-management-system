import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { OrgChart } from 'd3-org-chart';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  // Create random org chart data
  createRandomData(): any[] {
    return [
      { id: 1, name: 'Random CEO', parentId: null },
      { id: 2, name: 'Random Manager 1', parentId: 1 },
      { id: 3, name: 'Random Manager 2', parentId: 1 },
      { id: 4, name: 'Random Employee 1', parentId: 2 },
      { id: 5, name: 'Random Employee 2', parentId: 2 },
      { id: 6, name: 'Random Employee 3', parentId: 3 },
      { id: 7, name: 'Random Employee 4', parentId: 3 }
    ];
  }

  createChart(): void {
    const data = this.createRandomData(); // Generate random data
    const chartContainerEl = this.chartContainer.nativeElement;

    // Ensure container has dimensions (can also be set in CSS)
    d3.select(chartContainerEl)
      .style('width', '100%')
      .style('height', '500px'); // Set chart height as needed

    const chart = new OrgChart()
      .container(chartContainerEl)
      .data(data)
      .nodeWidth((d: any) => 200)
      .nodeHeight((d: any) => 100)
      .childrenMargin((d: any) => 40)
      .compact(false)
      .nodeContent((d: any) => {
        const backgroundColor = this.getNodeColor(d.data); // Generate a color based on the node
        return `
          <div style="border: 1px solid #ccc; padding: 10px; background-color: ${backgroundColor};">
            <h3 style="color: #fff;">${d.data.name}</h3>
            <p style="color: #fff;">ID: ${d.data.id}</p>
          </div>`;
      })
      .render(); // Render the chart
  }

  // Function to assign colors based on node properties
  getNodeColor(node: any): string {
    // You can customize the logic for assigning colors (e.g., based on id, parentId, etc.)
    const colors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f39c12', '#1abc9c', '#e67e22'];
    return colors[node.id % colors.length]; // Return color based on id for variety
  }
}
