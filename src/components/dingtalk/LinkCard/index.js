import React from 'react';
import './index.less';

export default function LinkCard(props) {
  const { title, text, messageUrl, picUrl } = props;
  return (
    <a className="dingtalk-link-card" href={messageUrl} target="_blank">
      <div className="dingtalk-link-card-title">{title}</div>
      <div className="dingtalk-link-card-content">
        <div className="dingtalk-link-card-image">
          <img src={picUrl} />
        </div>
        <div className="dingtalk-link-card-text">
          {text}
        </div>
      </div>
    </a>
  )
}
