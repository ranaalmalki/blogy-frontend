import React from 'react';
import './App.css';
import Articles from './articles/components/articles';
class App extends React.Component{
render(){
  return(
<div className ="App">
<header className="App-header">
  <p>
    Welcome to blogy
  </p>
</header>
<Articles/>
</div>
  );
}
}

export default App;