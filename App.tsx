import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './src/navigation/stack/AppStack';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
