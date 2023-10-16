
import { useAppSelector } from '../store'

export function TodoList() {

  const storeTodos = useAppSelector(store => {
    // quais infos vão ser retornadas
    return store.todo // retornando todas as informações (['Fazer café', 'Estudar Redux'])
  })


  // console.log(storeTodos)

  return (
    <ul>
      {/* Percorrendo cada item dentro do store.todo */}
      {
        storeTodos.map(todo => (
          <li key={todo}>
            {todo}
          </li>
        ))
      }
    </ul>
  )
}