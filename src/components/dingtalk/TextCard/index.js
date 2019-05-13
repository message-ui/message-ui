import React from 'react';
import './index.less';

export default function TextCard(props) {
  const { source } = props;
  const { text, msgtype, at } = source;
  const { content } = text;
  return (
    <div className="dingtalk-text-card">{content}</div>
  )
}
