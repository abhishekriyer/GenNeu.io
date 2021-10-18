import React, { useState } from 'react';
import './Intro.css';
import { Link, useHistory } from 'react-router-dom';

const Intro = () => {
  const history = useHistory();
  const [sentence, setSentence] = useState('');
  return (
    <div className="Intro">
      <header className="Intro-header">GenNeu</header>
      <p className="Intro-subheader">
        Enter your text to analyze Gender Bias for
      </p>
      <form
        className="Intro-searchForm"
        onSubmit={evt => {
          evt.preventDefault();
          if (sentence.trim() !== '') {
            history.push(`/query?sentence=${encodeURIComponent(sentence)}`);
          }
        }}
      >
        <div className="Intro-searchFormInner">
          <input
            className="Intro-search"
            required
            type="text"
            value={sentence}
            onChange={evt => setSentence(evt.target.value)}
          />
          <button className="Intro-go">Go</button>
        </div>
      </form>
      
    </div>
  );
};

export default Intro;
