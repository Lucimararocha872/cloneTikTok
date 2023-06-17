import React, { useRef, useState } from 'react'
import './video.css'
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from './components/sidebar/VideoSidebar'

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null)

  const [play, setPlay] = useState(false)

  function handdleStart() {
    if (play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
    /* Mudando o estado, se ele estiver tocando, ou seja, se play == true, mudo status p false, senão, se for diferente de true, toca e muda estado p verdadeiro. */
  }
  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  )
}

export default Video
