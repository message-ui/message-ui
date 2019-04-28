import React from 'react';
import './index.css';

export default function TextCard(props) {
  const { content } = props;
  return (
    <div className="dingtalk-text-card">{content}</div>
  )
}
