import React from 'react'
import AudioPlayer from "react-h5-audio-player"
import 'react-h5-audio-player/lib/styles.css'
import {useContext} from'react'
import {Songs} from "../context/context"

export default function Playing() {
  const {song, handleSetSong} = useContext(Songs)
  const handleClickNext = () => {
    handleSetSong(song.id + 1)
  }

  const handleClickPrev = () => {
    handleSetSong(song.id - 1)
  }


  return (
    <div>
        <AudioPlayer 
            className="play-music" 
            src={song.url} 
            layout='stacked-reverse' 
            showSkipControls={true} 
            showJumpControls={false} 
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPrev}
        />
    </div>
  )
}
