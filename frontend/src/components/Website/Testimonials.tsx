import ReviewCard from "../App/Decks/ReviewCard.tsx";

type Review = {
    name: string;
    rating: number;
    reviewDate: string;
    review: string;
}

function Testimonials() {

const reviews: Review[] = [
  {
    name: "Emily Chen",
    rating: 5,
    reviewDate: "12 July 2026",
    review:
      "This app has made learning Chinese much easier. The flashcards and pronunciation practice are especially helpful.",
  },
  {
    name: "Daniel Lee",
    rating: 4,
    reviewDate: "8 July 2026",
    review:
      "I really like the variety of lessons and the clear explanations. I would love to see more advanced vocabulary added.",
  },
  {
    name: "Sophie Williams",
    rating: 5,
    reviewDate: "30 June 2026",
    review:
      "The lessons are engaging and easy to follow. I have already noticed a big improvement in my vocabulary.",
  },
  {
    name: "James Zhang",
    rating: 4,
    reviewDate: "24 June 2026",
    review:
      "A great app for practising Chinese every day. The review system helps me remember words for much longer.",
  },
  {
    name: "Olivia Brown",
    rating: 5,
    reviewDate: "18 June 2026",
    review:
      "I started as a complete beginner and can now understand basic Chinese sentences. The app keeps learning simple and enjoyable.",
  },
  {
    name: "Michael Wang",
    rating: 3,
    reviewDate: "10 June 2026",
    review:
      "The app has useful lessons and a clean design, but I would like more speaking exercises and conversation practice.",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    reviewDate: "2 June 2026",
    review:
      "The combination of characters, pinyin, and English meanings is very useful. It is now part of my daily study routine.",
  },
];

    return(
        <div className="flex min-w-0 justify-start items-center bg-primary h-50 gap-5 overflow-x-scroll scrollbar-none">
            {reviews.map((review) => {
             return <ReviewCard name={review.name} rating={review.rating} reviewDate={review.reviewDate} review={review.review} />})
            }
        </div>
    )
}

export default Testimonials;