const styles: Styles = {
        dark: "border border-2 border-neutral bg-secondary rounded-full text-primary-text px-6 py-2",
        light: "border border-2 bg-white rounded-full text-neutral-text px-6 py-2"
    }

type Props = {
    text: string;
    style: keyof typeof styles;
    font?: string
}

type Styles = {
    dark: string;
    light: string;
}

function Button({ text, style, font='primary' }: Props) {

    return(
        <button className={`${styles[style]} font-${font}`}>{text}</button>
    )
}

export default Button;