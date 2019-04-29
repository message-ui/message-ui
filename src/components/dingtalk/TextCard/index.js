import React from 'react';
import './index.less';

export default function TextCard(props) {
  const { content } = props;
  return (
    <div className="dingtalk-text-card">{content}</div>
  )
}
