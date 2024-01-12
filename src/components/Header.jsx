export function Header() {
  return (
    <nav className='flex items-center justify-around mt-10 font-archivo text-zinc-400'>
      <a href=''>Gabriel Pacheco</a>
      <ul className='flex gap-x-10 '>
        <li>
          <a href="">Sobre mim</a>
        </li>
        <li>
          <a href="">Projetos</a>
        </li>
        <li>
          <a href="">Experiências</a>
        </li>
      </ul>
      <a href="">Contato</a>
    </nav>
  )
}