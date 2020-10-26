import React from 'react';

import {
    View,
    Image, 
    StyleSheet
} from 'react-native';

const PhotoPage = ({ navigation, route }) => {
    const params = route.params;
    return (
        <View style={styles.sectionContainer}>
            <Image style={styles.img} source={{ uri: params.url }} />
        </View>
    )
};

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    sectionContainer: {
        margin: 10,
    },
});

export default PhotoPage;
