
var bed = 20;
var para= 66;
var morph = 34;


var chartProgress = document.getElementById("Beds");

var noBed = (80 - bed);
if (chartProgress) {
  var myChartCircle = new Chart(chartProgress, {
    type: 'doughnut',
    data: {
      labels: ["Beds in use", 'Beds left'],
      datasets: [{
        backgroundColor: ["#4299DC", '#DBD7F9'],
        data: [bed, noBed]
      }]
    },
    plugins: [{
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 100).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#200061";
        ctx.textBaseline = "middle";
    
        var text = bed,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
  }],
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 85
    }

  });

  
}




	var chartProgress = document.getElementById("Lyrica");
var noLyrica = (190 - para);
if (chartProgress) {
  var myChartCircle = new Chart(chartProgress, {
    type: 'doughnut',
    data: {
      labels: ["Lyrica left", 'Already used'],
      datasets: [{
        backgroundColor: ["#4299DC", '#DBD7F9'],
        data: [para, noLyrica]
      }]
    },
    plugins: [{
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 100).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#200061";
        ctx.textBaseline = "middle";
    
        var text = para + " kg",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
  }],
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 85
    }

  });

  
}

		var chartProgress = document.getElementById("Morphine");
var noMorphine = (210 - morph);
if (chartProgress) {
  var myChartCircle = new Chart(chartProgress, {
    type: 'doughnut',
    data: {
      labels: ["Mobic left", 'Already used'],
      datasets: [{
        backgroundColor: ["#4299DC", '#DBD7F9' ],
        data: [morph, noMorphine]
      }]
    },
    plugins: [{
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 100).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.fillStyle = "#200061";
        ctx.textBaseline = "middle";
    
        var text = morph + " kg",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
  }],
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 85
    }

  });

  
}

