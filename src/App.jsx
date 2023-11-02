import data from "./data/data"
import './App.css'
import { useState } from "react"
import Card from "./components/Card"

function App() {
  const [list, setList] = useState(data)
  return (
    <div>
      <Card list={list} setList={setList}/>
    </div>
  )
}

export default App
