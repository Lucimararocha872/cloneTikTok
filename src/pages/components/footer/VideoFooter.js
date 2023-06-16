import React from 'react'
import './videoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote'

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@luRocha</h3>
        <p>Descrição</p>
        <div className="videoFooter__music">
          <MusicNoteIcon />
          <div className="videoFooterMusic_title">
            <p>Título da música</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__disc"
        alt="Disco de vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  )
}

export default VideoFooter
