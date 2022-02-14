import { Route, Routes } from "react-router-dom"
import Repo from "./pages/Repo"
import Repos from "./pages/Repos"

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Repos /> } ></Route>
      <Route path="/repo/*" element={ <Repo /> } ></Route>
    </Routes>
  )
}

export default App
