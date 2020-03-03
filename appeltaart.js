					var chartProgress = document.getElementById("fuelProgress");
					// parseInt(document.getElementById("fuelslider")).value;
					var fuel = 77;
					var bullshit2 = 66;
					var appeltaart = 34;
					var noFuel = (100 - fuel);
					if (chartProgress) {
					  var myChartCircle = new Chart(chartProgress, {
					    type: 'doughnut',
					    data: {
					      labels: ["", ''],
					      datasets: [{
					        backgroundColor: ["#000000"],
					        data: [fuel, noFuel]
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
					        ctx.fillStyle = "#9b9b9b";
					        ctx.textBaseline = "middle";
					    
					        var text = fuel + "%",
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

		
		var chartProgress = document.getElementById("damageProgress");
					var noDamage = (100 - appeltaart);
					if (chartProgress) {
					  var myChartCircle = new Chart(chartProgress, {
					    type: 'doughnut',
					    data: {
					      labels: ["Hull Damage"],
					      datasets: [{
					        backgroundColor: ["#000000"],
					        data: [appeltaart, noDamage]
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
					        ctx.fillStyle = "#9b9b9b";
					        ctx.textBaseline = "middle";
					    
					        var text = appeltaart + "%",
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

						var chartProgress = document.getElementById("powerProgress");
					var noPower = (100 - bullshit2);
					if (chartProgress) {
					  var myChartCircle = new Chart(chartProgress, {
					    type: 'doughnut',
					    data: {
					      labels: ["", ''],
					      datasets: [{
					        backgroundColor: ["#000000"],
					        data: [bullshit2, noPower]
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
					        ctx.fillStyle = "#9b9b9b";
					        ctx.textBaseline = "middle";
					    
					        var text = bullshit2 + "%",
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

			