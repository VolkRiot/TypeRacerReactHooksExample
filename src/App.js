import React, { useState } from 'react';
import './App.css';
import getFailedSnapshotTests from 'jest-util/build/getFailedSnapshotTests';

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
    setGameState({ ...gameState, startTime: new Date().getTime() });
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
