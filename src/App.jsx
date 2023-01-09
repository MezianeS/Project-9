import Navbar from './components/Navbar/Navbar'
import Index from './components/Index/Index'
import Stats from './components/Stats/Stats'
import Scroll from './scroll'


function App() {
  Scroll();
  return (
    <div className="w-full overflow-hidden scroll-smooth">
      <div className="home__section bg-primary">
        <div className="flex justify-between pl-5 p-5 px-10 mx-auto max-w-[1240px] items-center">
          <a href="#">
            
            <img src="/../src/assets/logo.svg" alt="Logo Future." className='pnine__logo pl-0 '/>
          </a>
          <Navbar />
        </div>
        <Index />
      </div>
      <Stats />
      Stats
      Business
      Agency
      Footer
    </div>
  )
}

export default App
