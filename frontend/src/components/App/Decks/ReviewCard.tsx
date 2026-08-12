type Card = {
    name: string;
    rating: number;
    reviewDate: string;
    review: string;
}

function ReviewCard({ name, rating, reviewDate, review}: Card) {
    return(
        <div className="flex flex-col text-left justify-center items-center bg-primary h-full w-100 p-10 shrink-0">
            <p className="font-secondary text-primary-text">
                <span className="text-neutral">{reviewDate}</span> <br />
                <span className="leading-10">{name} | {rating}/5</span> <br />
                <span className="font-secondary text-primary-text">{review}</span>
            </p>
        </div>
    )
}

export default ReviewCard;