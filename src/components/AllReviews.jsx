
import { useState, useEffect } from "react";
import { fetchAllReviews } from "../utils/api";
import { ReviewCard } from "./ReviewCard";
import { Link } from "react-router-dom";

export const AllReviews = ({
  categories,
  reviewsList,
  setReviewsList,
  setCategories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllReviews().then((reviews) => {
      setReviewsList(reviews);
      const categories = reviews.reduce((categoriesArray, review) => {
        if (!categoriesArray.includes(review.category)) {
          categoriesArray.push(review.category);
        }
        return categoriesArray;
      }, []);
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  const filteredReviews =
    selectedCategory === "all"
      ? reviewsList
      : reviewsList.filter((review) => review.category === selectedCategory);

      if (isLoading) {
            return <p>Is Loading ....</p>;
          }

  return (
    <main>
      <h2 className="all-reviews">Check out the latest reviews!</h2>
      <div>
        <label htmlFor="categories-dropdown">
          Filter by categories:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div> 
      <ul className="review-grid">
        {filteredReviews.map((review) => (
          <li key={review.review_id}>
             <Link to={`/reviews/${review.review_id}`}>
          <ReviewCard {...review} key={review.review_id} review={review} />
        </Link>
          </li>
       
      ))}
      </ul>
      
    </main>
  );
};
