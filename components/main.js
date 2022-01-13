import { Text, View, TouchableOpacity, FlatList, Image, Modal } from 'react-native';
import React, { useState } from 'react';

import { Ionicons } from '@expo/vector-icons';

import { gStyle } from '../styles/style';

import FormAddNews from './formAddNews';

export default function Main({ navigation }) {

    const [news, setNews] = useState([
        { name: 'Google выпускает Андроид 20', anons: 'Google и новая ОС', full: 'Потрясающая производительность, \n всё очень круто!', image: 'i1.png' },
        { name: 'Apple впереди', anons: 'Apple удваивает прибыль за год', full: 'Акционеры ликуют:\n"Apple is cool!"\n Вложения акционеров подросли.', image: 'i2.png' },
        { name: 'FaceBook и метавселенная', anons: 'разработки фейсбук для метавселенной', full: 'Матрица наступает,\n скоро перемещаемся в виртуал.', image: 'i3.png' }
    ])

    const [formAddVisible, setFormAddVisible] = useState(false)

    const addArticle = (article) => {
        setNews((list) => {
            article.image = 'def_news.png'
            return [article, ...list]
        })
        setFormAddVisible(false)
    }

    return (
        <View style={gStyle.main}>

            <Modal visible={formAddVisible}>
                <View>
                    <Ionicons name="close-circle" size={32} color="red" style={{ marginBottom: 15 }} onPress={() => setFormAddVisible(false)} />
                    <FormAddNews addArticle={addArticle} />
                </View>
            </Modal>

            <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: "#dddd00" }} onPress={() => setFormAddVisible(true)}>
                <Ionicons name="add-circle-sharp" size={32} color="green" style={{ marginBottom: 15 }} />
                <Text> добавить новость</Text>
            </TouchableOpacity>

            <Text>{' '}</Text>

            <FlatList data={news} renderItem={({ item }) => (
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ShowArticleForm', item)}>
                        <Image
                            source={require('../assets/' + item.image)}
                            style={{ width: 100, height: 100 }}
                        />
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