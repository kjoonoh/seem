import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';



const MovieScreen = () => {
    const [nowPlayings, setNowPlaying] = useState([])
    const route = useRoute()
    const navigation = useNavigation()
    const getAddress = (category) => {
        return `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`        

    }
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDRkNGU3NzU2MjE5NWUzNmE4OGY3MmI4YTU2ZjQzNiIsInN1YiI6IjY0NDQ4NWE3MDU4MjI0MDJmYjMyZjQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiBKa57r3cJVfdbRcm9-gBXo0ToW2e_cWRGWqVx2i3M'
          }
    }
    
    const getNowPlayingData = async () => {
        try {


            const result = await axios.get(getAddress("airing_today"), options)
            console.log(result.data.results)
            setNowPlaying(result.data.results)
            
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getNowPlayingData()
    }, [])

    return (
        <SafeAreaView>
          <ScrollView>
            <FlatList
                data={nowPlayings}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Detail", {data: item.id})}  

                    >
                        <View
                            style={{
                                height: "140px"
                            }}
                        >
                            <Text>
                                {item.overview}
                            </Text>

                        </View>

                    </TouchableOpacity>
                )}
            
            />
        </ScrollView>
        </SafeAreaView>
    );
};

export default MovieScreen;