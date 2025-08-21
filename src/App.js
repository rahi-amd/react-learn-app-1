import { useState } from 'react';
import './App.css';
import StorySelector from './StorySelector';
import StoryReader from './StoryReader';   

function App() {
  const [currentView, setCurrentView] = useState('selector');
  return (
    <div className="App">
      <h1>Testing Urdu Stories</h1>
      {currentView === 'selector' && <StorySelector/>}
      {currentView === 'reader' && <StoryReader/>}

      <div className="navigation">
        <button onClick={() => setCurrentView('selector')}>Choose Story</button>
        <button onClick={() => setCurrentView('reader')}>Read Story</button>
      </div>
    </div>
  );
}

export default App;
