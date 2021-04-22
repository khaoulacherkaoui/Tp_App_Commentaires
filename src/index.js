// Import the react and the reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import Comment from './Comment';

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Attention !</h4>
          Vous êtes sûr ? 
        </div>
      </ApprovalCard>  
      <ApprovalCard>
        <Comment
          author="Cherkaoui Khaoula"
          date="à 10h00"
          content="Hello !!"
      />
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Cherkaoui Khouloud" date="à 10h30" content="Bonjour !!"/>
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Cherkaoui Ibtissam" date="à 12h00" content="Hi !!"/>
      </ApprovalCard>
    </div>
  );
}
// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'))
