import { useState } from 'react';
import './App.css';
import StorySelector from './StorySelector';
import StoryReader from './StoryReader';   

function App() {
  const [currentView, setCurrentView] = useState('selector');

  const handleSelectStory = () => {
  setCurrentView('reader');
 };
  return (
    <div className="App">
      {currentView === 'selector' && <StorySelector onSelectStory={handleSelectStory}/>}
      {currentView === 'reader' && <StoryReader onBack={() => setCurrentView('selector')}/>}

    </div>
  );
}

export default App;
