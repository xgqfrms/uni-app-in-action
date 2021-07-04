<template>
    <view class="charts-box">
      <qiun-data-charts
        ref="components_test_stack_bars"
        type="column"
        :opts="options"
        :chartData="chartsDataColumn1"
        :canvas2d="true"
        canvasId="components_stack_bars"
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
      chartsDataColumn1: {},
       options: {
           dataLabel: false,
           extra:{
               column:{
                   type:'stack',
               },
           },
       },
    };
  },
  //新手注意了，组件里没有onLoad事件！！！
  mounted() {
    this.getServerData();
    // const dom = document.querySelector('');
    const ref = this.$refs.components_test_bar;
    console.log('ref =', ref);
    console.log('ref.canvasId =', ref.canvasId);
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
        // this.chartsDataColumn1 = JSON.parse(JSON.stringify(demodata.Column));
        this.chartsDataColumn1 = {
            "categories": [
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021"
            ],
            "series": [
                {
                    "name": "目标值",
                    "data": [
                        35,
                        36,
                        31,
                        33,
                        13,
                        34
                    ]
                },
                {
                    "name": "完成量",
                    "data": [
                        18,
                        27,
                        21,
                        24,
                        6,
                        28
                    ]
                },
                {
                    "name": "总计",
                    "data": [
                        53,
                        63,
                        52,
                        57,
                        19,
                        62
                    ]
                },
            ]
        };
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
