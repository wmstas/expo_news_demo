import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';

import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

    const [news, setNews] = useState([
        { name: 'Google выпускает Андроид 20', anons: 'Google и новая ОС', full: 'Потрясающая производительность, \n всё очень круто!' },
        { name: 'Apple впереди', anons: 'Apple удваивает прибыль за год', full: 'Акционеры ликуют:\n"Apple is cool!"\n Вложения акционеров подросли.'  },
        { name: 'FaceBook и метавселенная', anons: 'разработки фейсбук для метавселенной', full: 'Матрица наступает,\n скоро перемещаемся в виртуал.' }
    ])

    return (
        <View style={gStyle.main}>

            <FlatList data={news} renderItem={({ item }) => (
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('fullInfo', item)}>
                        <Text> * {item.name} </Text>
                        <Text>       {item.anons} </Text>
                    </TouchableOpacity>
                    <Text>{' '}</Text>
                </View>
            )}>
            </FlatList>

        </View>
    )
}