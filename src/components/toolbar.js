import React from 'react';
import { StyleSheet, useWindowDimensions, Platform, StatusBar, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export const Toolbar = (props) => {
    const { label, withBack } = props;
    const { top } = useSafeAreaInsets();
    const { width } = useWindowDimensions();
    const { canGoBack, goBack } = useNavigation();
    const style = StyleSheet.create({
        header: {
            width,
            height: Platform.OS === 'android' ? top + 56 + StatusBar.currentHeight : top + 44,
            paddingTop: StatusBar.currentHeight,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
        label: {
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold',
        },
        backBtn: {
            paddingTop: 22,
            width: 44,
            height: 44,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 10
        }
    });

    return (
        <LinearGradient colors={['#21094E', '#511281', '#7952B3']} useAngle angle={45} style={style.header}>
            <Text style={style.label}>{label || ""}</Text>
            {withBack && <TouchableOpacity style={style.backBtn} onPress={canGoBack && goBack}>
                <Icon name="chevron-left" size={24} color="#fff" />
            </TouchableOpacity>}
        </LinearGradient>

    );
}