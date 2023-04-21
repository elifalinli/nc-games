import { fetchAllReviews } from "../utils/api";
import { useEffect, useState } from "react";
import { Categories } from "./Categories";
import { ReviewCard } from "./ReviewCard";
import { Link } from "react-router-dom";

export const AllReviews = ({ reviewsList, setReviewsList, categories, setCategories }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllReviews().then((reviews) => {
      setReviewsList(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Is Loading ....</p>;
  }

  return (
    <main >
      <br />
      <h2 className="all-reviews">Checkout the latest reviews!</h2>
      <Categories categories={categories} setCategories={setCategories}/>
      <br />
      <br />
      <br />
      <ul className="review-grid">
      {reviewsList.map((review) => (
        <li key={review.review_id}>
          <Link to={`/reviews/${review.review_id}`}>
            <ReviewCard {...review} />
          </Link>
        </li>
      ))}
    </ul>
    </main>
  );
};
