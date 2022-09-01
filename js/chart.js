var xValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var yValues = [1000, 3000, 2500 , 1495, 5000, 4000, 3500, 3789, 4503, 4000, 3879, 4600];
var barColors = ["green"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
     
    }
  }
});