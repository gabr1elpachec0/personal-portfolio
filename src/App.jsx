import { About } from './components/About';
import { Experiences } from './components/Experiences';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Projects } from './components/Projects';
import './styles/global.css';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <section id='about'  className=''>
        <About />
      </section>
      <section id='experiences' className='bg-secondBackground'>
        <Experiences />
      </section>
      <section id='projects' className='bg-firstBackground'>
        <Projects />
      </section>
    </>
  )
}

export default App
