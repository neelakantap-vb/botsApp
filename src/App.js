import { Fragment } from 'react';

import Header from './components/Header';
import Menu from './components/Menu';
import './index.css';
 
function App() {
  return (
    <Fragment>
      <Header />
      <div className="jumbotron">
        <Menu />
      </div>
    </Fragment>
  );
}

export default App;
