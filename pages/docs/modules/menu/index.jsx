import { Table } from 'uskin';
import React from 'react';
import Base from 'components/base/index';
import './style/index.less';
import highlight from '../../cores/highlight';
import config from './config.js';
import menuDemo from './menu.md';

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

const apiData = [{
  property: 'items（必填）',
  explain: '面包屑内容',
  type: 'Array',
  defaultValue: '-',
  id: '1',
}, {
  property: 'onClick',
  explain: '点击二级i标题的回调函数，参数为事件对象和标题对象',
  type: 'Function',
  defaultValue: '() => {}',
  id: '2',
}, {
  property: 'width',
  explain: '导航菜单的宽度',
  type: 'Number',
  defaultValue: 200,
  id: '3',
}, {
  property: 'toggle',
  explain: '设置一级菜单能否折叠',
  type: 'Boolean',
  defaultValue: 'false',
  id: '4',
}];

const itemsData = [{
  property: 'title',
  explain: '一级标题',
  type: 'String',
  defaultValue: '-',
  id: '1',
}, {
  property: 'fold',
  explain: '初始状态时二级标题是否折叠起来',
  type: 'Blooean',
  defaultValue: 'false',
  id: '2',
}, {
  property: 'key',
  explain: '用来作为每个一级标题的唯一标识',
  type: 'String',
  defaultValue: '-',
  id: '3',
}, {
  property: 'submenu',
  explain: '二级标题',
  type: 'Array',
  defaultValue: '-',
  id: '4',
}];

const submenuData = [{
  property: 'subtitle',
  explain: '二级标题',
  type: 'String',
  defaultValue: '-',
  id: '1',
}, {
  property: 'key',
  explain: '用来作为每个二级标题的唯一标识',
  type: 'String',
  defaultValue: '-',
  id: '2',
}, {
  property: 'onClick',
  explain: '点击二级标题的回调函数，会覆盖上面的onClick回调函数，参数同上',
  type: 'Function',
  defaultValue: '-',
  id: '3',
}];

class Model extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = highlight;

  render() {
    return (
      <div className="intro-button-wrapper">
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
              demo={config.data.menu.demo}
              description={config.data.menu.description}
              code={menuDemo}
            />
          </div>
        </div>
        <div className="API-wrapper">
          <div className="content-title">API</div>
          <div>
            <Table
              width="90%"
              column={column}
              data={apiData}
              dataKey="id"
              checkbox={false}
              striped={false}
              hover={false}
            />
          </div>
        </div>
        <div className="API-wrapper">
          <div className="content-title">items</div>
          <div>
            <Table
              width="90%"
              column={column}
              data={itemsData}
              dataKey="id"
              checkbox={false}
              striped={false}
              hover={false}
            />
          </div>
        </div>
        <div className="API-wrapper">
          <div className="content-title">submenu</div>
          <div>
            <Table
              width="90%"
              column={column}
              data={submenuData}
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
