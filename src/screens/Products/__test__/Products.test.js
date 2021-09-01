import React from 'react';
import renderer from 'react-test-renderer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Products from '../Products';
import { ProductsProvider } from 'src/context/products.context';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
            canGoBack: jest.fn(),
            goBack: jest.fn(),
        }),
    };
});

test('renders correctly', () => {
    const tree = renderer.create(
        <ProductsProvider>
            <SafeAreaProvider initialMetrics={{ insets: { top: 0, bottom: 0, left: 0, right: 0 } }}>
                <Products />
            </SafeAreaProvider>
        </ProductsProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});