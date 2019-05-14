import React from 'react';
import { text, boolean, array, select } from '@storybook/addon-knobs';
import { ActionCard } from '../..';
export default ( props ) => {
    const { type = 1 } = props;
    const title = text('首屏会话透出的展示内容', '时代的火车向前开');
    const texts = text('markdown格式的消息',"![screenshot](https://cdn.nlark.com/yuque/0/2019/png/155457/1555929411028-9f836407-94fe-480e-bbf8-e45a5508239c.png)" +
    "### 乔布斯 20 年前想打造的苹果咖啡厅" +
    "Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划");
    const btnOrientation = select('按钮排列方式',{'0':'竖直', '1':'横向'},'0');
    const hideAvatar = select('是否隐藏头像',{'0':'否', '1':'是'},'0');
    const atMobiles = array('被@人的手机号',['188xxxxxxx'],':');
    const isAtAll = boolean('@所有人', false);
    const source = {
        "actionCard": {
            "text": texts,
            title,
            hideAvatar,
            btnOrientation,
        },
        "msgtype": "actionCard",
        "at": {
        atMobiles,
        isAtAll
        }
    };
    // 整体跳转
    if ( type === 1 ) {
        const singleTitle = text('按钮名称', '阅读全文');
        const singleURL = text('按钮跳转', 'https://www.dingtalk.com/');
        source['actionCard'] = Object.assign (source['actionCard'], { singleTitle, singleURL })
    }
    // 独立跳转
    if ( type === 2 ) {
        // btns
        const btns = [
            {
                "title": "内容不错",
                "actionURL": "https://www.dingtalk.com/"
            },
            {
                "title": "不感兴趣",
                "actionURL": "https://www.dingtalk.com/"
            }
        ]
        source['actionCard'] = Object.assign (source['actionCard'], { btns })
    }
    return <ActionCard source={source} />
}