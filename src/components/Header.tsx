import { useAppSelector } from "../store"

export function Header() {

  const isAlbumLoading = useAppSelector(state => state.player.isLoading)

  if (isAlbumLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Blink-182</h1>

    </div>
  )
}