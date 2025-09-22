
interface ButtonProps{
    name: string,
    disabled?: boolean,
}

export function Button({name, disabled=false}: ButtonProps){

    return <button disabled={disabled}> {name}</button>

}