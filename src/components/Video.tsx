import ReactPlayer from 'react-player'
import { useAppSelector } from '../store'

import { next, useAppDispatch } from '../store/slices/player'

export function Video() {
  const dispatch = useAppDispatch()

  const video = useAppSelector(state => {
    const { currentAlbumIndex, currentMusicVideoIndex } = state.player

    const currentVideo =
      state.player.discography?.album[currentAlbumIndex].music[currentMusicVideoIndex]

    return currentVideo
  })

  function handlePlayNext(){
    dispatch(next())
  }

  if(!video){
    return null
  }

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      <ReactPlayer
        width='100%'
        height='100%'
        controls={true}
        onEnded={handlePlayNext}
        playing={true}
        url={`https://www.youtube.com/watch?v=${video.id}`}
      />
    </div>
  )
}