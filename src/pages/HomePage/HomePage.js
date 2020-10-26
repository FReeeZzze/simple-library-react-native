import React, { useEffect } from 'react';
import fetchPhotos from '@thunks/photosThunk';
import { useDispatch, useSelector } from 'react-redux';
import Item from './components/Item';

import {
    SafeAreaView,
    StyleSheet,
    VirtualizedList,
    ActivityIndicator, 
    View,
    Text
} from 'react-native';

const getItem = (data, index) => {
    return {
      id: Math.random().toString(12).substring(0),
      data: data[index],
    }
  }
  
const getItemCount = (data) => {
    return data.length;
}

const HomePage = ({ navigation }) => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos);

    useEffect(() => {
      dispatch(fetchPhotos());
    }, []);

    return (
        <SafeAreaView style={styles.sectionContainer}>
            {photos.isLoading ? <ActivityIndicator /> : (
                <VirtualizedList 
                    data={photos.items} 
                    initialNumToRender={4}
                    renderItem={({ item, index }) => 
                        <Item   
                            key={item.id} 
                            onPress={() => navigation.navigate('Photo', { url: item.data.urls.small, index } )} 
                            description={item.data.alt_description} 
                            user={item.data.user} 
                            urls={item.data.urls} 
                        />
                    }
                    keyExtractor={item => item.id}
                    getItemCount={getItemCount}
                    getItem={getItem}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        marginTop: 32,
        marginBottom: 32,
    },
});

export default HomePage;