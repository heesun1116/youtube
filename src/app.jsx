import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';


function App() {
  const [videos, setVideos] = useState([]);
   
  


  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAuRiyS9bfrflKaxpjk8pJ4jHTdW6wZUHQ", 
      requestOptions
      )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
     
  },[]); //[] mount에만 호출, [a] a가 업데이트 될때마다 호출
  
  
  //component,prop가 mount,update시에만 호출

  return <VideoList videos = {videos}/>
}
export default App;