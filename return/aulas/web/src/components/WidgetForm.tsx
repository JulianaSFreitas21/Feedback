import { useState } from "react";

import { CloseButoon } from "./CloseButton";

import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Image de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Image de uma lâmpada'
        }
    },
    THOUGHT: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Image de uma nuvem de pensamento'
        }
    },
}

type feedbackType = keyof typeof feedbackTypes;

/*
    Object.entries(feedbackTypes) => 
    [
        ['BUG', {...}],
        ['IDEA', {...}],
        ['THOUGHT', {...}],
    ]

*/

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null);



    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadown-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButoon/>
            </header>

            {!feedbackType ? 
            (
                <div className="flex py-8 gap-2 w-full">
                    { Object.entries(feedbackTypes).map(([key, value]) => {
                        return(
                            <button 
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                key={key}
                                onClick={() => setFeedbackType(key as feedbackType)}
                                type="button"
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        )
                    }) }
                </div>
            ) : 
            (
                <p>Hello Word</p>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2 border-2 rounded-sm border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none" target="_blank" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}
  