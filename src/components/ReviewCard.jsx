export const ReviewCard = ({
    review_id,
    review_img_url,
    owner,
    comment_count,
    votes,
  }) => {
    return (
      <li className="review-card" key={review_id}>
        <img src={review_img_url} alt={"A basic representation of the mentioned game."}  />
        <p>Owner: {owner}</p>
        <section className="review-meta">
          Comments: {comment_count} <br /> Votes: {votes}
        </section>
        <br />
      </li>
    );
  };
  
