import React, { useState, useEffect } from "react";
import Quote from "./Quote";
import QuoteButton from "./QuoteButton";
import "./App.css";

function App() {
  const [randomQuote, setRandomQuote] = useState({});
  const [request, setRequest] = useState(false);
  console.log(randomQuote);

  useEffect(() => {
    fetch("https://hadiyahl-quotes.glitch.me/quotes/lodash-random")
      .then((res) => res.json())
      .then((quote) => setRandomQuote(quote))
      .catch((err) => console.log(err));
  }, [request]);

  return (
    <div className="App">
      <Quote randomQuote={randomQuote} />
      <QuoteButton request={request} setRequest={setRequest} />
    </div>
  );
}

export default App;
