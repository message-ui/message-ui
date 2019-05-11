import React from 'react';
import './index.less';
import ReactMarkdown from 'react-markdown';

export default function MarkdownCard(props) {
  const { source } = props;
  const { markdown, msgtype, at  } = source;
  const { title ,text } = markdown;
  return (
    <div className="msg-bubble markdown-msg">
        <ReactMarkdown source={text}  className="markdown-content" />
    </div>
  )
}
