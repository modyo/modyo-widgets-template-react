import './App.css';
import { Client } from '@modyo/sdk/dist/index';
import { useEffect } from 'react';
import liquidParser from './liquid/liquidParser';

function App() {
  const testSDK = async () => {
    const client = new Client('https://fed-team.modyo.cloud', 'es');

    const content = client.getContentType('animals', 'game');
    const result = await content.getEntries();
    return result;
  };

  useEffect(() => {
    console.log('liquid: ', liquidParser.parse('{{account.url}}'));
    testSDK().then((result) => {
      console.log('result: ', result);
    });
  }, []);

  return (
    <div className="App">
      <h1>Modyo 💚</h1>
      <h2>React template</h2>
    </div>
  );
}

export default App;
