//make a on hover function to change text color of the links 

function checkRadio() {
    var correct = 0;
    var msg = ""
    if (document.getElementById("a1").checked) {
        correct += 1;
    }
    if (document.getElementById("c2").checked) {
        correct += 1;
    }
    if (document.getElementById("a3").checked) {
        correct += 1;
    }
    if (document.getElementById("b4").checked) {
        correct += 1;
    }

    if(correct == 1) {
        msg = " question "
    } else {
        msg = " questions "
    }

    alert("You got " + correct + msg + " correct!")
}

//stock charts below:
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart1);

var info1 = [[0, 61.05], [1, 58.05], [2, 57.32], [3, 55.25], [4, 56.83], [5, 55.78], 
                [6, 54.67], [7, 57.48]];


for (i = 0; i < info1.length; i++) {
    var pair = info1[i];
    var price = pair[1];
    console.log("Day " + i + " price: $" + price);
}

function drawChart1() {
    var data = new google.visualization.DataTable();
    
    data.addColumn('number', 'X');
    data.addColumn('number', 'VZ -Verizon');

    data.addRows([
        [0, 61.05], [1, 58.05], [2, 57.32], [3, 55.25], [4, 56.83], [5, 55.78], 
                [6, 54.67], [7, 57.48]
    ]);

    var options = {
        hAxis: {
            title: 'Day'
          },
        vAxis: {
            title: 'Price'
        }
    }

    var chart = new google.visualization.LineChart(document.getElementById('stock_chart_1'));
    chart.draw(data, options);
};



//chart 2:
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart2);

var info2 = [[0, 160], [1, 170.23], [2, 172.29], [3, 152.11], [4, 174.57], [5, 182.83], 
                [6, 204.74], [7, 205.51]];


for (i = 0; i < info2.length; i++) {
    var pair = info2[i];
    var price = pair[1];
    console.log("Day " + i + " price: $" + price);
}

function drawChart2() {
    var data = new google.visualization.DataTable();
    
    data.addColumn('number', 'X');
    data.addColumn('number', 'MSFT -Microsoft');

    data.addRows([
        [0, 160], [1, 170.23], [2, 172.29], [3, 152.11], [4, 174.57], [5, 182.83], 
                [6, 204.74], [7, 205.51]
    ]);

    var options = {
        hAxis: {
            title: 'Day'
          },
        vAxis: {
            title: 'Price'
        }
    }

    var chart = new google.visualization.LineChart(document.getElementById('stock_chart_2'));
    chart.draw(data, options);
};





//chart 3:
google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawChart3);

var info3 = [[0, 160], [1, 170.23], [2, 172.29], [3, 152.11], [4, 174.57], [5, 182.83], 
                [6, 204.74], [7, 205.51]];


for (i = 0; i < info3.length; i++) {
    var pair = info3[i];
    var price = pair[1];
    console.log("Day " + i + " price: $" + price);
}

function drawChart3() {
    var data = new google.visualization.DataTable();
    
    data.addColumn('number', 'X');
    data.addColumn('number', 'DIS -Disney');

    data.addRows([
        [0, 146.50], [1, 138.31], [2, 119], [3, 96.60], [4, 105.50], [5, 118.77], 
                [6, 113.01], [7, 116]
    ]);

    var options = {
        hAxis: {
            title: 'Day'
          },
        vAxis: {
            title: 'Price'
        }
    }

    var chart = new google.visualization.LineChart(document.getElementById('stock_chart_3'));
    chart.draw(data, options);
};



