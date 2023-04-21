
export const ReviewCard = ({
    review_img_url,
    owner,
    comment_count,
    votes,
    title
  }) => {

    return (
      <main className="review-card" >
        <img src={review_img_url} alt={"A basic representation of the mentioned game."}  />
        <p style={{textDecoration:'none'}}><em> <strong>{title} </strong></em></p>
        <p>Written by: {owner}</p>
        <p className="review-meta">
          Comments: {comment_count} <br /> Votes: {votes}
        </p>
        <br />
      </main>
    );
  };
  
