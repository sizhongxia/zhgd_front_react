import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Input, Select, Card, Upload, Tooltip, Icon, Avatar, Pagination, List, Button, Modal } from 'antd';

import Ellipsis from '@/components/Ellipsis';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './FiveEnter.less';

const FormItem = Form.Item;
const Option = Select.Option;


@connect(({ fiveEnter, loading }) => ({
    fiveEnter,
    loading: loading.effects['fiveEnter/fetch'],
}))
@Form.create()
class CardList extends PureComponent {

    state = {
        createFormModalVisible: false,
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'fiveEnter/fetch',
            payload: {
                count: 8,
            },
        });
    }

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    };

    handleFormSubmit = value => {
        console.log(value);
    };

    // 切换创建表单显示
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

    handleFileChange = (info) => {
        console.info(info)
    }

    render() {

        const { loading, } = this.props;
        const { createFormModalVisible } = this.state;

        const CreateForm = Form.create()(props => {
            const { form, handleAdd, handleModalVisible } = props;
            const okHandle = () => {
                form.validateFields((err, fieldsValue) => {
                    if (err) return;
                    form.resetFields();
                    handleAdd(fieldsValue);
                });
            };

            const handleChange = (value) => {
                console.log(`selected ${value}`);
            };

            return (
                <Modal
                    destroyOnClose={true}
                    title="新增企业"
                    style={{ top: 20 }}
                    maskClosable={false}
                    keyboard={true}
                    visible={createFormModalVisible}
                    onOk={okHandle}
                    onCancel={() => handleModalVisible()}
                >
                    <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="企业名称">
                        {form.getFieldDecorator('fullName', {
                            rules: [{ required: true, message: '请输入企业名称,长度在4-80个字符', min: 4, max: 80 }],
                        })(<Input placeholder="请输入企业名称" />)}
                    </FormItem>
                    <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="企业简称">
                        {form.getFieldDecorator('shortName', {
                            rules: [{ required: true, message: '请输入企业简称,长度在2-8个字符', min: 2, max: 8 }],
                        })(<Input placeholder="请输入企业简称" />)}
                    </FormItem>
                    <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="企业类型">
                        {form.getFieldDecorator('companyType', {
                            rules: [{ required: true, message: '请至少选择一个类型' }],
                            initialValue: ['2']
                        })(<Select mode="multiple" style={{ width: '100%' }} placeholder="请选择企业类型" onChange={handleChange}>
                            <Option key="1">勘察单位</Option>
                            <Option key="2">设计单位</Option>
                            <Option key="3">建设单位</Option>
                            <Option key="4">施工单位</Option>
                            <Option key="5">监理单位</Option>
                            <Option key="6">劳务分包商</Option>
                            <Option key="7">集团公司</Option>
                            <Option key="8">设备供应商</Option>
                        </Select>)}
                    </FormItem>
                    <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="企业备注">
                        {form.getFieldDecorator('remarks')(<Input.TextArea rows={3} placeholder="请输入企业备注" />)}
                    </FormItem>
                </Modal>
            );
        });

        const parentMethods = {
            handleModalVisible: this.handleModalVisible,
            handleAdd: this.handleAdd
        };

        const mainSearch = (
            <div style={{ textAlign: 'center' }}>
                <Input.Search
                    placeholder="请输入单位名称查询"
                    onSearch={this.handleFormSubmit}
                    style={{ width: 320 }}
                />
                <Button onClick={this.handleModalVisible} style={{ marginLeft: "4px" }} type="dashed" icon="plus">新增</Button>
            </div>
        );

        const list = [];
        for (let i = 0; i < 12; i += 1) {
            list.push({
                id: `n-${i}`,
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                name: `北京共有集团`,
                description: '集团公司',
            });
        }

        return (
            <PageHeaderWrapper title="五方单位" content={mainSearch}>

                <div className={styles.filterCardList}>
                    <List
                        rowKey="id"
                        style={{ marginTop: 24 }}
                        grid={{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }}
                        loading={loading}
                        dataSource={list}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <Card
                                    hoverable
                                    bodyStyle={{ paddingBottom: 20 }}
                                    actions={[
                                        <Tooltip title="编辑">
                                            <Icon type="edit" />
                                        </Tooltip>,
                                        <Tooltip title="删除">
                                            <Icon type="delete" />
                                        </Tooltip>,
                                    ]}
                                >
                                    <Card.Meta avatar={
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            showUploadList={false}
                                            action="//jsonplaceholder.typicode.com/posts/"
                                            onChange={this.handleFileChange}
                                        >
                                            <Tooltip title="上传企业Logo"><Avatar size="small" src={item.logo} /></Tooltip>
                                        </Upload>
                                    } title={item.name} />
                                    <div className={styles.cardItemContent}>
                                        <div className={styles.cardInfo}>
                                            <Ellipsis lines={2}>{item.description}</Ellipsis>
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </div>

                <div className={styles.pagination}>
                    <Pagination defaultCurrent={6} total={500} />
                </div>

                <CreateForm {...parentMethods} createFormModalVisible={createFormModalVisible} />
            </PageHeaderWrapper>
        );
    }
}

export default CardList;
