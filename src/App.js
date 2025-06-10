import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import DownloadCV from './components/DownloadCV';
import Education from './components/Education';
import Contacts2 from './components/Contacts2';
import Header from './components/Header';
import Github from './components/Github';
import Certificates from './components/Certificates';
function App() {
  return (
    <div className="App">
      <Header/>
      <Github/>
       <DownloadCV/>
      <About />
      <Experience />
      <Projects />
      <Education />
      <Certificates/>
      <Contacts2 />
      <Contacts />
     
      
     
      

    </div>
  );
}
export default App;
