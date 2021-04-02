import { render } from 'react-dom';

function App() {
  return <h1>Hello world!</h1>;
}

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}
