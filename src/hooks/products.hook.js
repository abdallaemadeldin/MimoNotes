import { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useProductsContext } from 'src/context/products.context';

export const useProducts = () => {
    const { toggleFav, loading, getCategories, getProducts, categories, selectedCategory, products, filter } = useProductsContext();
    const ref = useRef();
    const { navigate } = useNavigation();

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const navigateTo = (to, params = {}) => navigate(to, params);

    return { categories, selectedCategory, products, loading, toggleFav, filter, ref, navigateTo };
}