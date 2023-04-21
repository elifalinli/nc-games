import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { ReviewCard } from "./ReviewCard";
import { fetchReviewsByCategory } from "../utils/api";

export const ReviewsByCategory = ({reviewsList, setReviewsList}) => {
    const [isLoading, setIsLoading] = useState(true);
    const {category_name} = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetchReviewsByCategory(category_name).then((categoryReviews) => {
            setReviewsList(categoryReviews)
            setIsLoading(false)

        })
    }, [category_name])

    if (isLoading) {
        return <p>Is Loading ....</p>;
      }

      return(
        <ul className="review-grid">
      {reviewsList.map((review) => (
        <li key={review.review_id}>
          <Link to={`/reviews/${review.review_id}`}>
            <ReviewCard {...review} />
          </Link>
        </li>
      ))}
    </ul>
      )
}