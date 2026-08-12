import Button from '../Button.tsx'

function Hero() {
    return(
        <div className="flex flex-col justify-center items-center bg-primary h-160 pointer-events-none">
            <div className="flex flex-col justify-center items-center mb-4">
                <h1 className="text-secondary-text text-3xl font-secondary mb-2">Stop learning passively.</h1>
                <h1 className="text-white text-5xl font-secondary mb-4">Apply what you learn.</h1>
                <p className="text-secondary-text font-primary w-80 text-center">A9 Chinese Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
            </div>
            <div>
                <Button text="Learn more" style="light" />
            </div>
        </div>
    )
}

export default Hero;