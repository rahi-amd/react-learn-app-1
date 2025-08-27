import { storyData } from './storyData';
import { useState } from 'react'; 
import homeButton from './assets/images/home-button.png';
import storyBackground from './assets/images/page-1.png';


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
     } : {}}>

   <img src={homeButton} alt="Home" className="home-button" onClick={onBack} />

        <h2>{storyData.title}</h2>
        <div className="story-content">
        <p>{storyData.pages[currentPage].text}</p>
        </div>
        <div className="story-controls">
       <button onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}>Previous Page</button>
       <button onClick={() => setCurrentPage(Math.min(storyData.pages.length - 1, currentPage + 1))}>Next Page</button>
</div>
        </div>  
    );    
}
export default StoryReader;
