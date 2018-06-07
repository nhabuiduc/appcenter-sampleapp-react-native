import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BaseScreen from '../components/baseScreen';
import images from '../images';

export class WelcomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }} testID="welcomeScreen" accessibilityLabel={"welcomeScreen"} accessible={true}>
                <BaseScreen options={
                    {
                        title: "Welcome",
                        topContainer: {
                            height: 150,
                            backgroundColor: "#CB2E62",
                            imageSource: images.aclogo
                        },
                        bottomContainer: {
                            backgroundColor: "#252525",
                            description: "This is Contact app version 2"
                        }
                    }
                }>
                </BaseScreen>
            </View>
        );
    }
}