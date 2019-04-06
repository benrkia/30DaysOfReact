import React from 'react';

import Users from './Users';
import useStorage from './useStorage';

const App = () => (
    <Users 
		{...useStorage()}
    />
);

export default App;