import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import TypedText from '@/components/TypedText';
import NavItem from '@/components/NavItem';
import InputText from "@/components/InputText";

interface HeaderProps {
    style?: any;
}

export default function Header({ style }: HeaderProps) {
    const [inputValue, setInputValue] = React.useState('');
    const navItems = [
        { name: 'about', label: 'about' },
        { name: 'resume', label: 'resume' },
        { name: 'projects', label: 'projects' },
        { name: 'contact', label: 'contact' }
    ];

    const handleNavItemPress = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setInputValue('cd /' + id);
        }
    };

    return (
        <View style={[styles.header, style]}>
            <TypedText text="whoami" style={styles.terminalInput} textStyle={styles.terminalInputText} delay={0} />
            <TypedText text="Michael Hotwagner" style={styles.terminalOutput} textStyle={styles.terminalOutputText} delay={1000} speed={25} caretCharacter="->" useCursor={false} />
            <TypedText text="cat title" style={styles.terminalInput} textStyle={styles.terminalInputText} delay={2000} />
            <TypedText text="Fullstack Software Engineer" style={styles.terminalOutput} textStyle={styles.terminalOutputText} delay={3000} speed={25} caretCharacter="->" useCursor={false} />
            <TypedText text="ls /" style={styles.terminalInput} textStyle={styles.terminalInputText} delay={4000} />
            {navItems.map((item, index) => (
                <NavItem key={item.name} name={item.name} style={styles.terminalOutput} delay={5000 + index * 500} onPress={() => handleNavItemPress(item.name)}>
                    {item.label}
                </NavItem>
            ))}
            <InputText text={inputValue} setText={setInputValue} style={[styles.terminalInput, styles.inputText]} textStyle={styles.terminalInputText} />
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
    inputText: {
        marginTop: 20,
    },
    terminalInput: {
        fontFamily: 'vt323, courier new, monospace',
        color: '#39ff14',
        fontSize: 12,
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
});
