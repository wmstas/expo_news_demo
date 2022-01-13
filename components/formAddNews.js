import { Text, View, Button, TextInput } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function FormAddNews({ addArticle }) {

    return (
        <View style={gStyle.main}>
            <Formik initialValues={{ name: '', anons: '', full: '' }} onSubmit={(values, actions) => {
                addArticle(values)
                actions.resetForm()
            }}>
                {(props) => (
                    <View>
                        <Text style={gStyle.title}>Форма добавления новости</Text>
                        <Text>Название статьи:</Text>
                        <TextInput style={gStyle.input} value={props.values.name} placeholder=' ... введите данные' onChange={props.handleChange('name')} />
                        <Text>Краткое содержание:</Text>
                        <TextInput style={gStyle.input} value={props.values.anons} placeholder=' ... введите данные' onChange={props.handleChange('anons')} />
                        <Text>Полный текст статьи:</Text>
                        <TextInput style={gStyle.input} value={props.values.full} placeholder=' ... введите данные' onChange={props.handleChange('full')} multiline numberOfLines={5} />
                        <Button title='Опубликовать новость' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}