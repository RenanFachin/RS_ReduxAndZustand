import { useStore } from "../zustand-store"

export function Header() {

  const { isLoading } = useStore()

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Blink-182</h1>

    </div>
  )
}