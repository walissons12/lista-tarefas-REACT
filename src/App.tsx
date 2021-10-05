import {useState} from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: "Comprar algo", done: false},
    {id: 2, name: "Comprar algo 2", done: true}
  ])

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista De Tarefas!!!</C.Header>

      {/* {Area de Adicionar nova tarefaca} */}
      {list.map((item,index)=>(
        <div>
          <ListItem key={index} item={item} />
        </div>
      ))}

      </C.Area>
    </C.Container>
  )
}

export default App