import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Crowdsale Investors', 'Foundation'],
  datasets: [
    {
      label: 'Investor Distribution',
      data: [20,80],
      backgroundColor: [
        'rgba(0, 130, 255, 1.0)',
        'rgba(250, 160, 2, 1.0)',
      ],
    },
  ],
};

const options = {
    cutout: '65%',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: "right",
            labels: {
                usePointStyle: true,
            },
            font: {
                weight: 'bold',
                size: 24,
            }
        }
    },
    
}

export const DoughnutChart = ()=>{
  return (
        <Doughnut data={data} options={options}  />
  )
}
