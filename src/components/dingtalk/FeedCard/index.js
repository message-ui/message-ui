import React from 'react';
import './index.less';

export default function FeedCard(props) {
  const { source:feeds } = props;
  const topFeed = feeds.length > 0 ? feeds[0] : {};
  const subFeeds = feeds.slice(1,feeds.length);
  // 渲染子列表
  function renderSubFeeds (feeds) {
    return feeds.map((feed,key)=>{
      const { title, messageURL, picURL} = feed
      return (
        <a href={messageURL} key={key}>
          <li className="dingtalk-feed-card-item">
              <div className="dingtalk-feed-card-item-content">
                  <div className="dingtalk-feed-card-item-content-title">
                      <p>{title}</p>
                  </div>
                  <div className="dingtalk-feed-card-item-content-pic" style={{'backgroundImage':'url('+picURL+')'}}></div>
              </div>
          </li>
        </a>
      )
    })
  }
  // 渲染顶部feeds
  function renderTopFeed(feed){
    return (        
      <a  href={feed.messageURL}>
        <div className="dingtalk-feed-card-top" style={{backgroundImage:'url('+ feed.picURL+')'}}>
            <div className="dingtalk-feed-card-top-cover">
                <p className="dingtalk-feed-card-top-title">{feed.title}</p>
            </div>
        </div>
      </a>
    )
  }

  return (
    <div className="dingtalk-feed-card" >
        {renderTopFeed(topFeed)}
        { subFeeds.length>0 &&
          <ul>
            { renderSubFeeds(subFeeds) }
          </ul>
        }
    </div>
  )
}
