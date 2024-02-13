import { useForm } from "../../../hooks/useForm";

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );

  return (
    <article className="create-comment">
      <form onSubmit={onSubmit}>
        <div >
          <h4 >Leave a comment</h4>
          <textarea name="comment"
            placeholder="Comment......"
            value={values.comment}
            onChange={changeHandler}
          ></textarea>
        </div>

        <div >
          <input className="btn submit" type="submit" value="Add Comment" />
        </div>
      </form>
    </article>

  );
};