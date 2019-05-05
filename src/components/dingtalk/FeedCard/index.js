import React from 'react';
import './index.less';

export default function FeedCard(props) {
  const { feeds } = props;
  // console.log(feeds[0]);
  const topFeed = feeds[0];


  function renderSubFeeds (feeds) {
    return feeds.map((feed,key)=>{
      const { title, messageURL, picURL} = feed
      return (
        <a className="dingtalk-feed-card"  href={messageURL} key={key}>
          <li className="dingtalk-feed-card-item">
              <div className="dingtalk-feed-card-content">
                  <div className="dingtalk-feed-card-title">
                      <p>{title}</p>
                  </div>
                  <div className="dingtalk-feed-card-pic" style={{'backgroundImage':'url('+picURL+')'}}></div>
              </div>
          </li>
        </a>
      )
    })
  }


  return (
    <div className="dingtalk-link-card" >
        <a className="dingtalk-feed-card-top" href={topFeed.messageURL}>
            <div className="dingtalk-feed-card-top-content" style={{'backgroundImage':'url('+ topFeed.picURL+')'}}>
                <div className="dingtalk-feed-card-top-pic">
                    <p className="dingtalk-feed-card-top-title">{topFeed.title}</p>
                </div>
            </div>
        </a>
        { feeds.length>0 &&
          <ul>
            { renderSubFeeds(feeds) }
          </ul>
        }
    </div>
  )
}
