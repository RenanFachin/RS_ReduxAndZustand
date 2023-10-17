import { ChevronDown } from "lucide-react";
import { VideoNameList } from "./VideoNameList";

interface AlbumProps {
  albumIndex: number
  title: string
  amount: number
}

export function Album({ albumIndex, amount, title }: AlbumProps) {
  return (
    <div>
      <button className='flex w-full items-center gap-3 bg-zinc-800 p-4'>
        <div className='flex h-10 w-10 rounded-full items-center justify-center bg-blink-pink text-xs'>
          {albumIndex + 1}
        </div>

        <div className='flex flex-col gap-1 text-left'>
          <strong className='text-sm'>{title}</strong>
          <span className='text-xs text-zinc-400'>{amount} vídeos</span>
        </div>

        <ChevronDown className='w-5 h-5 ml-auto text-zinc-400' />
      </button>


      <nav className='relative flex flex-col gap-4 p-6'>
        <VideoNameList title="DANCE WITH ME" duration="04:10" />
        <VideoNameList title="DANCE WITH ME" duration="04:10" />
        <VideoNameList title="DANCE WITH ME" duration="04:10" />
      </nav>
    </div>
  )
}