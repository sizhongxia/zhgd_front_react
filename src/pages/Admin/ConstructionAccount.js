import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';

import moment from 'moment';
import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Icon,
  Button,
  Dropdown,
  message,
  Menu,
  Modal,
  Divider,
  Cascader,
} from 'antd';
import StandardTable from '@/components/StandardTable';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './ConstructionAccount.less';

const FormItem = Form.Item;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');

@connect(({ constructionAccount, loading }) => ({
  constructionAccount,
  loading: loading.effects['constructionAccount/fetch', 'constructionAccount/fetchAreas']
}))

@Form.create()
class ConstructionAccount extends PureComponent {

  state = {
    createFormModalVisible: false,
    updateFormModalVisible: false,
    selectedRows: [],
    selectedRow: {},
    formValues: {},
  };

  //表单头信息
  columns = [
    {
      title: '工地编号',
      dataIndex: 'idNo',
    },
    {
      title: '工地简称',
      dataIndex: 'shortName',
    },
    {
      title: '工地全称',
      dataIndex: 'fullName',
    },
    {
      title: '所在区域',
      dataIndex: 'inAddress',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      sorter: true,
      render: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
    },
    {
      title: '操作',
      render: (record) => (
        <Fragment>
          <a onClick={() => this.handleUpdateModalVisible(true, record)}>编辑</a>
          <Divider type="vertical" />
          <a onClick={() => this.deleteOne(record)}>删除</a>
        </Fragment>
      ),
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'constructionAccount/fetch',
    });
    dispatch({
      type: 'constructionAccount/fetchAreas'
    });
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = this.props;
    const { formValues } = this.state;

    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'constructionAccount/fetch',
      payload: params,
    });
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'constructionAccount/fetch',
      payload: {},
    });
  };

  handleMenuClick = e => {
    const { dispatch } = this.props;
    const { selectedRows } = this.state;

    if (!selectedRows) return;

    if (e.key === "remove") {
      Modal.confirm({
        title: '确认要删除选择的账号信息吗?',
        onOk() {
          dispatch({
            type: 'constructionAccount/remove',
            payload: {
              key: selectedRows.map(row => row.key),
            },
            callback: () => {
              dispatch({
                type: 'constructionAccount/fetch',
                payload: {},
              });
            },
          });
        }
      });
    } else {
      Modal.error({
        content: "暂不支持此操作",
        okText: "确认",
        cancelText: "取消"
      });
    }
  };

  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) {
        console.error(err);
        return;
      }
      console.debug(fieldsValue);
      this.setState({
        formValues: fieldsValue,
      });

      dispatch({
        type: 'constructionAccount/fetch',
        payload: fieldsValue,
      });
    });
  };

  handleModalVisible = flag => {
    this.setState({
      createFormModalVisible: !!flag,
    });
  };

  handleAdd = fields => {
    const { dispatch } = this.props;
    console.info(fields)
    message.success('添加成功');
    this.handleModalVisible();
  };

  handleUpdateModalVisible = (flag, record) => {
    this.setState({
      updateFormModalVisible: !!flag,
      selectedRow: record
    });
  };
  
  handleUpdate = (fields, selectedRecord) => {
    const { dispatch } = this.props;
    console.info(fields, selectedRecord)
    message.success('修改成功');
    this.handleUpdateModalVisible();
  };

  deleteOne = (selectedRecord) => {
    const { dispatch } = this.props;
    console.info(selectedRecord)
    message.error('删除失败');
  };

  renderSimpleForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="工地简称">
              {getFieldDecorator('shortName')(<Input placeholder="请输入工地简称" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="工地全称">
              {getFieldDecorator('fullName')(<Input placeholder="请输入工地全称" />)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">查询</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  renderForm() {
    return this.renderSimpleForm();
  }

  render() {

    const {
      constructionAccount: { data, areas },
      loading,
    } = this.props;

    const { selectedRows, selectedRow, createFormModalVisible, updateFormModalVisible } = this.state;

    const menu = (
      <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
        <Menu.Item key="remove">删除</Menu.Item>
        <Menu.Item key="export">导出</Menu.Item>
      </Menu>
    );

    const parentMethods = {
      handleModalVisible: this.handleModalVisible,
      handleAdd: this.handleAdd
    };
    const parentUpdateMethods = {
      handleUpdateModalVisible: this.handleUpdateModalVisible,
      handleUpdate: this.handleUpdate,
      selectedRow: selectedRow
    };

    const CreateForm = Form.create()(props => {
      const { createFormModalVisible, form, handleAdd, handleModalVisible } = props;
      const okHandle = () => {
        form.validateFields((err, fieldsValue) => {
          if (err) return;
          form.resetFields();
          handleAdd && handleAdd(fieldsValue);
        });
      };
      return (
        <Modal
          destroyOnClose={true}
          title="新建工地"
          style={{ top: 20 }}
          maskClosable= {false}
          keyboard= {true}
          visible={createFormModalVisible}
          onOk={okHandle}
          onCancel={() => handleModalVisible()}
        >
          <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="工地全称">
            {form.getFieldDecorator('fullName', {
              rules: [{ required: true, message: '请输入工地全称,长度在4-50个字符', min: 4, max: 50 }],
            })(<Input placeholder="请输入工地全称" />)}
          </FormItem>
          <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="工地简称">
            {form.getFieldDecorator('shortName', {
              rules: [{ required: true, message: '请输入工地简称,长度在4-12个字符', min: 4, max: 12 }],
            })(<Input placeholder="请输入工地简称" />)}
          </FormItem>
          <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="区域">
            {form.getFieldDecorator('area', {
              rules: [{ required: true, message: "请选择一个区域" }],
            })(<Cascader className={styles.antCascaderPicker} placeholder="请选择一个区域" options={areas} />)}
          </FormItem>
        </Modal>
      );
    });

    const UpdateForm = Form.create()(props => {
      const { updateFormModalVisible, selectedRow, form, handleUpdate, handleUpdateModalVisible } = props;

      const selectedObj = selectedRow || {};

      const okHandle = () => {
        form.validateFields((err, fieldsValue) => {
          if (err) return;
          handleUpdate(fieldsValue, selectedObj);
        });
      };
      return (
        <Modal
          destroyOnClose={true}
          title="修改工地"
          style={{ top: 20 }}
          maskClosable= {false}
          keyboard= {true}
          visible={updateFormModalVisible}
          onOk={okHandle}
          onCancel={() => handleUpdateModalVisible()}
        >
          <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="工地全称">
            {form.getFieldDecorator('fullName', {
              rules: [{ required: true, message: '请输入工地全称,长度在4-50个字符', min: 4, max: 50 }],
              initialValue: selectedObj.fullName
            })(<Input placeholder="请输入工地全称" />)}
          </FormItem>
          <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="工地简称">
            {form.getFieldDecorator('shortName', {
              rules: [{ required: true, message: '请输入工地简称,长度在4-12个字符', min: 4, max: 12 }],
              initialValue: selectedObj.shortName
            })(<Input placeholder="请输入工地简称" />)}
          </FormItem>
          <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="区域">
            {form.getFieldDecorator('area', {
              rules: [{ required: true, message: "请选择一个区域" }],
              initialValue: selectedObj.area
            })(<Cascader className={styles.antCascaderPicker} placeholder="请选择一个区域" options={areas} />)}
          </FormItem>
        </Modal>
      );
    });

    return (
      <PageHeaderWrapper title="工地账号列表" content="管理智慧工地账号信息">
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
            <div className={styles.tableListOperator}>
              <Button icon="plus" type="primary" onClick={() => this.handleModalVisible(true)}>新建</Button>
              {selectedRows.length > 0 && (
                <span>
                  <Dropdown overlay={menu}>
                    <Button> 批量操作 <Icon type="down" /> </Button>
                  </Dropdown>
                </span>
              )}
            </div>
            <StandardTable
              selectedRows={selectedRows}
              loading={loading}
              data={data}
              columns={this.columns}
              onSelectRow={this.handleSelectRows}
              onChange={this.handleStandardTableChange}
            />
          </div>
          <CreateForm {...parentMethods} createFormModalVisible={createFormModalVisible} />
          <UpdateForm {...parentUpdateMethods} updateFormModalVisible={updateFormModalVisible} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default ConstructionAccount;
