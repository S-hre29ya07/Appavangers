import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-most-failed-api',
  templateUrl: './most-failed-api.component.html',
  styleUrls: ['./most-failed-api.component.scss']
})
export class MostFailedAPIComponent implements OnInit {

  ngOnInit()
  {
    var myChart = new Chart("myChart2", {
      type: 'bar',
      data: {
        labels: ['GET', 'POST', 'PATCH', 'PUT','DELETE'], // Add your labels here
        datasets: [{
          label: 'Most failed APIs',
          data: [30,25,20,15,10], // Add your data here
          backgroundColor: [
            'rgba(197, 52, 33, 0.5)',
            'rgba(197, 52, 33, 0.4)',
            'rgba(197, 52, 33, 0.3)',
            'rgba(197, 52, 33, 0.2)',
            'rgba(197, 52, 33, 0.1)'
          ],
          borderWidth: 1
        }]
      },
    options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 20,
                bottom: 20
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                // Change here
            	barPercentage: 0.9
            }]
        }
    }
  });
  }

}
