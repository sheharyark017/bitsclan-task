const ctx = document.getElementById("myChart").getContext("2d");

const labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"];

const data = {
  labels,
  datasets: [
    {
      data: [800, 850, 850, 1100, 1060, 799, 950],
      label: "MALE",
      backgroundColor: "#4d95cf",
      borderColor: "#4d95cf",
      pointBorderColor: "#4d95cf",
      pointHighlightStroke: "#8fcdff",
      tension: 0.5,
    },
    {
      data: [1000, 1200, 1150, 1300, 960, 1399, 750],
      label: "FEMALE",
      backgroundColor: "#ff00a9",
      borderColor: "#ff00a9",
      pointBorderColor: "#ff00a9",
      pointBackgroundColor: "#ff6bcd",
      tension: 0.5,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    fill: true,
    responsive: true,
  },
};

const myChart = new Chart(ctx, config);

const ctx2 = document.getElementById("myChart2").getContext("2d");

const labels2 = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const data2 = {
  labels: labels2,
  datasets: [
    {
      data: [30, 35, 15, 45, 25, 37, 48],
      backgroundColor: "#4d95cf",
      borderColor: "#4d95cf",
      pointBorderColor: "#4d95cf",
      pointHighlightStroke: "#8fcdff",
      tension: 0.5,
    },
    {
      data: [35, 45, 25, 25, 35, 37, 28],
      backgroundColor: "#ff00a9",
      borderColor: "#ff00a9",
      pointBorderColor: "#ff00a9",
      pointBackgroundColor: "#ff6bcd",
      tension: 0.5,
    },
  ],
};

const config2 = {
  type: "line",
  data: data2,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const myChart2 = new Chart(ctx2, config2);
