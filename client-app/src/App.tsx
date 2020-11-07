
import './App.css';
import React, {Component} from 'react';
import axios from 'axios';




class  App extends React.Component() {
[x: string]: any;

state={
  values:[]
}

componentDidMount(){
axios.get('http://localhost:5001/values')
.then((response)=>{
  this.setState({
    values:response.data
  })
})

 
}
render(){
  return (
    <div className="App">
      <header className="App-header">
       <ul>
         {this.state.values.map((value: any)=>{
          
             <li key={value.id}>{value.name}</li>
           
         })}
       </ul>
      </header>
    </div>
  );
}

}

export default App;
