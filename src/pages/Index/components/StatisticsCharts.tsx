import { serviceStatisitcTrend } from '@/services/front/gailantongji';
import { useRequest } from 'ahooks';
import { Skeleton } from 'antd/lib';
import dayjs from 'dayjs';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

interface StatisticsChartsProps {
  formParams: any;
}

const StatisticsCharts = ({ formParams }: StatisticsChartsProps) => {
  const { data: trendData, loading: trendLoading } = useRequest(
    () =>
      serviceStatisitcTrend({
        ...formParams,
        date_begin: dayjs(formParams?.date?.[0]).format('YYYY-MM-DD 00:00:00'),
        date_end: dayjs(formParams?.date?.[1]).format('YYYY-MM-DD 23:59:59'),
      }),
    {
      ready: !!formParams?.date?.[0],
      refreshDeps: [formParams?.date, formParams?.statistic_type],
    },
  );

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(ref.current);
      // 指定图表的配置项和数据
      let option: echarts.EChartsOption = {
        tooltip: {},
        xAxis: {
          data: (trendData?.data ?? [])?.map((v) => v.date!),
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            color: '#4571FF',
            data: (trendData?.data ?? [])?.map((v) => +v.data_count!),
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }, [trendData?.data]);

  return (
    <Skeleton active loading={trendLoading}>
      <div
        ref={ref}
        style={{ width: '100%', height: 400, margin: '0 auto' }}
      ></div>
    </Skeleton>
  );
};

export default StatisticsCharts;
