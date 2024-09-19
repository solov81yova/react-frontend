import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  return (
    <div className="feedback-wrapper">
      <div className="button-control">
        <Button name="Like" />
      </div>
      <p className="like-count">like</p>
      <div className="button-control">
        <Button name="Dislike" />
        <p className="dislike-count">dislike</p>
      </div>
      <div className="button-control">
        <Button name="Reset Results" />
      </div>
    </div>
  );
}
export default Feedback;
