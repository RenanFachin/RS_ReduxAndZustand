import { MessageCircle } from 'lucide-react'

import { Header } from '../components/Header'
import { Video } from '../components/Video'
import { Album } from '../components/Album'
import { useEffect } from 'react'
import { useStore } from '../zustand-store'




export function Player() {
  // carregando dados do zustand
  const { discography, load} = useStore()


  useEffect(() => {
    load()
  }, [])


  useEffect(() => {
    document.title = `Blink 182`
  }, [])

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
              discography?.album &&
              discography?.album.map((albumMap, index) => {
                return (
                  <Album
                    key={albumMap.id}
                    albumIndex={index}
                    title={albumMap.title}
                    amount={albumMap.music.length}
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