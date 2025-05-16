// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

//Show Area Chart
function showChart(chartId) {
  var ctx = document.getElementById("myAreaChart");
  var canva = document.getElementById("areaChart");
  ctx.style.display = "block";
  // Create a new chart based on the chartId
  switch (chartId) {
    case "btn-chart-1":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Candles / Biscuits / Snacks",
            "Dairy / Soy products",
            "Drink",
            "Noodle / Cooking needs / Processed food(cold)",
            "Rice / Oil / Canned food / Fruits / Vegetables / Meat",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [23.0, 14.0, 18.0, 16.3, 40.94],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [3, 5, 7, 12, 29],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
    case "btn-chart-2":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Bakery / Cereals / Spreads",
            "Beer / Wines / Spirits",
            "Candles / Biscuits / Snacks",
            "Dairy / Soy products",
            "Drink",
            "Milk powder / Baby care",
            "Noodle / Cooking needs / Processed food(cold)",
            "Rice / Oil / Canned food / Fruits / Vegetables / Meat",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [35.48, 53.92, 25.03, 30.82, 22.74, 240.2, 23.11, 47.85],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [84, 40, 203, 192, 170, 52, 257, 151],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
    case "btn-chart-3":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: ["Candles / Biscuits / Snacks", "Milk powder / Baby care"],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [20.71, 281.44],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [16, 83],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
    case "btn-chart-4":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Bakery / Cereals / Spreads",
            "Beer / Wines / Spirits",
            "Candles / Biscuits / Snacks",
            "Dairy / Soy products",
            "Drink",
            "Milk powder / Baby care",
            "Noodle / Cooking needs / Processed food(cold)",
            "Rice / Oil / Canned food / Fruits / Vegetables / Meat",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [44.58, 53.26, 28.1, 30.43, 24.7, 216.9, 22.96, 58.46],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [73, 45, 157, 176, 158, 74, 254, 191],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
    case "btn-chart-5":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Candles / Biscuits / Snacks",
            "Dairy / Soy products",
            "Drink",
            "Milk powder / Baby care",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [20.13, 19.4, 16.1, 252.78],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [3, 5, 8, 91],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
    case "btn-chart-6":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Bakery / Cereals / Spreads",
            "Beer / Wines / Spirits",
            "Candles / Biscuits / Snacks",
            "Dairy / Soy products",
            "Drink",
            "Milk powder / Baby care",
            "Noodle / Cooking needs / Processed food(cold)",
            "Rice / Oil / Canned food / Fruits / Vegetables / Meat",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [35.48, 53.67, 24.47, 30.93, 22.75, 242.61, 23.01, 48.13],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [84, 42, 190, 191, 169, 54, 255, 148],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
    case "btn-chart-7":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Fresh Food",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [7.55],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [13],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
    break;
    case "btn-chart-8":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Fresh Food",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [46.90],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [10],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
      case "btn-chart-9":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Fresh Food",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [12.64],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [5],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
      case "btn-chart-10":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Dairy / Soy products",
            "Drink",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [20.90, 16.90],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [1, 2],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
      case "btn-chart-11":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Fresh Food",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [21.70],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [1],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
      case "btn-chart-12":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Fresh Food",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [29.00],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [1],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;
      case "btn-chart-13":
      var myLineChart = new Chart(canva, {
        type: "line",
        data: {
          labels: [
            "Fresh Food",
          ],
          datasets: [
            {
              label: "Average of Price",
              lineTension: 0.3,
              backgroundColor: "rgba(78, 115, 223, 0.05)",
              borderColor: "rgba(78, 115, 223, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(78, 115, 223, 1)",
              pointBorderColor: "rgba(78, 115, 223, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
              pointHoverBorderColor: "rgba(78, 115, 223, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [12.98],
            },
            {
              label: "Total Product",
              lineTension: 0.3,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              pointRadius: 3,
              pointBackgroundColor: "rgba(255, 99, 132, 1)",
              pointBorderColor: "rgba(255, 99, 132, 1)",
              pointHoverRadius: 3,
              pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
              pointHoverBorderColor: "rgba(255, 99, 132, 1)",
              pointHitRadius: 10,
              pointBorderWidth: 2,
              data: [3, 5, 7, 12, 29],
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 20,
              right: 10,
              top: 25,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                type: "category", // Set the scale to categorical
                categoryPercentage: 0.5, // Adjust this to control the space between bars
                barPercentage: 0.5, // Adjust this to control the width of the bars
              },
            ],
            yAxes: [
              {
                ticks: {
                  maxTicksLimit: 5,
                  padding: 10,
                  // Include a dollar sign in the ticks
                  callback: function (value, index, values) {
                    return number_format(value);
                  },
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 14,
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: "index",
            caretPadding: 10,
            callbacks: {
              label: function (tooltipItem, chart) {
                var datasetLabel =
                  chart.datasets[tooltipItem.datasetIndex].label || "";
                return datasetLabel + number_format(tooltipItem.yLabel);
              },
            },
          },
        },
      });
      break;


    default:
      console.error("Invalid chart ID");
  }
}
