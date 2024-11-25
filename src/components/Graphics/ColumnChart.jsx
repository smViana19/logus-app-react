import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart = ({ grades, studentAverage }) => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'], // Observa alterações na classe
    });

    return () => observer.disconnect();
  }, []);
  if (grades.length === 0) {
    return <div>Não há notas disponíveis.</div>;
  }


  const series = [
    {
      name: 'Notas',
      data: grades.map(nota => nota.grade),
    },
    {
      name: 'Média',
      data: Array(grades.length).fill(studentAverage),
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      background: isDarkMode ? 'bg-zinc-700' : '#FFFFFF', // Fundo com base no modo
    },
    theme: {
      mode: isDarkMode ? 'dark' : 'light', // Define o tema do gráfico
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['#0341fc', '#8003fc'],
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
        stops: [0, 100],
      },
    },
    colors: ['#9a03fc', '#9a03fc'],
    xaxis: {
      categories: grades.map(nota => nota.subject.nome),
      labels: {
        style: {
          colors: isDarkMode ? '#E5E7EB' : '#1F2937', // Ajusta as cores do texto
        },
      },
    },
    yaxis: {
      title: {
        text: 'Notas',
        style: {
          color: isDarkMode ? '#E5E7EB' : '#1F2937',
        },
      },
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: {
          colors: isDarkMode ? '#E5E7EB' : '#1F2937',
        },
        formatter: function (value) {
          return value + '%';
        },
      },
    },
    tooltip: {
      theme: isDarkMode ? 'dark' : 'light',
      y: {
        formatter: function (val) {
          return val + ' %';
        },
      },
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
              background: '#9a03fc',
            },
            text: 'Média: ' + studentAverage.toFixed(2) + '%',
          },
        },
      ],
    },
  };

  return (
    <div className="dark:bg-zinc-800 bg-white p-6 rounded-xl shadow">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
          className="dark:text-white"
        />
      </div>
    </div>
  );
};

export default ColumnChart;
