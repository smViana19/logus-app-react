import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart = ({ grades, studentAverage }) => {
  if (grades.length === 0) {
    return <div>Não há notas disponíveis.</div>;
  }
  const series = [
    {
      name: 'Notas',
      data: grades.map(nota => nota.grade)
    },
    {
      name: 'Média',
      data: Array(grades.length).fill(studentAverage)
    }
  ]
  const options = {
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
      colors: ['#0341fc', '#8003fc']
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        gradientToColors: ['#0341fc', '#9a03fc'],
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.4,
        stops: [0, 100]
      }
    },
    colors: ['#9a03fc', '#9a03fc'],
    xaxis: {
      categories: grades.map(nota => nota.subject.nome),
    },
    yaxis: {
      title: {
        text: 'Notas'
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
    },
    annotations: {
      yaxis: [
        {
          y: studentAverage,
          borderColor: '#9a03fc',
          label: {
            borderColor: '#9a03fc',
            style: {
              color: '#fff',
              background: '#9a03fc'
            },
            text: 'Média: ' + studentAverage.toFixed(2) + '%',
          }
        }
      ]
    }
  };

  return (
    <div className='bg-white rounded-xl shadow'>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default ColumnChart;
