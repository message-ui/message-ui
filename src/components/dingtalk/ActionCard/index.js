import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.less';

export default function ActionCard(props) {
  const { source } = props;
  const { actionCard, msgtype, at } = source;
  const { title, text, btns, btnOrientation, hideAvatar, singleTitle, singleURL } = actionCard;

  // 渲染整体跳转
  function renderActionLink() {
    return (
      <div className=" msg-bubble msg-action-card">
        <a className="card-link-container" href={singleURL} target="_blank">
          <div className="markdown-content">
            <ReactMarkdown source={text} />
          </div>
        </a>
        <div className="single-btn">
          <a className="card-link-container" href={singleURL} target="_blank">
            <p className="single-feed-title">{singleTitle}<i className=" img-text-icon iconfont">></i></p>
          </a>
        </div>
      </div>
    )
  }
  // 渲染独立跳转
  function renderActionBtn() {
    return (
      <div className="msg-bubble msg-action-card" >
        <div className="card-link-container">
          <div className="markdown-content default-cursor">
            <ReactMarkdown source={text} />
          </div>
        </div>
        <div className={ btnOrientation === '1' ? 'actions-container horizontal' : 'actions-container vertical'} >
        {btns && btns.map((i,k)=>{
            return (<p className="action-btn" key={k}>
              <a href={i.actionURL} target="_blank">{ i.title }</a>
            </p>)
          }
        )}
        </div>
      </div>
    )
  }

  return (
    <div className="dingtalk-action-card">
      {singleURL ? renderActionLink() : renderActionBtn()}
    </div>
  )
}
