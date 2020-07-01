import React, { useState, memo, useMemo, useEffect } from 'react';
import { Button, Tooltip } from 'choerodon-ui/pro';
import { observer } from 'mobx-react-lite';
import Echart from 'echarts-for-react';
import './index.less';
import OverviewWrap from '../OverviewWrap';

const DefectTreatment = memo(({
  imageUrl,
  realName = '王王王',
  roles = ['admin', 'admin'],
}) => {
  const options = useMemo(() => [{ value: 'todo', text: '提出' }, { value: 'complete', text: '解决' }], []);
  const clsPrefix = 'c7n-project-overview-defect-treatment';
  const [charOption, setCharOption] = useState('todo'); // todo complete
  function getOptions(params) {
    return {
      legend: {
        top: '24px',
        right: '8.2%',
      },
      tooltip: {},
      dataset: {
        source: [
          { product: 'Matcha Latte', todo: 823, complete: 95.8 },
          { product: '张二', todo: 235, complete: 81.4 },
          { product: 'Cheese Cocoa', todo: 1042, complete: 91.2 },
          { product: '张二', todo: 1043, complete: 91.2 },
          { product: 'Walnut Brownie', todo: 988, complete: 76.9 },
        ],
      },
      xAxis: {
        type: 'category',
        axisTick: { show: false },
        interval: 0,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#eee',
            type: 'solid',
            width: 2,
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: 'rgba(0, 0, 0, 0.65)',
            fontSize: 12,
            fontStyle: 'normal',
          },
        },

      },
      yAxis: {
        name: '问题计数',
        nameTextStyle: {
          color: '#000',
        },
        nameGap: 23,
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#eee',
            type: 'solid',
            width: 2,
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: 'rgba(0, 0, 0, 0.65)',
            fontSize: 12,
            fontStyle: 'normal',
          },
        },
      },

      series: [
        {
          type: 'bar',
          // color: 'green',
          name: charOption === 'todo' ? '提出' : '解决',
          color: charOption === 'todo' ? 'rgba(249, 136, 148, 1)' : 'rgba(136, 223, 240, 1)',
          barWidth: 10,
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0],
          },
          dimensions: [
            { name: 'product', type: 'ordinal' },
            { name: charOption, type: 'number' },
          ],
        },
      ],
      dataZoom: [{
        type: 'slider',
        startValue: 0,
        endValue: 2,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2,
        },

      }],
    };
  }
  const renderTitle = () => (
    <div className={`${clsPrefix}-title`}>
      <span>缺陷提出与解决</span>
      <OverviewWrap.Switch defaultValue="todo" onChange={setCharOption} options={options} />
    </div>
  );
  return (
    <OverviewWrap>
      <OverviewWrap.Header title={renderTitle()} />
      <Echart option={getOptions()} />
    </OverviewWrap>

  );
});

export default DefectTreatment;
