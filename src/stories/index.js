import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, array, select } from '@storybook/addon-knobs';
import { TextCard, LinkCard, FeedCard, ActionCard, MarkdownCard } from '../';
import { feeds, markdown, Action1, Action2 } from '../components/dingtalk/test.data';

storiesOf('TextCard', module)
  .addDecorator(withKnobs)
  .add('case 1', ()=>{
    const content = text('消息内容', '我就是我，不一样的烟火');
    const atMobiles = array('被@人的手机号',['188xxxxxxx'],':');
    const isAtAll = boolean('@所有人', false);
    const source = {
      "msgtype": "text", 
      "text": {
        content
      }, 
      "at": {
        atMobiles,
        isAtAll
      }
    }
    return (<TextCard source={source} />);
  });

storiesOf('LinkCard', module)
  .addDecorator(withKnobs)
  .add('case 1', () => {
    const title = text('消息标题', '时代的火车向前开');
    const texts = text('消息内容', '这个即将发布的新版本，创始人陈航（花名“无招”）称它为“红树林”');
    const messageUrl = text('跳转url', 'https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI');
    const picUrl = text('图片url', 'https://cdn.nlark.com/yuque/0/2019/png/155457/1555929360981-b462ce07-621d-4e97-9f75-dbf4acd7b5ff.png');
    const atMobiles = array('被@人的手机号',['188xxxxxxx'],':');
    const isAtAll = boolean('@所有人', false);
    const source = {
      "msgtype": "link", 
      "link": {
        'text':texts,
        title,
        messageUrl,
        picUrl
      },
      "at": {
        atMobiles,
        isAtAll
      }
    }
    return <LinkCard source={source} />
  });


storiesOf('MarkdownCard', module)
  .addDecorator(withKnobs)
  .add('case 1', () => {
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
  });


storiesOf('FeedCard', module)
  .addDecorator(withKnobs)
  .add('case 1', () =>{
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
  });

storiesOf('ActionCard', module)
  .addDecorator(withKnobs)
  .add('case 1', () => {
    const title = text('首屏会话透出的展示内容', '时代的火车向前开');
    const texts = text('markdown格式的消息',"![screenshot](https://cdn.nlark.com/yuque/0/2019/png/155457/1555929411028-9f836407-94fe-480e-bbf8-e45a5508239c.png)" +
    "### 乔布斯 20 年前想打造的苹果咖啡厅" +
    "Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划");
    const singleTitle = text('按钮名称', '阅读全文');
    const singleURL = text('按钮跳转', 'https://www.dingtalk.com/');
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
          singleTitle,
          singleURL
      },
      "msgtype": "actionCard",
      "at": {
        atMobiles,
        isAtAll
      }
    };
    return <ActionCard source={source} />
  })
  .add('case 2', () => {
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
          "btns": [
            {
                "title": "内容不错",
                "actionURL": "https://www.dingtalk.com/"
            },
            {
                "title": "不感兴趣",
                "actionURL": "https://www.dingtalk.com/"
            }
          ],
          title,
          hideAvatar,
          btnOrientation
      },
      "msgtype": "actionCard",
      "at": {
        atMobiles,
        isAtAll
      }
    };
    return <ActionCard source={source} />
  });
