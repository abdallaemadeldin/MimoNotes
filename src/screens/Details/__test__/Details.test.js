import React from 'react';
import renderer from 'react-test-renderer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Details from '../Details';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useRoute: () => ({
            params: {},
        }),
        useNavigation: () => ({
            navigate: jest.fn(),
            canGoBack: jest.fn(),
            goBack: jest.fn(),
        }),
    };
});

test('renders correctly', () => {
    const tree = renderer.create(
        <SafeAreaProvider initialMetrics={{ insets: { top: 0, bottom: 0, left: 0, right: 0 } }}>
            <Details />
        </SafeAreaProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});