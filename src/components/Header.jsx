export function Header() {
  return (
    <nav className='flex items-center justify-around mt-10 font-archivo text-zinc-400'>
      <a href='' className='header'>Gabriel Pacheco</a>
      <ul className='flex gap-x-10 '>
        <li>
          <a href="#about" className='header'>Sobre mim</a>
        </li>
        <li>
          <a href="#experiences" className='header'>Experiências</a>
        </li>
        <li>
          <a href="#projects" className='header'>Projetos</a>
        </li>
      </ul>
      <a href="" className='header'>Contato</a>
    </nav>
  )
}