import { createRoot } from 'react-dom/client';
import App from './components/App';
import './components_css/global.css'; // Import global.css instead of index.css

const root = createRoot(document.getElementById('root'));
root.render(<App />);