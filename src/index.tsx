import { render } from 'preact';
import style from './index.module.scss';

function App() {
  return <h1 className={style.title}>Hello world!</h1>;
}

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}
