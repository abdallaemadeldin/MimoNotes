import React, { memo } from 'react';
import { View, ScrollView, Image, FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaskedView from '@react-native-masked-view/masked-view';
import { useProducts } from 'src/hooks';
import { Toolbar } from 'src/components/toolbar';
import { style } from './style';

const Products = () => {
    const { container, tagView, activeTag, tagLabel, activeTagLabel, indicator, listHeader, productCard, imgHolder, contentContainerStyle, productCardName, productCardPrice, productImg, floatingBtn } = style();
    const { categories, selectedCategory, products, loading, toggleFav, filter, ref, navigateTo } = useProducts();

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={productCard} activeOpacity={1} onPress={() => navigateTo("Details", { price: item.price, description: item.description })}>
                <View style={imgHolder}>
                    <Image source={{ uri: item.image }} style={productImg} resizeMode="center" />
                </View>
                <TouchableOpacity style={floatingBtn} activeOpacity={.8} onPress={() => toggleFav(item.title)}>
                    <MaskedView style={{
                        width: 24,
                        height: 24,
                    }} maskElement={<Icon name={item.isFav ? "heart" : "heart-outline"} size={24} />} key={Math.random()}>
                        <LinearGradient colors={['#21094E', '#511281', '#7952B3']} useAngle angle={45} style={{ flex: 1, height: '100%' }} />
                    </MaskedView>
                </TouchableOpacity>
                <View style={{
                    width: '100%',
                    height: '30%',
                }}>
                    <Text numberOfLines={2} style={productCardName}>{item.title}</Text>
                    <Text style={productCardPrice}>{`$${item.price}`}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={container}>
            <Toolbar label="Clothing" />
            {loading ? <ActivityIndicator color="#21094E" style={indicator} /> : <>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {categories.map(category => {
                        const condition = category === selectedCategory;
                        return (
                            <TouchableOpacity key={category} style={[tagView, condition && activeTag]} onPress={() => {
                                filter(category);
                                ref.current.scrollToOffset({ animated: true, offset: 0 });
                            }}>
                                <Text style={condition ? activeTagLabel : tagLabel}>{category}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
                <FlatList
                    ref={ref}
                    data={products}
                    ListHeaderComponent={() => <Text style={listHeader}>{`${products.length} Items`}</Text>}
                    renderItem={renderItem}
                    numColumns={2}
                    removeClippedSubviews
                    windowSize={1}
                    getItemLayout={(_, index) => ({ length: 300, offset: 300 * index, index })}
                    keyExtractor={e => e.title}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={contentContainerStyle}
                    style={{ width: '100%', height: '75%' }}
                />
            </>}
        </View>
    );
}

export default memo(Products);