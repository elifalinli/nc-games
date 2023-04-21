
import { ReviewCard } from "./ReviewCard";
import { Link, useParams } from "react-router-dom";

export const ReviewsByCategory = ({ reviewsList }) => {
  const { category } = useParams()

  const filteredReviews = reviewsList.filter((review) => review.category === category);

  return (
    <main>
      <h1> Check out the reviews in {category}</h1>
      {filteredReviews.length === 0 ? (
        <p>No reviews found in this category.</p>
      ) : (
        filteredReviews.map((review) => <Link to={`/reviews/${review.review_id}`}>
        <ReviewCard {...review} key={review.review_id} review={review} />
      </Link>)
      )}
    </main>
  );
};
