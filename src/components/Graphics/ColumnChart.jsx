import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart = () => {
  const [series] = useState([
    {
      name: 'Net Profit',
      data: [0, 20, 30, 40, 50, 60, 70, 80, 90]
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }
  ]);

  const [options] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['#1A56DB', '#7E3BF2'] 
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        gradientToColors: ['#1A56DB', '#7E3BF2'], 
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.4, 
        stops: [0, 100]
      }
    },
    colors: ['#1A56DB', '#7E3BF2'],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: 'Percentage (%)'
      },
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: function (value) {
          return value + '%'; 
        }
      }
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " %"; 
        }
      }
    }
  });

  return (
    <div className='bg-white rounded-xl shadow'>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default ColumnChart;
