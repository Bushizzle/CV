import { render } from 'preact';
import { App } from './App';
import { detectTheme } from './components/ThemeToggle';

const root = document.getElementById('root');

if (root) {
  render(<App theme={detectTheme()} />, root);
}
