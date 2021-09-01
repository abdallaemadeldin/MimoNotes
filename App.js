/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { I18nManager, StatusBar } from 'react-native';
import { ProductsProvider } from 'src/context/products.context';
import WindowStack from './src/lib/windowStack';


const App = () => {
  useEffect(() => { I18nManager.allowRTL(false); }, []);
  return (
    <ProductsProvider>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" animated />
      <WindowStack />
    </ProductsProvider>
  );
};

export default App;
