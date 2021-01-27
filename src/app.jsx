import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';





function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelctedVideo] = useState(null);
  
  const selectVideo = (video) =>{
    setSelctedVideo(video);
  }
  
  const search = query => {
    setSelctedVideo(null);
      youtube.search(query)
      .then(videos =>setVideos(videos));

  };
  


  useEffect(()=>{
    youtube.mostPopular()
    .then(videos =>setVideos(videos));
  },[]); //[] mount에만 호출, [a] a가 업데이트 될때마다 호출
  
  
  //component,prop가 mount,update시에만 호출

  return( 
  <div className={styles.app}>
  <SearchHeader onSearch={search}/>
    <section className={styles.content}>
    {selectedVideo && <div className={styles.detail}>
    <VideoDetail video={selectedVideo} />
    </div>
    }
    <div className = {styles.list}>
    <VideoList videos = {videos} onVideoClick={selectVideo} display={selectedVideo? 'list' : 'grid'}/>
    </div>
    </section>
  </div>
  )
}
export default App;