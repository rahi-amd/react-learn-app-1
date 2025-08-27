import { storyData } from './storyData';
import { useState } from 'react'; 
import homeButton from './assets/images/home-button.png';
import storyBackground from './assets/images/page-1.png';
import './StoryReader.css';
import previousButton from './assets/images/previous-button.png';
import nextButton from './assets/images/next-button.png';
import page2Background from './assets/images/page-2.png';




function StoryReader({ onBack }) {
    const [currentPage, setCurrentPage] = useState(0); 
    
    console.log("Story data:", storyData);
   console.log("First page:", storyData.pages[0]);
    return (
        <div className="story-reader" 
       style={currentPage === 0 ? {
       backgroundImage: `url(${storyBackground})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       minHeight: '100vh',
       width: '100%'
     } :currentPage === 1 ? {
       backgroundImage: `url(${page2Background})`,
       backgroundSize: 'cover',
       backgroundPosition: 'center', 
       backgroundRepeat: 'no-repeat',
       height: '100vh',
       width: '100%'
     } :{}}>

   <img src={homeButton} alt="Home" className="home-button" onClick={onBack} />

        <h2>{storyData.title}</h2>
        <div className="story-controls">
      <img src={previousButton} alt="Previous" className="nav-button" onClick={() => {
       if (currentPage === 0) {
        onBack(); // Go home from first page
        } else {
        setCurrentPage(currentPage - 1); // Go to previous page
       }
}} />
      <img src={nextButton} alt="Next" className="nav-button" onClick={() => setCurrentPage(Math.min(storyData.pages.length - 1, currentPage + 1))} />
      <div className={`story-content page-${currentPage + 1}`}>
      <p>{storyData.pages[currentPage].text}</p>
      </div>
      </div>
        </div>  
    );    
}
export default StoryReader;
