// import { useQuery } from '@tanstack/react-query'
// import { IUserInfo } from './constants/types'
// import ReactPlayer from 'react-player/file'
import styled from 'styled-components'
import { useRef, useState } from 'react'

import { FaPlay, FaPause, FaExpand, FaCompress, FaClosedCaptioning, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { BsArrowRepeat } from 'react-icons/bs'

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const videoContainerRef = useRef<any>(null)
  const videoRef = useRef<any>(null)
  const [isLooping, setIsLooping] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [showSubtitles, setShowSubtitles] = useState(false)
  const handleSubtitles = () => {
    setShowSubtitles(!showSubtitles)
  }
  const handlePlaybackRateChange = (event: any) => {
    setPlaybackRate(event.target.value)
    videoRef.current.playbackRate = event.target.value
  }
  const handleLoop = () => {
    setIsLooping(!isLooping)
    videoRef.current.loop = !isLooping
  }
  const handleFullScreen = () => {
    if (!isFullScreen) {
      videoContainerRef.current.requestFullscreen()
      setIsFullScreen(true)
    } else {
      document.exitFullscreen()
      setIsFullScreen(false)
    }
  }
  const handleVolumeChange = (event: any) => {
    setVolume(event.target.value)
    videoRef.current.volume = event.target.value
  }
  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }
  return (
    <CustomVideo className="video-player" ref={videoContainerRef}>
      <video ref={videoRef} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}>
        <source
          src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
          type="video/mp4"
        />
      </video>
      <div className="controls">
        {/* 동작함 */}
        <button onClick={handlePlayPause}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
        {/* 에러 발생 ?? */}
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
        {/* 동작함 */}
        <button onClick={handleFullScreen}>{isFullScreen ? <FaCompress /> : <FaExpand />}</button>
        {/* 동작함 */}
        <button onClick={handleLoop}>{isLooping ? <BsArrowRepeat /> : <BsArrowRepeat color="#999" />}</button>
        {/* 에러 발생*/}
        <input type="range" min="0.5" max="1" step="0.1" value={playbackRate} onChange={handlePlaybackRateChange} />
        {/* ?? */}
        <span>{playbackRate.toFixed(1)}x</span>
        {/* ?? */}
        <button onClick={handleSubtitles}>
          {showSubtitles ? <FaClosedCaptioning /> : <FaClosedCaptioning color="#999" />}
        </button>
        {/* ?? */}
        {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
      </div>
    </CustomVideo>
  )
  // video control - end

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () => fetch('http://localhost:8000/api/user').then((res) => res.json()),
  // })

  // if (error) {
  //   console.log('error')
  //   return 'An error has occurred: ' + error.message
  // }

  // if (isLoading) {
  //   console.log('loading')
  //   return (
  //     <>
  //       <div>h</div>
  //       <div>h</div>
  //       <div>h</div>
  //       <div>h</div>
  //       <div>h</div>
  //     </>
  //   )
  // }

  // return (
  //   <>
  //     {data.map((d: IUserInfo, i: number) => (
  //       <div key={i}>
  //         <div>{d.name}</div>
  //         <div>{d.city}</div>
  //         <div>{d.gender}</div>
  //         <div>{d.id}</div>
  //       </div>
  //     ))}
  //   </>
  // )
}

export default App

const CustomVideo = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  video {
    width: 100%;
  }
  .controls {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
  }
  .controls button,
  .controls input[type='range'],
  .controls span {
    color: #fff;
    font-size: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }
  .controls button:hover,
  .controls input[type='range']:hover {
    opacity: 0.8;
  }
  .controls button:active,
  .controls input[type='range']:active {
    opacity: 0.6;
  }
  .controls button.active {
    color: #00ccff;
  }
  .controls input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
  }
  .controls input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #00ccff;
    cursor: pointer;
  }
  .controls input[type='range']::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #00ccff;
    cursor: pointer;
  }
  .controls span {
    font-weight: bold;
  }
  .controls .active-icon {
    color: #00ccff;
  }
  .controls .inactive-icon {
    color: #fff;
    opacity: 0.5;
  }
`
