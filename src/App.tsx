import {useState} from 'react'
import * as C from './App.styles'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'


const App = () => {
  const [list, setList] = useState<Item[]>([
    
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [ ...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista De Tarefas!!!</C.Header>

      <AddArea onEnter={handleAddTask} />
      
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