import './StorySelector.css';
import skyBackground from './assets/images/sky-background-1.jpg';
import lionTreasure from './assets/images/lion-treasure.png';


function StorySelector(){
    return (
        <div className="story-selector"
            style={{ backgroundImage: `url(${skyBackground})` }}>
            <div className="story-card">
                <div className="page-tabs">
            <div className="page-tab"></div>
            <div className="page-tab"></div>
            <div className="page-tab"></div>
            <div className="page-tab"></div>
            <div className="page-tab"></div>
            <div className="page-tab"></div>
            <div className="page-tab"></div>
            <div className="page-tab"></div>
            <div className="page-tab"></div>
            <div className="page-tab"></div>
            </div>
                <div className="story-illustration">
                    <div className="image-area">
                        <img src={lionTreasure} alt="Lion and Treasure" className="story-image" />

          </div>
                    <div className="story-title">شیر اور خزانہ</div>
                </div>

        <div className="story-options">
        <button className="read-to-me-btn">
           🔊 مجھے  پڑھ  کر  سنائیں</button>
        <button className="read-it-myself-btn"> 
              📖 مجھے خود  پڑھنا  ہے
        </button>
           </div>  
           </div>      
          </div>
    );
}
export default StorySelector;