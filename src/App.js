import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.component';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer.component';
import ProjectDisplay from './routes/project-display/project-display';

function App() {
  return (
    <div className="App">
     <Router>
     <Navbar/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path = '/project/:id' element = {<ProjectDisplay/>}/>
        <Route path ="/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
  
}

export default App;
