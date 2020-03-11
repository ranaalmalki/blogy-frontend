import React from 'react';
import './App.css';
import Articles from './articles/components/articles';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
articles:[
  {title:'T1', author:'A1' , content:'C1'},
  {title:'T2', author:'A2' , content:'C2'},
  {title:'T3', author:'A3' , content:'C3'},
  {title:'T4', author:'A4' , content:'C4'},

]
    };
  }
render(){
  return(
<div className ="App">
<header className="App-header">
  <p>
    Welcome to blogy
  </p>
</header>
<Articles articles={this.state.articles}/>
</div>
  );
}
}

export default App;