import React from "react";

const Quote = ({ randomQuote }) => {
  return (
    <div>
      <h2 className="quote">{randomQuote.quote}</h2>
      <h3 className="author">{randomQuote.author}</h3>
    </div>
  );
};

export default Quote;
