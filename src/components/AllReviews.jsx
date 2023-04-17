import { fetchAllReviews } from "../api";
import { useEffect, useState } from "react";
import { Categories } from "./Categories";

export const AllReviews = ({ reviewsList, setReviewsList }) => {
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
    <div className="review-grid">
      <br />
      <h2 className="all-reviews">Checkout the latest reviews!</h2>
      
    
      <Categories/>
      <br/><br/>
      <br/>
      <ul className="review-list">
        {reviewsList.map((reviews) => (
          <li key={reviews.review_id} className="review-item">
            <img
              src={reviews.review_img_url}
              alt={"A basic represantation of the mentioned game."}
              width={250}
              height={250}
            />
            <br />
            <p>
              Owner: {reviews.owner}
            </p>
            <section className="review-meta">
             Comments: {reviews.comment_count} <br/> Votes:{reviews.votes}
            </section>
            <br/>
          </li>
        ))}
      </ul>
    </div>
  );
};
