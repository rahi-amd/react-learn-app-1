import { storyData } from './storyData';
import { useState } from 'react'; 

function StoryReader() {
    const [currentPage, setCurrentPage] = useState(0); 
    
    console.log("Story data:", storyData);
   console.log("First page:", storyData.pages[0]);
    return (
        <div className="story-reader">
        <h2>{storyData.title}</h2>
        <div className="story-content">
        <p>{storyData.pages[currentPage].text}</p>
        </div>
        <div className="story-controls">
        <button>Previous Page</button>
        <button>Next Page</button>
        </div>
        </div>  
    );    
}
export default StoryReader;
