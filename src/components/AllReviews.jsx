import { fetchAllReviews } from "../api";
import { useEffect, useState } from "react";
import { Categories } from "./Categories";
import { ReviewCard } from "./ReviewCard";

export const AllReviews = ({ reviewsList, setReviewsList, categories, setCategories }) => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    fetchAllReviews().then((reviews) => {
      setReviewsList(reviews);
      setIsloading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Is Loading ....</p>;
  }

  return (
    <div >
      <br />
      <h2 className="all-reviews">Checkout the latest reviews!</h2>
      <Categories categories={categories} setCategories={setCategories}/>
      <br />
      <br />
      <br />
      <ul className="review-grid">
        {reviewsList.map((review) => (
          <ReviewCard key={review.review_id} {...review} />
        ))}
      </ul>
    </div>
  );
};
