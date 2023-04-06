import { useForm } from "../../../hooks/useForm";

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );

  return (
    // <article className="create-comment">
    //   <label>Add new comment:</label>
    //   <form className="form" onSubmit={onSubmit}>
    //     <textarea
    //       name="comment"
    //       placeholder="Comment......"
    //       value={values.comment}
    //       onChange={changeHandler}
    //     ></textarea>
    //     <input className="btn submit" type="submit" value="Add Comment" />
    //   </form>
    // </article>
    <article className="create-comment">
      <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">

        <form onSubmit={onSubmit}>
          <div >
            <h4 style={{ width: '300px' }}>Leave a comment</h4>
            <textarea name="comment"
              placeholder="Comment......"
              value={values.comment}
              onChange={changeHandler}
              style={{ "background-color": "white", width: "300px" }}
            ></textarea>
          </div>

          <div >
            <input className="btn submit" type="submit" value="Add Comment" style={{ width: "300px" }} />
          </div>
        </form>
      </div>
    </article>

  );
};