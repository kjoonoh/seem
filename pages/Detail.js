import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';


const Detail = () => {
    const route = useRoute()
    const [tails, setTails] = useState({})
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDRkNGU3NzU2MjE5NWUzNmE4OGY3MmI4YTU2ZjQzNiIsInN1YiI6IjY0NDQ4NWE3MDU4MjI0MDJmYjMyZjQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiBKa57r3cJVfdbRcm9-gBXo0ToW2e_cWRGWqVx2i3M'

        
        }
    }
    

    const getItem = async () => {
        try {

            const result = await axios.get(`https://api.themoviedb.org/3/tv/${route.params.data}?language=en-US`, options)
            console.log("kimkimkimkimkimkimkimkimkim", result.data)
            setTails(result.data)

        } catch (error) {
            console.log(error)
        }
    }


    useLayoutEffect(() => {
        getItem()
    }, [])

    return (
        <View>
            <Text>
                {tails.name}
            </Text>
            <Text>
                {tails.genre_ids}
            </Text>
        </View>
    );
};

export default Detail;