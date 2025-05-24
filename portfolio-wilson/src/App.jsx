import './App.css'
import { Sidebar } from './Components/Sidebar'
import{Main} from './Components/Main'
import { Work } from './Components/Work'
import { Projects } from './Components/Projects'
import { ContactItem } from './Components/ContactItem'
import {Footer} from './Components/Footer'


function App() {
  

  return (
    <>
     <Sidebar/>
     <Main/>
     <Work/>
     <Projects/>
     <ContactItem/>
     <Footer/>
    
    </>
  )
}

export default App
