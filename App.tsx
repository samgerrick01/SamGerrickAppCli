/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {ThemeProvider} from '@providers/ThemeProvider';
import React from 'react';
import Entry from './src/Entry';

if (__DEV__) {
  require('./ReactotronConfig');
}

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Entry />
    </ThemeProvider>
  );
}

export default App;
