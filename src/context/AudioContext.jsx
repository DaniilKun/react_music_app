import {createContext, useState} from 'react'
import trackList from '../assets/trackList'

const defaultTrack = trackList[0];

const audio = new Audio(defaultTrack.src);

export const AudioContext = createContext({}) 

const AudioProvider = ({children}) => {
  const [currentTrack, setCurrentTrack] = useState(trackList[0])
  const [isPlay, setIsPlay] = useState(false)

  const hendleToggleAudio = (track) => {
    if(currentTrack.id !== track.id) {
      setCurrentTrack(track)
      setIsPlay(true)

      audio.src = track.src
      audio.currentTime = 0
      audio.play()
      return
    }

    if(isPlay) {
      audio.pause()
      setIsPlay(false)
    } else{
      audio.play()
      setIsPlay(true)
    }
  }

  const value = {audio, currentTrack, isPlay, hendleToggleAudio}

  return(
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  )
}

export default AudioProvider