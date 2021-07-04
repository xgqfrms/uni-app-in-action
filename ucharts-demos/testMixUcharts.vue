<template>
    <!-- <view class="charts-box" style="height: 400px;">
     <qiun-data-charts
        type="mix"
        :opts="options"
        :chartData="chartsDataMix1"
        :canvas2d="true"
        canvasId="components_test_mix"
      />
    </view> -->
    <view class="charts-box">
      <qiun-data-charts
        type="mix"
        :chartData="chartData"
        :errorShow="false"
        background="none"
      />
    </view>
</template>

<script>
//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
import demodata from '@/mockdata/demodata.json';
import mapdata from '@/mockdata/mapdata.json'

export default {
  data() {
    return {
      chartData:{
          categories:[],
          series:[],
      },
      chartsDataMix1:{},
      options: {},
      optionsx: {
          yAxis:{
            data:[
              {
                  position: 'left',
                  title: '折线',
              },
              {
                  position: 'right',
                  min: 0,
                  max: 200,
                  title: '柱状图',
                  textAlign: 'left',
              },
              // {
              //   position: 'right',
              //   min: 0,
              //   max: 200,
              //   title: '点',
              //   textAlign: 'left',
              //  },
            ],
          },
      },
    };
  },
  onReady() {
    console.log('❌ onReady');
  },
  onLoad () {
    console.log('❌ onLoad');
  },
  //新手注意了，组件里没有onLoad事件！！！
  mounted() {
    this.options = {
      yAxis:{
        data:[
          {position: 'left',title: '折线'},
          {position: 'right',min: 0,max: 200,title: '柱状图',textAlign: 'left'},
          {position: 'right',min: 0,max: 200,title: '点',textAlign: 'left'},
        ],
      },
    };
    console.log('✅ mounted');
    //模拟从服务器获取数据
    this.getServerData();
  },
  methods: {
    getServerData() {
      setTimeout(() => {
      	//因部分数据格式一样，这里不同图表引用同一数据源的话，需要深拷贝一下构造不同的对象
      	//开发者需要自行处理服务器返回的数据，应与标准数据格式一致，注意series的data数值应为数字格式
        //注意，因为组件内监听了chartData，构造chartData的时候，一定要先定义一个临时变量，构造完成后统一赋值给chartData绑定的变量，否则会导致多次渲染图表
      	// this.chartsDataMix1 = JSON.parse(JSON.stringify(demodata.Mix));
        // console.log('this.chartsDataMix1', this.chartsDataMix1);
        this.chartData.categories = [
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021"
         ];
         this.chartData.series = [
            {
                "name": "曲面",
                "data": [
                    70,
                    50,
                    85,
                    130,
                    64,
                    88
                ],
                "type": "area",
                "style": "curve"
            },
            {
                "name": "柱1",
                "index": 1,
                "data": [
                    40,
                    {
                        "value": 30,
                        "color": "#f04864"
                    },
                    55,
                    110,
                    24,
                    58
                ],
                "type": "column"
            },
            {
                "name": "柱2",
                "index": 1,
                "data": [
                    50,
                    20,
                    75,
                    60,
                    34,
                    38
                ],
                "type": "column"
            },
            {
                "name": "曲线",
                "data": [
                    70,
                    50,
                    85,
                    130,
                    64,
                    88
                ],
                "type": "line",
                "style": "curve",
                "color": "#1890ff",
                "disableLegend": true
            },
            {
                "name": "折线",
                "data": [
                    120,
                    140,
                    105,
                    170,
                    95,
                    160
                ],
                "type": "line",
                "color": "#2fc25b"
            },
            {
                "name": "点",
                "index": 2,
                "data": [
                    100,
                    80,
                    125,
                    150,
                    112,
                    132
                ],
                "type": "point",
                "color": "#f04864"
            }
        ];
        console.log('this.chartData', this.chartData);
      }, 1000);
    }
  }
};
</script>

<style>
/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
.charts-box{
  width: 100%;
  height:300px;
}
</style>
