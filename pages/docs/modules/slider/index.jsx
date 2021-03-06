import { Table } from 'uskin';
import React from 'react';
import Base from 'components/base/index';
import './style/index.less';
import highlight from '../../cores/highlight';
import config from './config.json';
import mdMain from './md/main.md';

const column = [{
  title: '属性',
  width: '150px',
  key: 'property',
  dataIndex: 'property',
}, {
  title: '类型',
  width: '100px',
  key: 'type',
  dataIndex: 'type',
}, {
  title: '默认值',
  width: '150px',
  key: 'defaultValue',
  dataIndex: 'defaultValue',
}, {
  title: '描述',
  key: 'explain',
  dataIndex: 'explain',
  render(col, item) {
    return <div style={{ wordWrap: 'break-word' }}>{item.explain}</div>;
  },
}];

const data = [{
  property: 'min',
  explain: 'slider的有效最小值',
  type: 'Number',
  defaultValue: '--',
  id: '1',
}, {
  property: 'max',
  explain: 'slider的有效最大值',
  type: 'Number',
  defaultValue: '--',
  id: '2',
}, {
  property: 'value',
  explain: '滑动条所在的的初始值',
  type: 'Number',
  defaultValue: '--',
  id: '3',
}, {
  property: 'step',
  explain: '设置滑动合法步长',
  type: 'Number',
  defaultValue: '1',
  id: '4',
}, {
  property: 'width',
  explain: '设置width的总宽',
  type: 'Number',
  defaultValue: '--',
  id: '5',
}, {
  property: 'onChange',
  explain: '滑动条滑动时返回当前值\n',
  type: 'Function',
  defaultValue: '--',
  id: '6',
}];

class Model extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = highlight;

  render() {
    return (
      <div className="intro-slider-wrapper">
        <div className="simple-description-wrapper">
          <div className="content-title">
            <span>{config.title}</span>
            <span>{config.title_cn}</span>
          </div>
          <div className="content">
            {config.simple_description}
          </div>
        </div>
        <div className="base-wrapper">
          <div className="title">基础用法</div>
          <div className="base-container-wrapper">
            <Base
              demo={config.data.main.demo}
              description={config.data.main.description}
              code={mdMain}
            />
          </div>
        </div>
        <div className="API-wrapper">
          <div className="content-title">API</div>
          <div>
            <Table
              width="90%"
              column={column}
              data={data}
              dataKey="id"
              checkbox={false}
              striped={false}
              hover={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Model;
