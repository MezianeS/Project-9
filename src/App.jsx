import Navbar from './components/Components'

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-primary">
        <div className="home bg-primary flex justify-between p-5 px-10 mx-auto max-w-[1240px] items-center">
          <h1 className="text-4xl text-[#f89c92] font-bold tracking-wide">FUTURE.</h1>
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
