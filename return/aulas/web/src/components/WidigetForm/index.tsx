import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

/*
    Object.entries(feedbackTypes) => 
    [
        ['BUG', {...}],
        ['IDEA', {...}],
        ['THOUGHT', {...}],
    ]

*/

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSend, setFeedbackSend] = useState(false);

    function handleRestartFeedback(){
        setFeedbackSend(false);
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadown-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSend ? (
                <FeedbackSucessStep
                onFeedbackRestarRequested={handleRestartFeedback}
                />
            ):(
                <>
                    {!feedbackType ? 
                    (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                    ) : 
                    (
                        <FeedbackContentStep 
                        onFeedbackSent={(() => setFeedbackSend(true))}
                        feedbackType={feedbackType} 
                        onFeedbackRestarRequested={handleRestartFeedback}/>
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2 border-2 rounded-sm border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none" target="_blank" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>
    )
}
  