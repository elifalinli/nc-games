import { useEffect, useState } from "react";
import { fetchSingleReview } from "../utils/api";
import { useParams } from "react-router-dom";


export const SingleReview = () => {
const [review, setReview] = useState([])    
const params = useParams();
const id = params.review_id
console.log(id)
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(id).then((review) => {
      setReview(review);
      console.log(review)
      setIsLoading(false);
    });
  }, []);



  if(isLoading){
    return "Loading..."
  }

  const reviewDate = new Date(review.created_at);
  const year = reviewDate.getFullYear();
  const month = reviewDate.getMonth() + 1; // getMonth() returns 0-11, so we add 1
  const day = reviewDate.getDate();
return(
    <main className="single-review">
    <h2>{review.title}</h2>
    <h3> “Designed by {review.designer}, in <em>{review.category} </em> category  ”</h3>
    <h4> Posted at <em> {day}/{month}/{year}</em> <br/> By <em> {review.owner} </em> </h4>
    <img src={review.review_img_url} alt="a representation of the game"/>
    <p>{review.review_body}</p>
    </main>
)
}