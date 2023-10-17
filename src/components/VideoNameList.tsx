import { Video } from "lucide-react";


interface VideoNameListProps {
  title: string;
  duration: string;
  onPlay: () => void;
}


export function VideoNameList({ title, duration, onPlay }: VideoNameListProps) {

  return (
    <button
      onClick={onPlay}
      className='flex items-center gap-3 text-sm text-zinc-400 enabled:hover:text-zinc-100'
    >
      <Video className='w-4 h-4 text-zinc-500' />
      <span>{title}</span>

      <span className='ml-auto font-mono text-xs text-zinc-500'>{duration}</span>
    </button>
  )
}