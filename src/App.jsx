import './App.scss';
import ProjectInput from './components/ProjectInput/ProjectInput';

function App() {
  return (
    <div className="app text-center py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Modyo</h1>
            <h2>React template</h2>
            <ProjectInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
