import { useEffect, useState } from "react";
import { fetchSingleReview,  patchReviews  } from "../utils/api";
import { useParams } from "react-router-dom";
import { CommentsList } from "./CommentsList";

export const SingleReview = () => {
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addedVotes, setAddedVotes] = useState(0);
  const [err, setErr] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  const params = useParams();
  const id = params.review_id;
  const reviewDate = new Date(review.created_at);
  const year = reviewDate.getFullYear();
  const month = reviewDate.getMonth() + 1;
  const day = reviewDate.getDate();

  useEffect(() => {
    setIsLoading(true);
    fetchSingleReview(id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, [id]);

  const handleUpvote = () => {
    if (!hasVoted) {
      setAddedVotes(addedVotes + 1);
      setHasVoted(true);
      setErr(null);

      setTimeout(() => {
        patchReviews(id, 1).catch(() => {
              setAddedVotes(0);
              setErr('Oops! Try again.')
            })
      }, 1000);
    } else {
      setErr("You've already voted!");
    }
  };

  const handleDownvote = () => {
    if (!hasVoted) {
      setAddedVotes(addedVotes - 1);
      setHasVoted(true);
      setErr(null);

      setTimeout(() => {
        patchReviews(id, -1).catch(() => {
              setAddedVotes(0);
              setErr('Oops! Try again.')
            })
      }, 1000);
    } else {
      setErr("You've already voted!");
    }
  };



  if (isLoading) {
    return "Loading...";
  }


  return (
    <main className="single-review"> 
    <h2>{review.title}</h2>
      <h3>
        {" "}
        “Designed by {review.designer}, in <em>{review.category} </em> category
        ”
      </h3>
      <h4>
        {" "}
        Posted at{" "}
        <em>
          {" "}
          {day}/{month}/{year}
        </em>{" "}
        <br /> By <em> {review.owner} </em>{" "}
      </h4>
      <img src={review.review_img_url} alt="a representation of the game" />
      <p>{review.review_body}</p>
      <span>  Votes: {review.votes + addedVotes} </span>
      <br />
      <section className="votes-review">
    <br/>
    <button onClick={handleUpvote} aria-label="Upvote this post">👍 </button>
    <button onClick={handleDownvote} aria-label="Downvote this post">👎 </button>
    <p>{err ? <p>{err}</p> : null} </p>
    <br/>
    </section>
        <CommentsList {...review} />
    </main>
  )
};
