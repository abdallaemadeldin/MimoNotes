import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useSplash = () => {
    const { replace } = useNavigation();

    useEffect(() => {
        setTimeout(() => { replace("Products"); }, 1500)
    }, []);

    return {};
}