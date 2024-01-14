import { useState } from "react"
import { experiencesData } from "../utils/experiencesData";

export function Experiences() {
  const [activeButton, setActiveButton] = useState(0);
  
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex)
  }

  return (
    <div className='mt-20 flex justify-center'>
      <div className='flex flex-col w-[1140px] h-[552px]'>
        <h1 className='mt-20 mb-16 text-white font-archivo text-4xl font-semibold'>Experiências <span className='text-green'>.</span></h1>
        <div className='flex'>
          <div className='flex flex-col'>
            {
              experiencesData.map((experience, index) => (
                <button
                  key={experience.id} 
                  className={`experience ${activeButton === index ? 'active' : ''}`}
                  onClick={() => handleButtonClick(index)}
                >
                  {experience.label}
                </button>
              ))
            }
          </div>
          {
            activeButton !== null && (
              <div className='ml-12'>
                <div className='flex justify-start items-center'>
                  <h1 className='font-medium text-2xl font-archivo'>{experiencesData[activeButton].title}</h1>
                  <p className='ml-16 text-zinc-400 font-archivo text-lg'>{experiencesData[activeButton].date}</p>
                </div>
                <h2 className='font-archivo text-xl text-green mt-6'>{experiencesData[activeButton].label}</h2>
                <p className='text-zinc-400 font-archivo text-xl mt-6'>{experiencesData[activeButton].content}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}