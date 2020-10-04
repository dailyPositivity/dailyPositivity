import React from 'react';
import { useHistory, withRouter } from "react-router-dom";

const StartSlideshowButton = (props) => {
  let history = useHistory();

  const handleClick = () => {
    props.handleSubmit();
    history.push(`${props.match.params.categoryName}/slideshow`);
  }

  return (
    <div className = "noteComposeButton" aria-label="submit button to save the  note entry">
        <button type="button" onClick={handleClick}>
        Start Slideshow
        </button>
    </div>
  );
}

export default withRouter(StartSlideshowButton);