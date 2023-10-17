import ReactPlayer from 'react-player'
import { useAppSelector } from '../store'

import { next, useAppDispatch } from '../store/slices/player'
import { Loader } from 'lucide-react'

export function Video() {
  const dispatch = useAppDispatch()

  const video = useAppSelector(state => {
    const { currentAlbumIndex, currentMusicVideoIndex } = state.player

    const currentVideo =
      state.player.discography?.album[currentAlbumIndex].music[currentMusicVideoIndex]

    return currentVideo
  })


  const isAlbumLoading = useAppSelector(state => state.player.isLoading)

  function handlePlayNext() {
    dispatch(next())
  }


  return (
    <div className='w-full bg-zinc-950 aspect-video'>

      {
        isAlbumLoading ? (
          <div className='flex h-full items-center justify-center'>
            <Loader className='w-6 h-6 text-blink-pink animate-spin' />
          </div>
        ) : (<ReactPlayer
          width='100%'
          height='100%'
          controls={true}
          onEnded={handlePlayNext}
          playing={true}
          url={`https://www.youtube.com/watch?v=${video?.id}`}
        />)
      }


    </div>
  )
}