import { formatDate } from "../../utils/formatDate";
// text: is specified below else commentText won't be rendered
const Comment = ({ comment }) => {
  const { text: commentText, rating, author, date } = comment;

  return (
    <p>
      {commentText}
      <br />
      {rating}/5 stars -- {author}, {formatDate(date)}
    </p>
  );
};

export default Comment;
