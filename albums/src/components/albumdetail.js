import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './card';
import CardSection from './cardsection';
import Button from './button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const {
        thumbnailStyle,
        headerContentStyle, 
        headerTextStyle, 
        thumbnailContainerStyle,
        albumArtStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle} 
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={albumArtStyle}
                    source={{ uri: image }}
                />
            </CardSection>
            <CardSection>
                <Button title='Test' />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 10
    },
    albumArtStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
