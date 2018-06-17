import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/albumlist';

// Build component now
const App = () => (
    <View style={{ flex: 1 }}>
        <Header text={'Albums - Hell yeah - iOS!'} />
        <AlbumList />
    </View>
);

// Make it render
AppRegistry.registerComponent('albums', () => App);
