import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Hero, Navbar, Menu } from './components';





const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-secondary'>
        <div className='z-0'>
          <Navbar className='' />
          <Hero />
        </div>
        <About />
        <Menu />
        <Contact />
      </div>

    </BrowserRouter>
  )
}

export default App
