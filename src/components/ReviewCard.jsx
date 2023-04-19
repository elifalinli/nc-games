
export const ReviewCard = ({
    review_id,
    review_img_url,
    owner,
    comment_count,
    votes,
  }) => {

    return (
      <main className="review-card" >
        <img src={review_img_url} alt={"A basic representation of the mentioned game."}  />
        <p>Owner: {owner}</p>
        <p className="review-meta">
          Comments: {comment_count} <br /> Votes: {votes}
        </p>
        <br />
      </main>
    );
  };
  
