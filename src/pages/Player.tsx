import { MessageCircle } from 'lucide-react'

import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Album } from '../components/Album'
import { useAppSelector } from '../store'
import { useEffect } from 'react'
import { api } from '../lib/axios'

export function Player() {
  const albums = useAppSelector(state => state.player.discography.album)

  const video = useAppSelector(state => {
    const { currentAlbumIndex, currentMusicVideoIndex } = state.player

    const currentVideo =
      state.player.discography.album[currentAlbumIndex].music[currentMusicVideoIndex]

    return {
      currentAlbumIndex,
      currentVideo
    }
  })

  useEffect(() => {
    api.get('/d')
  },[])

  useEffect(() => {
    document.title = ` Blink 182 - ${video.currentVideo.title}`
  }, [video])

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">

        <div className="flex items-center justify-between">
          {/* Header */}
          <Header />


          {/* Feedback Button */}
          <button className='flex items-center gap-2 rounded bg-blink-pink px-3 py-2 text-sm font-medium text-white hover:bg-opacity-90'>
            <MessageCircle className='w-4 h-4' />
            Deixar feedback
          </button>

        </div>

        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-md pr-80'>
          <div className='flex-1'>
            {/* Player de vídeo */}
            <Video />
          </div>

          <aside className='w-80 absolute top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-blink-pink divide-y-2 divide-zinc-900'>
            {
              albums.map((album, index) => {
                return (
                  <Album
                    key={album.id}
                    albumIndex={index}
                    title={album.title}
                    amount={album.music.length}
                  />
                )
              })
            }

          </aside>
        </main>

      </div>
    </div>
  )
}