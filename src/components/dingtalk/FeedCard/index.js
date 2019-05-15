import React from 'react';
import './index.less';

export default function FeedCard(props) {
  const { source } = props;
  const { feedCard, msgtype, at } = source;
  const { links } = feedCard;
  const topFeed = links.length > 0 ? links[0] : {};
  const subFeeds = links.slice(1, links.length);

  // 渲染子列表
  function renderSubFeeds(feeds) {
    return feeds.map((feed, key) => {
      const { title, messageURL, picURL } = feed;
      return (
        <a href={messageURL} key={key}>
          <li className="dingtalk-feed-card-item">
            <div className="dingtalk-feed-card-item-content">
              <div className="dingtalk-feed-card-item-content-title">
                <p>{title}</p>
              </div>
              <div className="dingtalk-feed-card-item-content-pic" style={{ 'backgroundImage': 'url(' + picURL + ')' }}></div>
            </div>
          </li>
        </a>
      );
    });
  }

  // 渲染顶部feeds
  function renderTopFeed(feed) {
    const { title, messageURL, picURL } = feed;
    return (
      <a href={messageURL}>
        <div className="dingtalk-feed-card-top" style={{ backgroundImage: 'url(' + picURL + ')' }}>
          <div className="dingtalk-feed-card-top-cover">
            <p className="dingtalk-feed-card-top-title">{title}</p>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="dingtalk-feed-card" >
      {renderTopFeed(topFeed)}
      {subFeeds.length > 0 &&
        <ul>
          {renderSubFeeds(subFeeds)}
        </ul>
      }
    </div>
  );
}
