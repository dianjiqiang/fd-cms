<template>
  <div>
    <el-card>
      <div class="first-floor">
        <div class="histogram" ref="histogramRef"></div>
        <div class="pie" ref="pieRef"></div>
        <div class="rose" ref="roseRef"></div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { nextTick } from '@vue/runtime-core'
import * as echarts from 'echarts'

const histogramRef = ref(null)
const pieRef = ref(null)
const roseRef = ref(null)
nextTick(() => {
  const histogramChart = echarts.init(histogramRef.value)
  const histogramOption = {
    title: {
      text: '公司人员分布图',
      subtext: '柱状图'
    },
    xAxis: {
      type: 'category',
      data: ['销售部', '数据部', '网络部', '总裁办']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [30, 10, 10, 3],
        type: 'bar'
      }
    ]
  }

  histogramOption && histogramChart.setOption(histogramOption)

  const roseChart = echarts.init(roseRef.value)
  const roseOption = {
    title: {
      text: '公司人员分布图',
      subtext: '玫瑰图'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 30, name: '销售部' },
          { value: 10, name: '数据部' },
          { value: 10, name: '网络部' },
          { value: 3, name: '总裁办' }
        ]
      }
    ]
  }
  roseOption && roseChart.setOption(roseOption)

  const pieChart = echarts.init(pieRef.value)
  const pieOption = {
    title: {
      text: '公司人员分布图',
      subtext: '饼图'
    },
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 100],
        center: ['50%', '50%'],
        // roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 30, name: '销售部' },
          { value: 10, name: '数据部' },
          { value: 10, name: '网络部' },
          { value: 3, name: '总裁办' }
        ]
      }
    ]
  }

  pieOption && pieChart.setOption(pieOption)
})
</script>

<style lang="less" scoped>
.el-card {
  margin-top: 30px;
  .first-floor {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .histogram,
    .rose,
    .pie {
      width: 25vw;
      height: 300px;
      overflow: hidden;
    }
  }
}
</style>
