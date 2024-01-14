import { About } from './components/About';
import { Experiences } from './components/Experiences';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Knowledge } from './components/Knowledge';
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
      <section className=''>
        <About />
      </section>
      <section className='bg-secondBackground'>
        <Experiences />
      </section>
      <section className='bg-firstBackground'>
        <Projects />
      </section>
      <section className='bg-secondBackground'>
        <Knowledge />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
