import React from 'react';
import { text, boolean, array } from '@storybook/addon-knobs';
import { FeedCard } from '../..';
export default () =>{
  // const title = text('首屏会话透出的展示内容', '时代的火车向前开');
  const atMobiles = array('被@人的手机号',['188xxxxxxx'],':');
  const isAtAll = boolean('@所有人', false);
  const source = {
    "feedCard": {
        "links": [
            {
                "title": "时代的火车向前开",
                "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
                "picURL": "https://cdn.nlark.com/yuque/0/2019/png/155457/1555929360981-b462ce07-621d-4e97-9f75-dbf4acd7b5ff.png"
            },
            {
                "title": "时代的火车向前开2",
                "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
                "picURL": "https://cdn.nlark.com/yuque/0/2019/png/155457/1555929360981-b462ce07-621d-4e97-9f75-dbf4acd7b5ff.png"
            }
        ]
    }, 
    "msgtype": "feedCard",
    "at": {
        atMobiles,
        isAtAll
    }
  };
  return <FeedCard source={source} />;
}