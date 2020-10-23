import React from "react";

const QuoteButton = ({request, setRequest}) => {
    const handleClick = ()=> {
        setRequest(!request);
    }

  return (
    <button className="quoteBtn" onClick={handleClick}>
      New Quote
    </button>
  );
};

export default QuoteButton;
