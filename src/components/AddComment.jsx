
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

export const AddComment = ({ setComments, comments }) => {
  const [commentBody, setCommentBody] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { review_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!commentAuthor || !commentBody) {
      setErr("Please fill in both the username and body fields.");
      return;
    }
    const newComment = {
      body: commentBody,
      username: commentAuthor,
    };

    setIsLoading(true);
    postComment(review_id, newComment)
      .then((addedComment) => {
        setComments([addedComment, ...comments]);
        setIsLoading(false);
        alert("Your comment has been posted successfully!");
        setCommentAuthor("");
        setCommentBody("");
      })
      .catch((err) => {
        setErr("Something went wrong... Please try again.");
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Share your thoughts!</h3>
      {err && <p className="error">{err}</p>}
      <section>
        <label htmlFor="comment-author">Username: </label>
        <br />
        <input
          id="comment-author"
          type="text"
          value={commentAuthor}
          onChange={(e) => setCommentAuthor(e.target.value)}
        />
      </section>

      <section>
        <label htmlFor="comment-body">Your thoughts?</label>
        <br />
        <textarea
          rows="5"
          cols="33"
          id="comment-body"
          type="text"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
      </section>
      <button type="submit" disabled={isLoading}>   {isLoading ? "Hold that thought..." : "Send it!"}</button>
   
    </form>
  );
};
