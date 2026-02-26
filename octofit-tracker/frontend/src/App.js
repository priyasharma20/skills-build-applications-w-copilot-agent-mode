import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { healthCheck } from './services/api';

function App() {
  const [backendStatus, setBackendStatus] = useState('checking...');
  const [backendMessage, setBackendMessage] = useState('');
  const [backendError, setBackendError] = useState(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await healthCheck();
        setBackendStatus(response.status);
        setBackendMessage(response.message);
      } catch (error) {
        setBackendStatus('error');
        setBackendMessage('Failed to connect to backend');
        setBackendError(error.toString());
        console.error('healthCheck failed:', error);
      }
    };

    checkHealth();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>OctoFit Tracker</h1>
        <div style={{ border: '1px solid white', padding: '20px', borderRadius: '5px' }}>
          <h2>Backend Status</h2>
          <p><strong>Status:</strong> {backendStatus}</p>
          <p><strong>Message:</strong> {backendMessage}</p>
          {backendError && <p><strong>Error:</strong> {backendError}</p>}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
