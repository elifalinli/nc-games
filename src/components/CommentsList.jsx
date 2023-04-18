import { fetchCommentsByReviewId } from "../utils/api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "./Comment.jsx";

export const CommentsList = ({ review_id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const params = useParams();
  const id = params.review_id;

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByReviewId(id).then((commentsArray) => {
      setComments(commentsArray);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <main className="comments-list">
      <h2>Comments</h2>
      <br />
      <ul >
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <Comment {...comment} />
          </li>
        ))}
      </ul>
    </main>
  );
};
