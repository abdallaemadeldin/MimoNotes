import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const style = () => {
    const { bottom } = useSafeAreaInsets();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f1f1f1',
            alignItems: 'center'
        },
        tagView: {
            paddingHorizontal: 15,
            height: 30,
            backgroundColor: '#fff',
            marginHorizontal: 4,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            marginVertical: 10
        },
        activeTag: {
            backgroundColor: 'orange'
        },
        tagLabel: {
            color: '#000',
            fontSize: 16,
        },
        activeTagLabel: {
            color: '#fff',
            fontSize: 16,
        },
        listHeader: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#000',
            marginBottom: 10,
            marginLeft: '2%'
        },
        productCard: {
            width: '46%',
            height: 300,
            marginHorizontal: '2%',
            marginBottom: 20
        },
        imgHolder: {
            width: '100%',
            height: '70%',
            backgroundColor: '#fff',
            borderRadius: 4,
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: .5,
            shadowRadius: 4,
            padding: 10
        },
        productImg: {
            flex: 1,
        },
        contentContainerStyle: {
            paddingBottom: bottom + 10
        },
        productCardName: {
            color: '#000',
            marginTop: 30
        },
        productCardPrice: {
            color: '#000',
            fontSize: 16,
            fontWeight: 'bold',
            lineHeight: 26
        },
        floatingBtn: {
            width: 44,
            height: 44,
            borderRadius: 22,
            backgroundColor: '#fff',
            position: 'absolute',
            elevation: 5,
            shadowRadius: 5,
            shadowOpacity: .4,
            shadowOffset: { width: 1, height: 1 },
            shadowColor: '#000',
            bottom: 72,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center'
        },
        indicator: {
            marginTop: '30%'
        }
    });
}