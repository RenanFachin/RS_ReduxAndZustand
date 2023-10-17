import ReactPlayer from 'react-player'

import { Loader } from 'lucide-react'
import { useStore } from '../zustand-store'


export function Video() {

  const video = useStore(state => {
    const { currentAlbumIndex, currentMusicVideoIndex } = state

    const currentVideo =
      state.discography?.album[currentAlbumIndex].music[currentMusicVideoIndex]

    return currentVideo
  })


  const {isLoading, next} = useStore()

  function handlePlayNext() {
    (next())
  }


  return (
    <div className='w-full bg-zinc-950 aspect-video'>

      {
        isLoading ? (
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