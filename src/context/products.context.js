import axios from "axios";
import React, { useState, createContext, useContext } from "react"

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [products, setProducts] = useState([]);
    const [temp, setTemp] = useState([]);

    const toggleFav = (title) => {
        setProducts(st => [...st.map(e => e.title === title ? { ...e, isFav: !e.isFav } : e)]);
        setTemp(st => [...st.map(e => e.title === title ? { ...e, isFav: !e.isFav } : e)]);
    }

    const getCategories = () => axios.get('https://fakestoreapi.com/products/categories').then(res => setCategories(['All', ...res.data]));
    const getProducts = () => axios.get('https://fakestoreapi.com/products').then(res => {
        const items = [];
        res.data.map(e => { items.push({ ...e, isFav: false }); })
        setProducts(items);
        setTemp(items);
        setLoading(false);
    });

    const filter = (category) => {
        setSelectedCategory(category);
        if (category === 'All') setProducts(temp);
        else setProducts(temp.filter(product => product.category === category));
    }

    const contextValue = { loading, categories, selectedCategory, products, getCategories, getProducts, toggleFav, filter }

    return (
        <ProductsContext.Provider value={contextValue}>
            {props.children}
        </ProductsContext.Provider>
    );
}

export const useProductsContext = () => useContext(ProductsContext);