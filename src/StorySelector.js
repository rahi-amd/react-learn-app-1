import './StorySelector.css';


function StorySelector(){
    return (
        <div className="story-selector">
            <div className="story-card">
                <div className="story-illustration">
                    <div className="story-title">شیر اور خزانہ</div>
                </div>

        <div className="story-options">
        <button className="read-to-me-btn">
           🔊 مجھے پڑھ کر سنائیں</button>
        <button className="read-it-myself-btn"> 
              📖 مجھے خود پڑھنا ہے
        </button>
           </div>        
          </div>
        </div>
    );
}
export default StorySelector;