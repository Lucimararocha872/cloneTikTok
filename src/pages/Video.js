import React, { useRef, useState } from 'react'
import './video.css'

function Video() {
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
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      ></video>
    </div>
  )
}

export default Video
