<template>
    <view class="charts-box">
      <!-- <qiun-data-charts
          type="line"
          :chartData="chartsDataLine1"
      /> -->
    <!-- 1. 自定义类型 -->
    <qiun-data-charts
        type="demotype"
        :opts="configs"
        :chartData="chartsDataLine1"
        :canvas2d="true"
        canvasId="components_test_smooth_line_custome"
        :ontap="true"
        :ontouch="false"
        :onmouse="false"
        @complete="complete"
        @getIndex="getIndex"
        @scrollLeft="scrollLeft"
        @scrollRight="scrollRight"
        @getTouchStart="getTouchStart"
        @getTouchMove="getTouchMove"
        @getTouchEnd="getTouchEnd"
    />
    <!-- 2. 覆盖 line -->
    <qiun-data-charts
        type="line"
        :opts="options"
        :chartData="chartsDataLine1"
        :canvas2d="true"
        canvasId="components_test_smooth_line"
        :ontap="true"
        :ontouch="false"
        :onmouse="false"
        @complete="complete"
        @getIndex="getIndex"
        @scrollLeft="scrollLeft"
        @scrollRight="scrollRight"
        @getTouchStart="getTouchStart"
        @getTouchMove="getTouchMove"
        @getTouchEnd="getTouchEnd"
    />
    <!-- <qiun-data-charts type="line" :opts="{extra:{line:{type:'curve'}}}" :chartData="chartsDataLine2"/> -->
    </view>
</template>

<script>
// import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/u-charts.js';
//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
import demodata from '@/mockdata/demodata.json';

export default {
  // name: 'test-uCharts',
  props: {
    // pageScrollTop: {
    //   type: Number,
    //   default: 0
    // }
  },
  data() {
    return {
        chartsDataLine1:{},
        // 1. 覆盖 line
        options: {
            extra:{
                line:{
                    type:'curve',
                },
            },
        },
        // 2.
        configs: {
            // dataLabel: true,
            "type": "line",
            "canvasId": "",
            "canvas2d": false,
            "background": "none",
            "animation": true,
            "timing": "easeOut",
            "duration": 1000,
            "color": [
                "#1890FF",
                "#91CB74",
                "#FAC858",
                "#EE6666",
                "#73C0DE",
                "#3CA272",
                "#FC8452",
                "#9A60B4",
                "#ea7ccc"
            ],
            "padding": [
                15,
                10,
                0,
                15
            ],
            "rotate": false,
            "errorReload": true,
            "fontSize": 13,
            "fontColor": "#666666",
            "enableScroll": false,
            "touchMoveLimit": 60,
            "enableMarkLine": false,
            "dataLabel": true,
            "dataPointShape": true,
            "dataPointShapeType": "solid",
            "xAxis": {
                "disabled": false,
                "axisLine": true,
                "axisLineColor": "#CCCCCC",
                "calibration": false,
                "fontColor": "#666666",
                "fontSize": 13,
                "rotateLabel": false,
                "itemCount": 5,
                "boundaryGap": "center",
                "disableGrid": true,
                "gridColor": "#CCCCCC",
                "gridType": "solid",
                "dashLength": 4,
                "gridEval": 1,
                "scrollShow": false,
                "scrollAlign": "left",
                "scrollColor": "#A6A6A6",
                "scrollBackgroundColor": "#EFEBEF",
                "format": ""
            },
            "yAxis": {
                "disabled": false,
                "disableGrid": false,
                "splitNumber": 5,
                "gridType": "dash",
                "dashLength": 2,
                "gridColor": "#CCCCCC",
                "padding": 10,
                "showTitle": false,
                "data": []
            },
            "legend": {
                "show": true,
                "position": "bottom",
                "float": "center",
                "padding": 5,
                "margin": 5,
                "backgroundColor": "rgba(0,0,0,0)",
                "borderColor": "rgba(0,0,0,0)",
                "borderWidth": 0,
                "fontSize": 13,
                "fontColor": "#666666",
                "lineHeight": 11,
                "hiddenColor": "#CECECE",
                "itemGap": 10
            },
            "extra": {
                "line": {
                    "type": "curve",
                    "width": 2
                },
                "tooltip": {
                    "showBox": true,
                    "showArrow": true,
                    "showCategory": false,
                    "borderWidth": 0,
                    "borderRadius": 0,
                    "borderColor": "#000000",
                    "borderOpacity": 0.7,
                    "bgColor": "#000000",
                    "bgOpacity": 0.7,
                    "gridType": "solid",
                    "dashLength": 4,
                    "gridColor": "#CCCCCC",
                    "fontColor": "#FFFFFF",
                    "splitLine": true,
                    "horizentalLine": false,
                    "xAxisLabel": false,
                    "yAxisLabel": false,
                    "labelBgColor": "#FFFFFF",
                    "labelBgOpacity": 0.7,
                    "labelFontColor": "#666666"
                },
                "markLine": {
                    "type": "solid",
                    "dashLength": 4,
                    "data": []
                }
            }
        },
    };
  },
  //新手注意了，组件里没有onLoad事件！！！
  mounted() {
    this.getServerData()
  },
  methods: {
    // 事件
     complete(e){
       console.log('加载完成', e);
     },
     getIndex(e){
       console.log('\ne index =', e);
       // -1 代表下面的 legend, 0 ~ n 代表，第几条数据
       console.log('index =', e.currentIndex.index);
       console.log('group = ', e.currentIndex.group);
     },
     scrollLeft(e){
       console.log('scrollLeft', e)
     },
     scrollRight(e){
       console.log('scrollRight', e)
     },
     getTouchStart(e){
       // console.log('touch start', e);
     },
     getTouchMove(e){
       // console.log('touch move', e);
     },
     getTouchEnd(e){
       // console.log('touch end', e)
     },
    getServerData() {
      setTimeout(() => {
      	//因部分数据格式一样，这里不同图表引用同一数据源的话，需要深拷贝一下构造不同的对象
      	//开发者需要自行处理服务器返回的数据，应与标准数据格式一致，注意series的data数值应为数字格式
        this.chartsDataLine1 = JSON.parse(JSON.stringify(demodata.Line));
      }, 1000);
    },
  }
};
</script>

<style>
  .charts-box {
    width: 100%;
    height: 300px;
  }
</style>
