interface ButtonProps {
    text?: string
}
  
export function Button(props: ButtonProps) {
    return <button className='bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors'>{props.text ?? 'Default'}</button>
}
  