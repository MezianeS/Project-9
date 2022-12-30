import Navbar from './components/Navbar/Navbar'
import Index from './components/Index/Index'

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="home__section bg-primary">
        <div className="flex justify-between pl-5 p-5 px-10 mx-auto max-w-[1240px] items-center">
          <Index />
          <Navbar />
        </div>
      </div>
      Home
      Stats
      Business
      Agency
      Footer
    </div>
  )
}

export default App
