import { About } from './components/About';
import { Header } from './components/Header';
import { Main } from './components/Main';
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
      <section className='flex items-center justify-center'>
        <About />
      </section>
    </>
  )
}

export default App
