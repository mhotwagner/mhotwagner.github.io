import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface FooterProps {
    style?: StyleProp<ViewStyle>;
}

export default function Footer({style}: FooterProps) {
    return (
        <View style={[styles.footer, style]}>
            <Text style={styles.footerText}>&copy; 2025 Michael Hotwagner</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
    },
    footerText: {
        color: '#8892b0',
        fontSize: 14,
    },
});
