import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Form, Input, DatePicker, Select, Button, Card, InputNumber, Radio, Icon, Tooltip } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './Form.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

@Form.create()
class BasicForms extends PureComponent {
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      console.info(values)
      if (!err) {
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <PageHeaderWrapper
        title={<FormattedMessage id="app.placeholder"/>}
        content={<FormattedMessage id="app.placeholder"/>}
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark={false} style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label={<FormattedMessage id="app.placeholder"/>}>
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.placeholder' }),
                  },
                ],
              })(<Input placeholder={formatMessage({ id: 'app.placeholder' })} />)}
            </FormItem>
            <FormItem {...formItemLayout} label={<FormattedMessage id="app.placeholder" />}>
              {getFieldDecorator('date', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.placeholder' }),
                  },
                ],
              })(
                <RangePicker
                  style={{ width: '100%' }}
                  placeholder={[
                    formatMessage({ id: 'app.placeholder' }),
                    formatMessage({ id: 'app.placeholder' }),
                  ]}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label={<FormattedMessage id="app.placeholder" />}>
              {getFieldDecorator('goal', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'app.placeholder' }),
                  },
                ],
              })(
                <TextArea
                  style={{ minHeight: 32 }}
                  placeholder={formatMessage({ id: 'app.placeholder' })}
                  rows={4}
                />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  <FormattedMessage id="app.placeholder" />
                  <em className={styles.optional}>
                    <FormattedMessage id="app.placeholder" />
                    <Tooltip title={<FormattedMessage id="app.placeholder" />}>
                      <Icon type="info-circle-o" style={{ marginRight: 4 }} />
                    </Tooltip>
                  </em>
                </span>
              }
            >
              {getFieldDecorator('client2')(
                <Input placeholder={formatMessage({ id: 'app.placeholder' })} />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={
                <span>
                  <FormattedMessage id="app.placeholder" />
                  <em className={styles.optional}>
                    <FormattedMessage id="app.placeholder" />
                  </em>
                </span>
              }
            >
              {getFieldDecorator('weight')(
                <InputNumber
                  placeholder={formatMessage({ id: 'app.placeholder' })}
                  min={0}
                  max={200}
                />
              )}
              <span className="ant-form-text">%</span>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<FormattedMessage id="app.placeholder" />}
              help={<FormattedMessage id="app.placeholder" />}
            >
              <div>
                {getFieldDecorator('public', {
                  initialValue: '1',
                })(
                  <Radio.Group>
                    <Radio value="1">
                      <FormattedMessage id="app.placeholder" />
                    </Radio>
                    <Radio value="2">
                      <FormattedMessage id="app.placeholder" />
                    </Radio>
                    <Radio value="3">
                      <FormattedMessage id="app.placeholder" />
                    </Radio>
                  </Radio.Group>
                )}
                <FormItem style={{ marginBottom: 0 }}>
                  {getFieldDecorator('publicUsers')(
                    <Select
                      mode="multiple"
                      placeholder={formatMessage({ id: 'app.placeholder' })}
                      style={{
                        margin: '8px 0',
                        display: getFieldValue('public') === '2' ? 'block' : 'none',
                      }}
                    >
                      <Option value="1">
                        <FormattedMessage id="app.placeholder" />
                      </Option>
                      <Option value="2">
                        <FormattedMessage id="app.placeholder" />
                      </Option>
                      <Option value="3">
                        <FormattedMessage id="app.placeholder" />
                      </Option>
                    </Select>
                  )}
                </FormItem>
              </div>
            </FormItem>
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                <FormattedMessage id="app.placeholder" />
              </Button>
              <Button style={{ marginLeft: 8 }}>
                <FormattedMessage id="app.placeholder" />
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BasicForms;
