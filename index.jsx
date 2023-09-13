import React from 'react'
import ReactDOM from 'react-dom/client'

import Name from "./Components/Name"
import About from "./Components/About"
import Projects from "./Components/Projects"
import data from "./Data/data"

function App() {
  
  const proj = data.map(proj =>
  {
    return <Projects
    key={proj.id}
    proj={proj}
     />
  }
  )
  
  return (
    <div className="all" >
    <div>
    <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2016/08/monkey-1-1470213948.jpg" width="100%" className="profpic"/ >
    </div>
    
    <Name />
    
    <About />
    
    <div className="projects">
    <h2>projects</h2>
    {proj}
    </div>
    
    <div className="space"></div>
    
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 