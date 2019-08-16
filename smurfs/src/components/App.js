import React from 'react';
import Header from './Header'
import AddSmurfForm from './AddSmurfForm';
import SmurfsContainer from './SmurfsContainer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <AddSmurfForm />
      <SmurfsContainer />
    </div>
  );
}

export default App;
