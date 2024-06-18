import shengyu from '@/assets/shengyu.png';
import yijian from '@/assets/yijian.png';
import yiyong from '@/assets/yiyong.png';
import { STATISTICS_TYPE, STATISTICS_TYPE_ENUM } from '@/constant';
import {
  serviceStatisitcList,
  serviceStatisticIndex,
} from '@/services/front/gailantongji';
import { useTable } from '@/utils';
import { useRequest } from 'ahooks';
import {
  Card,
  DatePicker,
  Form,
  Select,
  Skeleton,
  Space,
  Statistic,
  Table,
} from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Flex } from 'antd/lib';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useMemo } from 'react';
import StatisticsCharts from './components/StatisticsCharts';
import styles from './index.less';

export default function HomePage() {
  const [form] = Form.useForm();
  const date = Form.useWatch('date', form);
  const statistic_type = Form.useWatch('statistic_type', form);

  const { data: statisticData, loading: statisticLoading } = useRequest(
    serviceStatisticIndex,
  );

  const { tableProps } = useTable(
    (params: any) =>
      serviceStatisitcList({
        ...params,
        date_begin: dayjs(date?.[0]).format('YYYY-MM-DD 00:00:00'),
        date_end: dayjs(date?.[1]).format('YYYY-MM-DD 23:59:59'),
      }),
    {
      ready: !!date?.[0],
      refreshDeps: [date, statistic_type],
    },
  );

  const columns: ColumnsType<API.WebStatisticListItem> = useMemo(() => {
    return [
      {
        title: '时间',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '方案ID',
        dataIndex: 'plan_id',
        key: 'plan_id',
      },
      {
        title: '方案名',
        dataIndex: 'plan_name',
        key: 'plan_name',
      },
      {
        title: '单方案权益消费量',
        dataIndex: 'data_count',
        key: 'data_count',
      },
      {
        title: '汇总传输次数',
        dataIndex: 'summary_count',
        key: 'summary_count',
      },
    ];
  }, []);

  const disabledDate: (...arg: any) => boolean = useCallback(
    (current: Dayjs, { from }: { from: Dayjs }) => {
      // 按日，最大跨度不得超过180天
      if (statistic_type === `${STATISTICS_TYPE_ENUM.DAY}`) {
        const isTooLate = current.isAfter(dayjs());
        if (from) {
          return Math.abs(current.diff(from, 'day')) >= 180 || isTooLate;
        }
        return isTooLate;
      }
      // 按月，最大跨度12个月
      if (statistic_type === `${STATISTICS_TYPE_ENUM.MONTH}`) {
        const isTooEarly = current.isBefore(dayjs());
        if (from) {
          return Math.abs(current.diff(from, 'month')) >= 12 || isTooEarly;
        }
        return isTooEarly;
      }
      return false;
    },
    [statistic_type],
  );
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Skeleton active loading={statisticLoading}>
        <div className={styles.time}>
          更新时间：{statisticData?.data?.updateTime}
        </div>
        <Flex gap={20}>
          <Card className={styles.overviewCard}>
            <img src={yiyong} width={56} height={56}></img>
            <div className={styles.info}>
              <div className={styles.title}>已用权益消费量</div>
              <Statistic
                className={styles.num}
                value={statisticData?.data?.data_count_used || 0}
              />
              <Statistic
                className={styles.desTitle}
                title="昨日消费量 ："
                value={statisticData?.data?.date_count_yesterday || 0}
              />
            </div>
          </Card>
          <Card className={styles.overviewCard}>
            <img src={shengyu} width={56} height={56}></img>
            <div className={styles.info}>
              <div className={styles.title}>剩余权益消费量</div>
              <Statistic
                className={styles.num}
                value={statisticData?.data?.data_count_left || 0}
              />
              <Statistic
                className={styles.desTitle}
                title="权益消费量上限 ："
                value={statisticData?.data?.data_count_limit || 0}
              />
            </div>
          </Card>
          <Card className={styles.overviewCard}>
            <img src={yijian} width={56} height={56}></img>
            <div className={styles.info}>
              <div className={styles.title}>已建方案数</div>
              <Statistic
                className={styles.num}
                value={statisticData?.data?.plan_count_used || 0}
              />
              <Statistic
                className={styles.desTitle}
                title="方案上限 ："
                value={statisticData?.data?.plan_count_limit || 0}
              />
            </div>
          </Card>
        </Flex>
      </Skeleton>
      <Card
        title="权益消费量走势"
        extra={
          <Form
            form={form}
            initialValues={{
              statistic_type: `${STATISTICS_TYPE_ENUM.DAY}`,
              date: [dayjs().subtract(6, 'day'), dayjs()],
            }}
            layout="inline"
          >
            <Form.Item name="statistic_type" label="统计维度">
              <Select
                options={Object.keys(STATISTICS_TYPE).map((v) => ({
                  label: STATISTICS_TYPE[v as unknown as STATISTICS_TYPE_ENUM],
                  value: v,
                }))}
              />
            </Form.Item>
            <Form.Item name="date" label="日期筛选">
              <DatePicker.RangePicker disabledDate={disabledDate} />
            </Form.Item>
          </Form>
        }
      >
        <StatisticsCharts formParams={form.getFieldsValue()} />
        <Table columns={columns} rowKey={(v, i) => i!} {...tableProps} />
      </Card>
    </Space>
  );
}
