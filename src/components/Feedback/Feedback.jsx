import Button from "../Button/Button";
import { useState } from "react";
import "./styles.css";

function Feedback() {
  const [countLike, setCountLike] = useState(0);

  const onLike = () => {
    setCountLike((prevValue) => {
      return prevValue + 1;
    });
  };

  const [countDislike, setCountDislike] = useState(0);

  const onDislike = () => {
    setCountDislike((prevValue) => {
      return prevValue + 1;
    });
  };

  const onReset = () => {
    setCountLike(0);
    setCountDislike(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="button-control">
        <Button name="Like" onClick={onLike} />
        <p className="like-count">{countLike}</p>
      </div>
      <div className="button-control">
        <Button name="Dislike" onClick={onDislike} />
        <p className="dislike-count">{countDislike}</p>
      </div>
      <div className="button-control">
        <Button name="Reset Results" onClick={onReset} />
      </div>
    </div>
  );
}

export default Feedback;
