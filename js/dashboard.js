// var btn_deconnexion=    document.getElementById('btn-deconnexion');

//   btn_deconnexion.addEventListener('click', function (e){
//     console.log("ya kinkin????");
//     window.location.href="../index.html";
//   });

  // chartJS **********************************

var ctxBar = document.getElementById("chartBar").getContext("2d");
var ctxRadar = document.getElementById("chartRadar").getContext("2d");
var ctxLine = document.getElementById("chartLine").getContext("2d");
var ctxPolarArea= document.getElementById("chartPolarArea").getContext("2d");



var chartBar = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: 'EXEMPLE de GRAPHIQUE ',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      layout: {
        padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 20
        }
      },

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }

        
        
    }
});


//  ******************************************************
var chartRadar = new Chart(ctxRadar, {
  type: 'radar',
  data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: 'EXEMPLE de GRAPHIQUE ',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.9)',
              'rgba(54, 162, 235, 0.9)',
              'rgba(255, 206, 86, 0.9)',
              'rgba(75, 192, 192, 0.9)',
              'rgba(153, 102, 255, 0.9)',
              'rgba(255, 159, 64, 0.9)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
    layout: {
      padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
      }
    },

      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }

      
      
  }
});


//  ******************************************************
var chartLine = new Chart(ctxLine, {
  type: 'line',
  data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: 'EXEMPLE de GRAPHIQUE ',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.9)',
              'rgba(54, 162, 235, 0.9)',
              'rgba(255, 206, 86, 0.9)',
              'rgba(75, 192, 192, 0.9)',
              'rgba(153, 102, 255, 0.9)',
              'rgba(255, 159, 64, 0.9)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
    layout: {
      padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
      }
    },

      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }

      
      
  }
});

//  ******************************************************
var chartPolarArea = new Chart(ctxPolarArea, {
  type: 'polarArea',
  data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
          label: 'EXEMPLE de GRAPHIQUE ',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.9)',
              'rgba(54, 162, 235, 0.9)',
              'rgba(255, 206, 86, 0.9)',
              'rgba(75, 192, 192, 0.9)',
              'rgba(153, 102, 255, 0.9)',
              'rgba(255, 159, 64, 0.9)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
    layout: {
      padding: {
          left: 20,
          right: 20,
          top: 20,
          bottom: 20
      }
    },

      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }

      
      
  }
});