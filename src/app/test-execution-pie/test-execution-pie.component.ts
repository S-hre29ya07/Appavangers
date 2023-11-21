import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-test-execution-pie',
  templateUrl: './test-execution-pie.component.html',
  styleUrls: ['./test-execution-pie.component.scss']
})
export class TestExecutionPieComponent implements OnInit {

  ngOnInit()
  {
    var myChart = new Chart("myChart1", {
      type: 'pie',
      data: {
        labels: [
          'Functional',
          'Performance',
          'Process Test',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [15, 15, 70],
          backgroundColor: [
            'rgb(130, 198, 226, 0.5)',
            'rgb(241, 241, 94, 0.5)',
            'rgb(228, 88, 88, 0.5)',
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
