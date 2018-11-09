import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Pagination, List } from 'antd';

import Ellipsis from '@/components/Ellipsis';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

import styles from './FiveEnter.less';

@connect(({ fiveEnter, loading }) => ({
    fiveEnter,
    loading: loading.models.list,
}))
class CardList extends PureComponent {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'fiveEnter/fetch',
            payload: {
                count: 8,
            },
        });
    }

    render() {
        const {
            loading,
        } = this.props;

        const list = [];
        for (let i = 0; i < 15; i += 1) {
            list.push({
                id: `fake-list-${i}`,
                owner: `fake-list-owner-${i}`,
                title: `fake-list-title-${i}`,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                cover: 'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
                status: ['active', 'exception', 'normal'][i % 3],
                percent: Math.ceil(Math.random() * 50) + 50,
                logo: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
                href: 'https://ant.design',
                updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
                createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
                subDescription: `fake-list-subDescription-${i}`,
                description:
                    '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
                activeUser: Math.ceil(Math.random() * 100000) + 100000,
                newUser: Math.ceil(Math.random() * 1000) + 1000,
                star: Math.ceil(Math.random() * 100) + 100,
                like: Math.ceil(Math.random() * 100) + 100,
                message: Math.ceil(Math.random() * 10) + 10,
                content:
                    '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
                members: [
                    {
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
                        name: '曲丽丽',
                        id: 'member1',
                    },
                    {
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
                        name: '王昭君',
                        id: 'member2',
                    },
                    {
                        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
                        name: '董娜娜',
                        id: 'member3',
                    },
                ],
            });
        }

        return (
            <PageHeaderWrapper title="五方单位" content="此处为五方单位和劳务单位管理页面">
                <div className={styles.cardList}>
                    <List
                        rowKey="id"
                        loading={loading}
                        grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
                        dataSource={list}
                        renderItem={item => (
                            <List.Item key={item.id}>
                                <Card hoverable className={styles.card}>
                                    <Card.Meta
                                        avatar={<img alt="" className={styles.cardAvatar} src={item.avatar} />}
                                        title={<a>{item.title}</a>}
                                        description={
                                            <Ellipsis className={styles.item} lines={3}>
                                                {item.description}
                                            </Ellipsis>
                                        }
                                    />
                                </Card>
                            </List.Item>)
                        }
                    />
                    <Pagination defaultCurrent={6} total={500} showSizeChanger showQuickJumper />
                </div>
            </PageHeaderWrapper>
        );
    }
}

export default CardList;
