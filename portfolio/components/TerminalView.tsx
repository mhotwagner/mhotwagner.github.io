import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TerminalViewProps {
    children: React.ReactNode;
    title?: string;
}

const TerminalView: React.FC<TerminalViewProps> = ({ children, title = 'Terminal' }) => {
    return (
        <View style={styles.terminalContainer}>
            <View style={styles.terminalHeader}>
                <Text style={styles.terminalTitle}>{title}</Text>
                <View style={styles.trafficLights}>
                    <View style={[styles.light, styles.red]} />
                    <View style={[styles.light, styles.yellow]} />
                    <View style={[styles.light, styles.green]} />
                </View>
            </View>
            <View style={styles.terminalScreen}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    terminalContainer: {
        width: '90%',
        marginVertical: 20,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#2d2d2d',
        alignSelf: 'center',
    },
    terminalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#1d1d1d',
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    trafficLights: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    light: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 2,
    },
    red: {
        backgroundColor: '#ff5f56',
    },
    yellow: {
        backgroundColor: '#ffbd2e',
    },
    green: {
        backgroundColor: '#27c93f',
    },
    terminalTitle: {
        color: '#c5c8c6',
        fontSize: 14,
        fontFamily: 'Courier New',
    },
    terminalScreen: {
        padding: 10,
        minHeight: 200,
        backgroundColor: '#1d1f21',
    },
});

export default TerminalView;
