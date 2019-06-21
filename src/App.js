import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };
  const SNIPPETS = [
    'Bears, beets, battlestar galactica',
    "What's Forrest Gump's password? 1Forrest1",
    'Where do programmers like to hangout? The Foo Bar'
  ];

  const [userText, setUserText] = useState('');
  const [snippet, setSnippet] = useState('');
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  useEffect(() => {
    document.title = gameState.victory && "Victory!";
  })

  const updateUserText = e => {
    setUserText(e.target.value);

    if (e.target.value === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime,
      });
    }
  };

  const chooseSnippet = snippetIndex => () => {
    setSnippet(SNIPPETS[snippetIndex]);
    setUserText('');
    setGameState({ ...gameState, victory: false, startTime: new Date().getTime() });
  };

  return (
    <div className="App">
      <h2>Type Race</h2>
      <hr />
      <h3>Snippet</h3>
      {snippet}
      <br />
      <h4>{gameState.victory ? `Done! 🎉 Time: ${gameState.endTime}` : null}</h4>
      <input value={userText} onChange={updateUserText} />
      <hr />
      {SNIPPETS.map((snippet, index) => (
        <button onClick={chooseSnippet(index)} key={index}>
          {snippet.substring(0, 10)}...
        </button>
      ))}
    </div>
  );
};

export default App;
