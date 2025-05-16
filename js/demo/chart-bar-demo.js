// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

//Show Bar Chart
function showBarChart(chartId) {
  var ctx = document.getElementById("myBarChart");
  var canva = document.getElementById("barChart");
  ctx.style.display = "block";
  // Create a new chart based on the chartId
  switch (chartId) {
    case "btn-chart-1":
      var myBarChart = new Chart(canva, {
        type: 'bar',
        data: {
          labels: ["JASONS", "PARKNSHOP", "WELLCOMES"],
          datasets: [{
            label: "Amount: ",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [84, 73, 84],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'Sources'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 6
              },
              maxBarThickness: 25,
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 300,
                maxTicksLimit: 10,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          },
        }
      });
      break;
    case "btn-chart-2":
      var myBarChart = new Chart(canva, {
        type: 'bar',
        data: {
          labels: ["JASONS", "PARKNSHOP", "WELLCOMES"],
          datasets: [{
            label: "Amount: ",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [40, 45, 42],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'Sources'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 6
              },
              maxBarThickness: 25,
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 300,
                maxTicksLimit: 10,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          },
        }
      });
      break;
    case "btn-chart-3":
      var myBarChart = new Chart(canva, {
        type: 'bar',
        data: {
          labels: ["DCHFOOD", "JASONS", "MANNINGS", "PARKNSHOP", "WATSONS", "WELLCOMES"],
          datasets: [{
            label: "Amount: ",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [3, 203, 16, 157, 3, 190],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'Sources'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 6
              },
              maxBarThickness: 25,
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 300,
                maxTicksLimit: 10,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          },
        }
      });
      break;
    case "btn-chart-4":
      var myBarChart = new Chart(canva, {
        type: 'bar',
        data: {
          labels: ["AEON", "DCHFOOD", "JASONS", "PARKNSHOP", "WATSONS", "WELLCOMES"],
          datasets: [{
            label: "Amount: ",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [1, 5, 192, 176, 5, 191],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'Sources'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 6
              },
              maxBarThickness: 25,
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 300,
                maxTicksLimit: 10,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          },
        }
      });
      break;
    case "btn-chart-5":
      var myBarChart = new Chart(canva, {
        type: 'bar',
        data: {
          labels: ["AEON", "DCHFOOD", "JASONS", "PARKNSHOP", "WATSONS", "WELLCOMES"],
          datasets: [{
            label: "Amount: ",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [2, 7, 170, 158, 8, 169],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'Sources'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 6
              },
              maxBarThickness: 25,
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 300,
                maxTicksLimit: 10,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          },
        }
      });
      break;
    case "btn-chart-6":
      var myBarChart = new Chart(canva, {
        type: 'bar',
        data: {
          labels: ["Local Chicken Farm", "Slaughthouses", "Cheung Sha Wan Wholesale Vegetable Market", "Cheung Sha Wan Fish Market", "Cheung Sha Wan and Western Wholesale Food Market", "Cheung Sha Wan Temporary Wholesale Poultry Market"],
          datasets: [{
            label: "Amount: ",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [1, 1, 13, 10, 5, 1],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'Sources'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 6
              },
              maxBarThickness: 25,
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 300,
                maxTicksLimit: 10,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          },
        }
      });
      break;
    case "btn-chart-7":
      var myBarChart = new Chart(canva, {
        type: 'bar',
        data: {
          labels: [ "JASONS", "MANNINGS", "PARKNSHOP", "WATSONS", "WELLCOMES"],
          datasets: [{
            label: "Amount: ",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [52, 83, 74, 91, 54],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'Sources'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 6
              },
              maxBarThickness: 25,
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 300,
                maxTicksLimit: 10,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          },
        }
      });
      break;
    case "btn-chart-8":
      var myBarChart = new Chart(canva, {
        type: 'bar',
        data: {
          labels: [ "DHCFOOD", "JASONS", "PARKNSHOP","WELLCOMES"],
          datasets: [{
            label: "Amount: ",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [12, 257, 254, 255],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'Sources'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 6
              },
              maxBarThickness: 25,
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 300,
                maxTicksLimit: 10,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          },
        }
      });
      break;
    case "btn-chart-9":
      var myBarChart = new Chart(canva, {
        type: 'bar',
        data: {
          labels: [ "DHCFOOD", "JASONS", "PARKNSHOP", "WELLCOMES"],
          datasets: [{
            label: "Amount: ",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [29, 151, 191, 148],
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 10,
              right: 25,
              top: 25,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              time: {
                unit: 'Sources'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 6
              },
              maxBarThickness: 25,
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 300,
                maxTicksLimit: 10,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
          },
          legend: {
            display: false
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + number_format(tooltipItem.yLabel);
              }
            }
          },
        }
      });
      break;
      
    default:
      console.error("Invalid chart ID");
  }
}

// Bar Chart Example
// var ctx = document.getElementById("myBarChart");
// var myBarChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ["AEON", "DCHFOOD", "JASONS", "Local Chicken Farm", "MANNINGS", "PARKNSHOP", "Slaughthouses", "WATSONS", "WELLCOMES", "Cheung Sha Wan Wholesale Vegetable Market", "Cheung Sha Wan Fish Market", "Cheung Sha Wan and Western Wholesale Food Market", "heung Sha Wan Temporary Wholesale Poultry Market"],
//     datasets: [{
//       label: "Amount: ",
//       backgroundColor: "#4e73df",
//       hoverBackgroundColor: "#2e59d9",
//       borderColor: "#4e73df",
//       data: [4215, 5312, 6251, 7841, 9821, 14984],
//     }],
//   },
//   options: {
//     maintainAspectRatio: false,
//     layout: {
//       padding: {
//         left: 10,
//         right: 25,
//         top: 25,
//         bottom: 0
//       }
//     },
//     scales: {
//       xAxes: [{
//         time: {
//           unit: 'month'
//         },
//         gridLines: {
//           display: false,
//           drawBorder: false
//         },
//         ticks: {
//           maxTicksLimit: 6
//         },
//         maxBarThickness: 25,
//       }],
//       yAxes: [{
//         ticks: {
//           min: 0,
//           max: 15000,
//           maxTicksLimit: 5,
//           padding: 10,
//           // Include a dollar sign in the ticks
//           callback: function(value, index, values) {
//             return number_format(value);
//           }
//         },
//         gridLines: {
//           color: "rgb(234, 236, 244)",
//           zeroLineColor: "rgb(234, 236, 244)",
//           drawBorder: false,
//           borderDash: [2],
//           zeroLineBorderDash: [2]
//         }
//       }],
//     },
//     legend: {
//       display: false
//     },
//     tooltips: {
//       titleMarginBottom: 10,
//       titleFontColor: '#6e707e',
//       titleFontSize: 14,
//       backgroundColor: "rgb(255,255,255)",
//       bodyFontColor: "#858796",
//       borderColor: '#dddfeb',
//       borderWidth: 1,
//       xPadding: 15,
//       yPadding: 15,
//       displayColors: false,
//       caretPadding: 10,
//       callbacks: {
//         label: function(tooltipItem, chart) {
//           var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
//           return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
//         }
//       }
//     },
//   }
// });
