import { repositoriesData } from "../utils/repositoriesData";

export function Projects() {
  return (
    <div className='flex justify-center pb-20'>
      <div className='flex flex-col w-[1140px] '>
        <h1 className='mb-16 text-white text-center mt-24 font-archivo text-4xl font-semibold'>Projetos <span className='text-green'>.</span></h1>
        <div className='flex flex-wrap justify-between'>
          {repositoriesData.map((repository) => (
            <div
              key={repository.id}
              className='w-full sm:w-1/2 lg:w-1/3 mb-4 px-2'
            >
              <div className='bg-secondBackground items-center justify-start px-10 py-8'>
                <h1 className='text-2xl font-archivo font-semibold'>{repository.title}</h1>
                <br/>
                <p className='text-zinc-400 font-archivo text-lg'>{repository.content}</p>
                <br/>
                <a target="_blank" href={repository.link} rel="noreferrer" className='font-archivo text-xl'>Visualizar projeto</a>
              </div>
            </div>
          ))}
        </div>
        <a href="" className='text-center font-archivo text-green text-xl mt-4'>Repositórios no GitHub</a>
      </div>
    </div>
  );
}
