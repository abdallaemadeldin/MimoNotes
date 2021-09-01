import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { Toolbar } from 'src/components/toolbar';
import { style } from './style';
import { useDetails } from 'src/hooks';

const Details = () => {
    const { container, descriptionStyle, priceStyle } = style();
    const { description, price } = useDetails();

    return (
        <View style={container}>
            <Toolbar withBack />

            <Text style={descriptionStyle}>{description}</Text>
            <Text style={priceStyle}>{`$${price}`}</Text>
        </View>
    );
}

export default memo(Details);