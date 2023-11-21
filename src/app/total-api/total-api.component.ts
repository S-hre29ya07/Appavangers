import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-total-api',
  templateUrl: './total-api.component.html',
  styleUrls: ['./total-api.component.scss']
})
export class TotalAPIComponent implements OnInit {
  ngOnInit()
  {
    var myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
        labels: [
          'Get',
          'Put',
          'Post',
          'Delete',
          'Patch'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [60, 40, 60,30,25],
          backgroundColor: [
            'rgb(130, 198, 226, 0.5)',
            'rgb(241, 241, 94, 0.5)',
            'rgb(228, 88, 88, 0.5)',
            'rgb(46, 171, 46, 0.5)',
            'rgba(149, 186, 64, 0.5)'
          ],
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }
}
