import React from 'react';
import renderer from 'react-test-renderer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from '../Splash';

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
            replace: jest.fn(),
        }),
    };
});

it('renders correctly', () => {
    const tree = renderer.create(
        // <SafeAreaProvider initialMetrics={{ insets: { top: 0, bottom: 0, left: 0, right: 0 } }}>
        <Splash />
        // {/* </SafeAreaProvider> */}
    ).toJSON();
    expect(tree).toMatchSnapshot();
});