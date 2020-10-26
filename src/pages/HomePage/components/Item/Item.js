import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Item = ({ user, description, urls, onPress })=> {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
                <Image style={styles.img} source={{ uri: urls.thumb }} />
            </TouchableOpacity>
            <Text style={styles.description}>Название: {description}</Text>
            <Text style={styles.author}>Автор: {user.name}</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    item: {
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    author: {
        fontSize: 11,
        fontWeight: '500',
        color: Colors.black,
    },
    description: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '700',
        color: Colors.dark,
    },
});

export default Item;