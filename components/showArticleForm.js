import { Text, View, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function ShowArticleForm({ route }) {

    return (
        <View style={gStyle.main}>
            <Image
                source={require('../assets/' + route.params.image)}
                style={{ width: 100, height: 100 }}
            />
            <Text style={gStyle.title}> {route.params.name} </Text>
            <Text> -------- </Text>
            <Text> {route.params.full} </Text>

        </View>
    )
}