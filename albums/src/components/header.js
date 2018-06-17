import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
    // Destructured import of styles
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}> 
            <Text style={textStyle}>{props.text}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
        fontFamily: 'Droid Sans'
    },
    viewStyle: {
        backgroundColor: '#f64600',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        marginBottom: 15
    }
};

export default Header;
