import ReactPlayer from 'react-player'

export function Video() {
  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      <ReactPlayer
        width='100%'
        height='100%'
        controls={true}
        url="https://www.youtube.com/watch?v=LUEYNuVeA9Y"
      />
    </div>
  )
}