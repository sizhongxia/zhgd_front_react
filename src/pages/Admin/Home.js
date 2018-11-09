import React, { Component } from 'react';
import { Row } from 'antd';

import GridContent from '@/components/PageHeaderWrapper/GridContent';

class Home extends Component {

  render() {
 
    return (
      <GridContent>
        <Row gutter={24}>
            <span>欢迎使用</span>
        </Row>
      </GridContent>
    );
  }
}

export default Home;
