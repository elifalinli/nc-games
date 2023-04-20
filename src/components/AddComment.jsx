import { useState } from "react";
import { useParams } from "react-router-dom";
import {postComment } from "../utils/api";


export const AddComment = ({ setComments, comments }) => {
  const [comment, setComment] = useState([]);
  const [commentBody, setCommentBody] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [err, setErr] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  const { review_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!commentAuthor || !commentBody){
        setErr("Please fill in both the username and body fields.");
        return;
    }
    const newComment = {
      body: commentBody,
      username: commentAuthor,
    };

    postComment(review_id, newComment).then((addedComment) => {
        setIsLoading(true)
      setComments([addedComment, ...comments]);
      setIsLoading(false);
      setCommentBody("")
      setCommentAuthor("")
      alert("Your comment is posted with success!")
    })
    .catch((err) => {
        setErr("Something's wrong... Try again")
    })
  };
  if (isLoading) {
    return "One second, hold that thought...";
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Share your thoughts!</h3>
      <section>
        <label htmlFor="comment-author">Username: </label>
        <br/>
        <input
          id="comment-author"
          type="text"
          value={comment.author}
          onChange={(e) => setCommentAuthor(e.target.value)}
        />
      </section>

      <section>
        <label htmlFor="comment-body">Your thoughts?</label>
        <br/>
        <textarea rows="5" cols="33"
          id="comment-body"
          type="text"
          value={comment.body}
          onChange={(e) => setCommentBody(e.target.value)}
        />
      </section>
      <button type="submit">Send it!</button>
    </form>
  );
};
