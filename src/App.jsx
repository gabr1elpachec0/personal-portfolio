/* eslint-disable no-unused-vars */
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
      <section className='flex flex-col items-center mb-20'>
        <About />
      </section>
      <section className='bg-secondBackground flex flex-col items-center mb-20'>
        <Experiences />
      </section>
      <section className='flex flex-col items-center mb-20'>
        <Projects />
      </section>
      <section className='bg-secondBackground flex flex-col items-center'>
        <Knowledge />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
