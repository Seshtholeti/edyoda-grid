
import "./Header.css";

function Header(){
  return (
    <header>
      <nav>
        <ul>
          <li>
            <h3 className="logo">Edyoda</h3>
            <span className="stories">Stories</span>
          </li>
          <li>
            <div className="dropdown">
             
              <p className="para"> Explore Categories    <img clas="icon"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="></img> <i className="fa fa-caret-down"></i></p> 
            
            </div>
          </li>
        </ul>
        <ul>
          <li className="tagline">
            EdYoda is free learning and knowledge
            <br /> sharing platform for techies
          </li>
          <li>
            <button className="navbtn">Go To Main Website</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;