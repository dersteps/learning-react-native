/*import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('albums', () => App);
*/

// We need React and React Native to build components
//import React from 'react';
//import ReactNative from 'react-native';

import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/albumlist';

// Build component now
const App = () => (
    <View>
        <Header text={'Albums - Hell yeah!'} />
        <AlbumList />
    </View>
);

// Make it render
AppRegistry.registerComponent('albums', () => App);
