import * as Collapsible from '@radix-ui/react-collapsible';

import { ChevronDown } from "lucide-react";
import { VideoNameList } from "./VideoNameList";
import { useAppSelector } from '../store';
import { play } from '../store/slices/player';
import { useDispatch } from 'react-redux';

interface AlbumProps {
  albumIndex: number
  title: string
  amount: number
}

export function Album({ albumIndex, amount, title }: AlbumProps) {

  const dispatch = useDispatch()

  const musics = useAppSelector((state) => {
    return state.player.discography?.album[albumIndex].music
  })

  return (
    <Collapsible.Root className="group" defaultOpen={albumIndex === 0}>
      <Collapsible.Trigger className='flex w-full items-center gap-3 bg-zinc-800 p-4'>
        <div className='flex h-10 w-10 rounded-full items-center justify-center bg-blink-pink text-xs'>
          {albumIndex + 1}
        </div>

        <div className='flex flex-col gap-1 text-left'>
          <strong className='text-sm'>{title}</strong>
          <span className='text-xs text-zinc-400'>{amount} vídeos</span>
        </div>

        <ChevronDown className='w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform' />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className='relative flex flex-col gap-4 p-6'>
          {
            musics &&
            musics.map((music, index) => {

              return (
                <VideoNameList
                  key={music.id}
                  title={music.title}
                  duration={music.duration}
                  onPlay={() => dispatch(play([albumIndex, index]))}
                />
              )
            })
          }
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}