import React from 'react';
import "./Youtube.css";
import {YoutubeData} from "./YoutubeData";

function Youtube() {
  return (
    <div className='Youtube' id='youtube'>
      <div className="youtubeTitle">
        <h1 className="Title">
          Youtube Videos
        </h1>
      </div>
      <div className="youtubeChild">
        <div className="VideosList">
          {
            YoutubeData.map((video, item) => (
              <div className="video">
                <img src={video.image} alt={video.alt} className="videoImage" />
                <div className="videoData">
                  <div className="name">
                    {video.title}
                  </div>
                  <div className="rowOfData">
                    <div className="publishDate">
                      {video.date}
                    </div>
                    <a href={video.playSource} className="link">
                      {video.PlayVideoButton}
                    </a>
                    <a href={video.githubSource} className="link">
                      {video.githubButton}
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <a href="https://www.youtube.com/@Shoaib.Ja0allah" className="subscribe">
        Subscribe in my channel
      </a>
    </div>
  )
}

export default Youtube