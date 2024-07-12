import React from 'react';
import { View, StyleSheet } from 'react-native';
import TypedText from '@/components/TypedText';
import NavItem from '@/components/NavItem';

interface HeaderProps {
    style?: any;
}

export default function Header({ style }: HeaderProps) {
    const navItems = [
        {name: 'about', label: 'About'},
        { name: 'resume', label: 'Resume' },
        { name: 'projects', label: 'Projects' },
        { name: 'contact', label: 'Contact' }
    ];

    return (
        <View style={[styles.header, style]}>
            <TypedText text="whoami" style={styles.terminalInput} textStyle={styles.terminalInputText} delay={0} />
            <TypedText text="Michael Hotwagner" style={styles.terminalOutput} textStyle={styles.terminalOutputText} delay={1000} speed={25} caretCharacter=">" />
            <TypedText text="cat title" style={styles.terminalInput} textStyle={styles.terminalInputText} delay={2000} />
            <TypedText text="Fullstack Software Engineer" style={styles.terminalOutput} textStyle={styles.terminalOutputText} delay={3000} speed={25} caretCharacter=">" />
            <TypedText text="ls /" style={styles.terminalInput} textStyle={styles.terminalInputText} delay={4000} />
            {navItems.map((item, index) => (
                <NavItem key={item.name} name={item.name} style={styles.terminalOutput} delay={5000 + index * 1000}>
                    {item.label}
                </NavItem>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    terminalInput: {
        fontFamily: 'courier new, monospace',
        color: '#39ff14',
        fontSize: 12,
        // marginLef/**/t: -10,
        marginBottom: 4,
    },
    terminalInputText: {
        color: '#39ff14',
        fontFamily: 'courier new, monospace',
    },
    terminalOutput: {
        color: "#00a86b",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 15
    },
    terminalOutputText: {
        color: "#00a86b",
        fontFamily: "Roboto Mono, monospace",
        fontSize: 14,
    },
    // indented: {
    //     marginRight: 10,
    // }
});
