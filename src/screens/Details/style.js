import { StyleSheet } from 'react-native';

export const style = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f1f1f1',
        },
        descriptionStyle: {
            marginVertical: 15,
            fontSize: 16,
            color: '#000',
            marginHorizontal: 10,
            textAlign: 'left',
        },
        priceStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            marginHorizontal: 10,
            color: '#000'
        }
    });
}