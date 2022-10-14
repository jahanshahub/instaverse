import TextInput from "./base/TextInput";

const PostInput = () => {
    return (
      <div className="d-flex postinput mt-5 mx-1">
          <TextInput width="100%" height="48px" placeholder="Write A Post......" />
          <button className="mx-3 follow-button">Post</button>
      </div>
    );
};

export default PostInput;