import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.less';

export default function MarkdownCard(props) {
  const { source } = props;
  const { markdown, msgtype, at } = source;
  const { title, text } = markdown;
  return (
    <div className="dingtalk-markdown-card msg-bubble markdown-msg" >
      <ReactMarkdown source={text} className="markdown-content" />
    </div>
  );
}