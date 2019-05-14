import React from 'react';
import { text, boolean, array } from '@storybook/addon-knobs';
import { TextCard } from '../../';
export default ()=>{
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
}