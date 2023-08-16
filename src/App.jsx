
import { Route, Routes } from "react-router-dom";
import Intro from "./components/Home/Intro";
import Navbar from "./components/navbar";
import Home from './components/home';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":id" />
        </Route>
      </Routes>
    </>
  )
}
export default App;