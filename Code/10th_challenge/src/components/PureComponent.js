import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
  
    render() {
      
      console.log('Pure Component is re rendered')
     
      return (
        <h1>PureComponent</h1>
      );
    }
}

export default PureComp;