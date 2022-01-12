import { Text, View } from 'react-native';
import { gStyle } from '../styles/style';

export default function fullInfo({ route }) {

    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}> {route.params.name} </Text>
            <Text> -------- </Text>
            <Text> {route.params.full} </Text>

        </View>
    )
    //<Button title="Вернуться назад" onPress={() => navigation.goBack() } />
}