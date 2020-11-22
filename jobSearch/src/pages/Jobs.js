import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';

import { JobItem } from '../components';

const Jobs = (props) => {
    const [data, setData] = useState([]);
    const { selectedLanguage } = props.route.params;

    const fetchData = async () => { 
        const response = await axios.get(`https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`,
        );
        setData(response.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const renderJobs = ( {item} ) => {
        return (
            <JobItem job={item} />
        )
    }

    return (
        <SafeAreaView>
            <View>
                <Text>JOBS</Text>
                <FlatList 
                    data={data}
                    renderItem={renderJobs}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </SafeAreaView>
    )
}

export { Jobs };