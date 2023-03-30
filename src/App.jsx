import './App.css';
import { useEffect } from 'react';
import RepositoryFactory from './repositories/RepositoryFactory';

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
    <div className="App">
      <h1>Modyo 💚</h1>
      <h2>React template</h2>
    </div>
  );
}

export default App;
