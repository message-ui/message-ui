import React from 'react';

import { storiesOf } from '@storybook/react';
import { TextCard, LinkCard, FeedCard } from '../';

const feeds =[
  {
    "title": "时代的火车向前开", 
    "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI", 
    "picURL": "https://www.dingtalk.com/"
  },
  {
    "title": "时代的火车向前开2", 
    "messageURL": "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI", 
    "picURL": "https://www.dingtalk.com/"
  }
]

storiesOf('TextCard', module)
  .add('case 1', () => <TextCard content="这个即将发布的新版本，创始人陈航（花名“无招”）称它为“红树林”。
  而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是“红树林”？" />);

storiesOf('LinkCard', module)
  .add('case 1', () => <LinkCard title="火车时代向前开" picUrl="//img.alicdn.com/tfs/TB1cEz5RpXXXXbAaFXXXXXXXXXX-1600-680.png" messageUrl="https://www.dingtalk.com/"text="这个即将发布的新版本，创始人陈航（花名“无招”）称它为“红树林”。
  而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是“红树林”？" />);

storiesOf('FeedCard', module)
  .add('case 1', () => <FeedCard feeds={feeds} />);
