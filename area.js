var options = {
  chart: {
    height: 320,
    type: "area",
    foreColor: '#4608D5'
  },
  series: [
    {
      name: "Series 1",
      data: [20, 45, 56, 70, 69, 71, 76]
    }
  ],   
  fill: {
    type: "gradient",
    gradient: {
      
      colorStops: [
        {
          offset: 0,
          color: "#4299DC",
          opacity: 0.8
        },
      
        {
          offset: 100,
          color: "#654399",
          opacity: 0.8
        }
      ]
    }
  },
  grid: {
     borderColor: '#6D6D6D'
  },
  xaxis: {
    categories: [
      "22 Feb",
      "23 Feb",
      "24 Feb",
      "25 Feb",
      "26 Feb",
      "27 Feb",
      "28 Feb"
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();