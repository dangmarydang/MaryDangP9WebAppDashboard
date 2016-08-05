/* ========================
      TRAFFIC WIDGET
=========================*/

/* Weekly Traffic */
var weeklyTrafficData = {
        labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [
            {
                data: [750,1250,1000,1500,2000,1500,1750,1250,1750,2000,1750,2250],
                backgroundColor: '#c7c8e5',
                lineTension: 0,
                pointBorderColor: '#7477BF',
                pointRadius: 6,
                pointBorderWidth: 3,
                pointBackgroundColor: '#fff'
            }
        ]
    };

/* Draw Traffic Graph */
var traffic = document.getElementById("traffic-canvas").getContext("2d");
var trafficChart = new Chart(traffic, {
    type: 'line',
    data: weeklyTrafficData,
    animation: {
        animateScale: true
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 500,
                    stepSize: 500
                },
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }]
        }
    }
});

/* ========================
    DAILY TRAFFIC WIDGET
=========================*/

/* Daily Traffic */
var dailyTrafficData = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                data: [50, 100, 175, 125, 225, 200, 100],
                backgroundColor: '#7477BF',
            }
        ]
    };

/* Draw Daily Traffic Bar Chart */
var dailyTraffic = document.getElementById("daily-canvas").getContext("2d");
var trafficChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: dailyTrafficData,
    animation: {
        animateScale: true
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 250,
                    min: 0,
                    stepSize: 50
                },
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }]
        }
    }
});

/* ========================
    MOBILE USER WIDGET
=========================*/
/* Mobile User data set */
var mobileData = {
    labels: [
        'Phones',
        'Tablets',
        'Desktops',
    ],
    datasets: [
        {
            data: [15, 15, 70],
            backgroundColor: [
                '#73b0be',
                '#7EBEA2',
                '#7477BF',
            ]
        }
    ]
};

/* Mobile User Pie Chart */
var mobileUsers = document.getElementById("mobile-canvas").getContext("2d");
var mobileChart = new Chart(mobileUsers, {
    type: 'doughnut',
    data: mobileData,
    animation: {
        animateScale: true
    },
    options: {
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 15
            }
        }
    }
});
