var options = {
  chart: {
    height: 380,
    type: "area",
    foreColor: '#6D6D6D'
  },
  series: [
    {
      name: "Series 1",
      data: [2, 23, 19, 45, 38, 52, 45]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        {
          offset: 0,
          color: "#EB656F",
          opacity: 1
        },
        {
          offset: 20,
          color: "#FAD375",
          opacity: 1
        },
        {
          offset: 60,
          color: "#61DBC3",
          opacity: 1
        },
        {
          offset: 100,
          color: "#95DA74",
          opacity: 1
        }
      ]
    }
  },
  grid: {
     borderColor: '#6D6D6D'
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan"
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();