import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const SNIPPETS = [
    "Bears, beets, battlestar galactica",
    "What's Forrest Gump's password? 1Forrest1",
    "Where do programmers like to hangout? The Foo Bar",
  ];

  const [ userText, setUserText ] = useState('');
  const [ snippet, setSnippet ] = useState('');

  const updateUserText = (e) => {
    setUserText(e.target.value);
    console.log('current userText', userText);
  }

  const chooseSnippet = snippetIndex => () => {
    console.log('setSnippet', snippetIndex);
    setSnippet(SNIPPETS[snippetIndex]);
  }

  return (
    <div className="App">
      <h2>Type Race</h2>
      <hr/>
      <h3>Snippet</h3>
      {snippet}
      <input value={userText} onChange={updateUserText}/>
      <hr/>
      {
        SNIPPETS.map((snippet, index) => (
          <button onClick={chooseSnippet(index)} key={index}>
            {snippet.substring(0, 10)}
          </button>
        ))
      }
    </div>
  );
}

export default App;
