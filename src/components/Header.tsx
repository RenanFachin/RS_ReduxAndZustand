import { useStore } from "../zustand-store"

export function Header() {

  // necessário passar como parâmetro para o useStore apenas o estado que queremos "observar"
  const isLoading = useStore(store => store.isLoading)

  if (isLoading) {
    return <h1 className="text-2xl font-bold">Carregando...</h1>
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">Blink-182</h1>

    </div>
  )
}