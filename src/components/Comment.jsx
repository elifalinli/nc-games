export const Comment = ({ comment_id, body, author, votes, created_at }) => {
  const reviewDate = new Date(created_at);
  const year = reviewDate.getFullYear();
  const month = reviewDate.getMonth() + 1;
  const day = reviewDate.getDate();
  return (
    <li className="comment">
      <h4>
        {author} at {day}/{month}/{year}{" "}
      </h4>
      <p>{body}</p>
      <span>{votes} votes</span>
    </li>
  );
};
