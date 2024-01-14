import { knowledgeData } from "../utils/knowledgeData";
import { useState } from "react";

export function Knowledge() {
  const initialContent = "*Passe o cursor do mouse por cima para ler*"
  const [ knowledge, setKnowledge ] = useState(initialContent);
  
  return (
    <div className="flex flex-col items-center text-center pb-20">
      <h1 className="mt-20 mb-10 text-white font-archivo text-4xl font-semibold">
          Conhecimentos <span className="text-green">.</span>
      </h1>
      <p className="text-zinc-400 text-lg font-archivo">{knowledge}</p>
      <nav className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5 w-full">
            {
              knowledgeData.map((knowledge) => (
                <div
                  className="bg-firstBackground p-8 border-2 border-zinc-800 rounded-lg hover:border-green hover:cursor-default duration-700 flex items-center justify-center"
                  rel="noreferrer"
                  key={knowledge.id}
                  onMouseEnter={() => setKnowledge(knowledge.content)}
                  onMouseLeave={() => setKnowledge(initialContent)}
                >
                  {knowledge.icon}
                </div>
            ))}
          </div>
        </nav>
    </div>
  );
}
