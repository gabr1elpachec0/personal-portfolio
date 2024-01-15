export function About() {
  return (
    <div className='bg-secondBackground border-2 border-zinc-800 rounded lg:w-[1090px]'>
      <div className='flex flex-col items-center justify-center px-6 py-6 lg:flex-row'>
        <div>
          <img src="https://private-user-images.githubusercontent.com/97643968/296845177-e1bc6277-1acf-4f0e-8e81-733082f3da28.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDUzNDM4NzksIm5iZiI6MTcwNTM0MzU3OSwicGF0aCI6Ii85NzY0Mzk2OC8yOTY4NDUxNzctZTFiYzYyNzctMWFjZi00ZjBlLThlODEtNzMzMDgyZjNkYTI4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTE1VDE4MzI1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIwNDZmYWI2Mzk3MTVlOGY4NTEwN2Y1ZDU2NTIxNTUyNWJiMWJlOTcyMWE1ZmRjMzZiNWE4ZWMwZGJmMGIyNzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1VFXoJmplLflozfPk3O9Xx_hMwYYorqXdy5v01xbTic" alt="profilePicture" className='w-[300px] h-[350px] lg:w-[400px] lg:h-[480px] border-2 border-none rounded' />
        </div>
        <div className='w-[300px] lg:ml-10 lg:w-[600px]'>
          <h2 className='text-green font-archivo text-lg mt-5'>Quem sou</h2>
          <h1 className='text-white font-archivo text-4xl font-semibold mt-3'>Gabriel Pacheco</h1>
          <h2 className='text-white font-archivo text-lg mt-3'>Desenvolvedor Frontend & Backend</h2>
          <p 
            className='text-lg font-archivo text-zinc-400 mt-6 text-start leading-snug'
          >
            Meu nome é Gabriel Gomes Pacheco, sou desenvolvedor fullstack, formado técnico em informática para internet pelo IFSul Gravataí e continuo desenvolvendo minhas habilidades
            de design, frontend e backend. No momento estou cursando Análise e Desenvolvimento de Sistemas. Sou apaixonado por layouts simples e elegantes. 
          </p>
          <div className='w-[300px] mt-14'>
          <nav>
            <ul className='flex flex-wrap items-center justify-start gap-x-3 gap-y-3'>
              <a target="_blank" href="https://www.instagram.com/ggpac_/" className='bg-firstBackground p-5 border-2 border-zinc-800 rounded-lg hover:border-green' rel="noreferrer">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#04d361" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></svg>
                </li>
              </a>
              <a target="_blank" href="https://github.com/gabr1elpachec0" className='bg-firstBackground p-5 border-2 border-zinc-800 rounded-lg hover:border-green' rel="noreferrer">
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#04d361" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
                </li>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/gabriel-gomes-pacheco-103b661a8/" className='bg-firstBackground p-5 border-2 border-zinc-800 rounded-lg hover:border-green' rel="noreferrer">
                <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#04d361" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                </li>
              </a>        
            </ul>
          </nav>
        </div>
        </div>
        
      </div>
    </div>
  )
}