import { createRoot } from 'react-dom/client';
import App from './components/App';
import './global.css'; // Import global.css instead of index.css

const root = createRoot(document.getElementById('root'));
root.render(<App />);