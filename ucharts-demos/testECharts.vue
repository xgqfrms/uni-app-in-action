<template>
    <view class="content">
        <view
            @click="echarts.onClick"
            :prop="option"
            :change:prop="echarts.updateEcharts"
            id="echarts-test"
            class="echarts">
         </view>
        <button @click="changeOption">更新数据</button>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                option: {
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }],
                }
            }
        },
        onLoad() {
            //
        },
        methods: {
            changeOption() {
                const data = this.option.series[0].data;
                // 随机更新示例数据
                data.forEach((item, index) => {
                    data.splice(index, 1, Math.random() * 40);
                })
            },
            onViewClick(options) {
                console.log('test options', options);
            },
            getBlockData () {
                // 
            },
        }
    }
</script>

<script module="echarts" lang="renderjs">
    let myChart = {};
    export default {
        // data () {
        //     return {
        //         myChart: null,
        //     };
        // },
        mounted() {
            console.log('window.echarts', window.echarts, typeof window.echarts);
            if (typeof window.echarts === 'function') {
                this.initEcharts();
            } else {
                // 动态引入较大类库避免影响页面展示
                const script = document.createElement('script');
                // view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
                script.src = 'static/echarts.js';
                script.onload = this.initEcharts.bind(this);
                document.head.appendChild(script);
                // console.log('document', document);
                console.log('document', document.head, window);
                console.log('new window.echarts', window.echarts, typeof window.echarts);
            }
        },
        methods: {
            initEcharts() {
                console.log('echarts', echarts);
                myChart = echarts.init(document.getElementById('echarts-test'));
                // 观测更新的数据在 view 层可以直接访问到
                console.log('this.option', this.option);
                myChart.setOption(this.option);
            },
            updateEcharts(newValue, oldValue, ownerInstance, instance) {
                console.log('newValue, oldValue', newValue, oldValue);
                // 监听 service 层数据变更
                myChart.setOption(newValue);
            },
            onClick(event, ownerInstance) {
                // console.log('event, ownerInstance', event, ownerInstance);
                console.log('event,', event);
                // 调用 service 层的方法
                ownerInstance.callMethod('onViewClick', {});
                // ownerInstance.callMethod('onViewClick', {
                // 	test: 'test'
                // });
            },
            getBlockData () {
                //
            },
        }
    }
</script>

<style lang="scss">

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .echarts {
        margin-top: 100px;
        width: 100%;
        height: 300px;
    }
</style>
