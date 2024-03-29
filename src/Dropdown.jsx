import { useState } from "react";

function Dropdown ({selected, setSelected}) {
    const [isActive, setIsACtive] = useState(false);
    const options = ['React', 'Vue', 'Angular']
    return(
    <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsACtive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
            <div className="dropdown-content">
            {options.map(option => (
                <div onClick={e => {
                    setSelected(option)
                    setIsACtive (false)
                    }    }
            className="dropdown-item">
                {option}
              </div>

            ))}
            
        </div>
        )}
        </div>
            
        
    );
    }
export default Dropdown