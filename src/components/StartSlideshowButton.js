import React from 'react';
import { useHistory, withRouter } from "react-router-dom";

const StartSlideshowButton = (props) => {
  let history = useHistory();

  const handleClick = () => {
    props.handleSubmit();
    history.push(`${props.match.params.categoryName}/slideshow`);
  }

  return (
    <div className = "slideshowStartBtn" aria-label="Button to save the quotes and start the slideshow">
        <button type="button" onClick={handleClick}>
        Generate Your Slideshow
        </button>
    </div>
  );
}

export default withRouter(StartSlideshowButton);