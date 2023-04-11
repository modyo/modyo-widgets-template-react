import './App.scss';
import { useEffect } from 'react';
import RepositoryFactory from './repositories/RepositoryFactory';
import TestComponent from './components/TestComponent';

const PostsRepository = RepositoryFactory.get('posts');

function App() {
  const testSDK = async () => {
    const result = await PostsRepository.getTop(1, 20);
    console.log('result: ', result);
    return result;
  };

  useEffect(() => {
    testSDK();
  }, []);

  return (
    <div className="app">
      <div className="container text-center py-5">
        <div className="row">
          <div className="col">
            <h1>Modyo</h1>
            <TestComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
