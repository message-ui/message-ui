import React from 'react';
import { text, boolean, array } from '@storybook/addon-knobs';
import { MarkdownCard } from '../..';
export default () => {
  const title = text('首屏会话透出的展示内容', '时代的火车向前开');
  const texts = text('markdown格式的消息', "#### 杭州天气 @156xxxx8827\n" +
  "> 9度，西北风1级，空气良89，相对温度73%\n\n" +
  "> ![screenshot](https://cdn.nlark.com/yuque/0/2019/png/155457/1555929411028-9f836407-94fe-480e-bbf8-e45a5508239c.png)\n"  +
  "> ###### 10点20分发布 [天气](http://www.thinkpage.cn/) \n");
  const atMobiles = array('被@人的手机号',['188xxxxxxx'],':');
  const isAtAll = boolean('@所有人', false);
  const source = {
    "msgtype": "markdown", 
    "markdown": {
      'text':texts,
      title,
    },
    "at": {
      atMobiles,
      isAtAll
    }
  }
  return <MarkdownCard source={source} />
}