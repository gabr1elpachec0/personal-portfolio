import clsx from "clsx";
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
              <div className={clsx('bg-secondBackground items-center justify-start px-10 py-8 h-[230px]', {
                'border border-solid border-orange-700': repository.id === 1,
                'border border-solid border-purple' : repository.id === 2,
                'border border-solid border-white' : repository.id === 3,
                'border border-solid border-lightGreen' : repository.id === 4,
                'border border-solid border-red' : repository.id === 5,
              })}>
                <h1 className='text-2xl font-archivo font-semibold'>{repository.title}</h1>
                <br/>
                <p className='text-zinc-400 font-archivo text-lg'>{repository.content}</p>
                <br/>
                <a 
                  target="_blank" 
                  href={repository.link} 
                  rel="noreferrer" 
                  className={clsx('font-archivo text-xl', {
                    'text-orange-700': repository.id === 1,
                    'text-purple': repository.id === 2,
                    'text-white': repository.id === 3,
                    'text-lightGreen': repository.id === 4,
                    'text-red': repository.id === 5,
                  })}
                >
                  {repository.click}
                </a>
              </div>
            </div>
          ))}
        </div>
        <a href="" className='text-center font-archivo text-green text-xl mt-4'>Repositórios no GitHub</a>
      </div>
    </div>
  );
}
