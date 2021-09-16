export default function getOption(data) {


  function NumDescSort(a, b) {
    return b.value - a.value;
  }

// 先进行一次降序排序，找出最大的前十个
  data.sort(NumDescSort);

  return {
    visualMap: {
      show: false,
      type: 'continuous',
      min: 0,
      max: data[0].value,
      seriesIndex: [0, 2],
      dimension: 0,
      realtime: false,
      left: 0,
      itemWidth: 18,
      itemHeight: 100,
      calculable: true,
      inRange: {
        color: ['#9BC4FF', '#3B6DE6'],
        symbolSize: [100, 100]
      },
      outOfRange: {
        color: ['#eeeeee'],
        symbolSize: [100, 100]
      },
    },
    series: [
      {
        name: "占比",
        type: "map",
        mapType: "浙江省",
        // left: '100',
        // width: '60%',
        roam: false,
        mapValueCalculation: "sum",
        zoom: 1.2,
        selectedMode: false,
        showLegendSymbol: false,
        label: {
          normal: {
            textStyle: {
              color: '#666'
            }
          },
          emphasis: {
            textStyle: {
              color: '#234EA5'
            }
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#EEEEEE',
            borderColor: '#FFFFFF',
            label: {
              show: true,
              color: '#FFFFFF',
              fontSize: 20,
              fontFamily: 'Microsoft YaHei',
            },
          },
          emphasis: {
            areaColor: '#4979A4',
            label: {
              show: true,
              color: '#FFFFFF',
              fontSize: 20,
              fontFamily: 'Microsoft YaHei',
              shadowColor: 'rgba(0, 0, 0, 0.36)',
              shadowBlur: 4,
              shadowOffsetY: 4,
            },
          }
        },
        data: data
      },
    ]
  }
}