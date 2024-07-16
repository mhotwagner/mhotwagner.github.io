import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import TypedText from '@/components/TypedText';
import NavItem from '@/components/NavItem';
import InputText from "@/components/InputText";
import ContactLinks from '@/components/ContactLinks';

interface HeaderProps {
    style?: any;
    isSmallScreen?: boolean;
}

const INPUT_TYPE_SPEED = 25;
const OUTPUT_TYPE_SPEED = 25;
const DELAY_OFFSET = 750;

const print = (s: string) => console.log(s);

export default function Header({ style, isSmallScreen }: HeaderProps) {
    const [inputValue, setInputValue] = React.useState('');
    const [hasVisitedBefore, setHasVisitedBefore] = useState(false);

    useEffect(() => {
        const visitedBefore = localStorage.getItem('hasVisitedBefore');
        if (!visitedBefore) {
            localStorage.setItem('hasVisitedBefore', 'true');
            setHasVisitedBefore(false);
        } else {
            setHasVisitedBefore(true);
        }
        print('hasVisitedBefore: ' + hasVisitedBefore)
    }, [hasVisitedBefore, setHasVisitedBefore]);

    const navItems = [
        { name: 'about', label: 'about' },
        { name: 'resume', label: 'resume' },
        { name: 'projects', label: 'projects' },
        // { name: 'contact', label: 'contact' }
    ];

    const handleNavItemPress = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setInputValue('cd /' + id);
        }
    };

    const handleInputSubmit = () => {
        if (inputValue.slice(0, 3) === 'cd ') {
            const id = inputValue.slice(3);
            handleNavItemPress(id);
        }
    }

    let delay = 0;

    return (
        <View style={[styles.header, style, isSmallScreen && styles.headerSmall]}>
            { !isSmallScreen && <TypedText
                text="whoami"
                style={styles.terminalInput}
                textStyle={styles.terminalInputText}
                delay={delay}
                speed={INPUT_TYPE_SPEED}
                noType={hasVisitedBefore}
            />}
            <TypedText
                text="Michael Hotwagner"
                style={[styles.terminalOutput, styles.questionCursor]}
                textStyle={[styles.terminalOutputText, styles.name]}
                showCaret={!isSmallScreen}
                caretStyle={styles.terminalOutputText}
                delay={delay += DELAY_OFFSET}
                speed={25}
                caretCharacter="->"
                noType={hasVisitedBefore}
            />
            { !isSmallScreen && <TypedText
                text="cat title"
                style={styles.terminalInput}
                textStyle={styles.terminalInputText}
                delay={delay += DELAY_OFFSET}
                speed={INPUT_TYPE_SPEED}
                noType={hasVisitedBefore}
            />}
            <TypedText
                text="Fullstack Software Engineer"
                style={[styles.terminalOutput, styles.questionCursor]}
                textStyle={[styles.terminalOutputText, styles.title]}
                showCaret={!isSmallScreen}
                caretStyle={styles.terminalOutputText}
                delay={delay += DELAY_OFFSET}
                speed={25}
                caretCharacter="->"
                noType={hasVisitedBefore}
            />
            { !isSmallScreen && <TypedText
                text="ls /"
                style={styles.terminalInput}
                textStyle={styles.terminalInputText}
                delay={delay += DELAY_OFFSET}
                speed={INPUT_TYPE_SPEED}
                noType={hasVisitedBefore}
            />}
            <View style={[styles.navItems, isSmallScreen && styles.navItemsSmall]}>
                {navItems.map((item, index) => (
                    <NavItem
                        key={item.name}
                        name={item.name}
                        style={styles.terminalOutput}
                        delay={delay += DELAY_OFFSET}
                        onPress={() => handleNavItemPress(item.name)}
                        speed={25}
                        noType={hasVisitedBefore}
                        isSmallScreen={isSmallScreen}
                    >
                        {item.label}
                    </NavItem>
                ))}
            </View>
            { !isSmallScreen && <InputText
                text={inputValue}
                setText={setInputValue}
                onSubmit={handleInputSubmit}
                style={[styles.terminalInput, styles.inputText]}
                textStyle={styles.terminalInputText}
                delay={delay += DELAY_OFFSET}
                noType={hasVisitedBefore}
            /> }
            <ContactLinks style={style.conisSmallScreen} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minWidth: 400,
    },
    headerSmall: {
        alignItems: 'center',
        minWidth: '100%',
    },
    name: {
        fontSize: 24,
        fontFamily: 'RobotoMonoBold, monospace'
    },
    title: {
        fontSize: 18,
        fontWeight: 700,
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
    questionCursor: {
        // @ts-ignore
        cursor: "help",
    },
    terminalOutputText: {
        color: "#00a86b",
        fontFamily: "Roboto Mono, monospace",
        fontSize: 14,
    },
    navItems: {
        flexWrap: 'wrap',
    },
    navItemsSmall: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    contactLinks: {
        marginTop: 20,
    }
});
