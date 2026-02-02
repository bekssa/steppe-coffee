import {Hero} from "./components/hero/Hero.jsx";
import {Main} from "./components/main/Main.jsx";
function App() {
  return (
    <div className="flex flex-col gap-10">
        <Hero />
        <Main />
    </div>
  )
}

export default App
