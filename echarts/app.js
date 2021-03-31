var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};

var option;

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
    }],
    // legend ??? 千，万，亿, ??? 千分位
    color: ['#ff00ff',],
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
