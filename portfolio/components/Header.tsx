import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import TypedText from '@/components/TypedText';
import NavItem from '@/components/NavItem';
import InputText from "@/components/InputText";
import ContactLinks from '@/components/ContactLinks';

interface HeaderProps {
    style?: any;
    isSmallScreen: boolean;
    isVerySmallScreen: boolean;
    inputValue: string;
    setInputValue: (value: string) => void;
}

const INPUT_TYPE_SPEED = 25;
const OUTPUT_TYPE_SPEED = 25;
const DELAY_OFFSET = 750;


export default function Header({ style, isSmallScreen, isVerySmallScreen, inputValue, setInputValue }: HeaderProps) {
    const [hasVisitedBefore, setHasVisitedBefore] = useState(false);

    useEffect(() => {
        const visitedBefore = localStorage.getItem('hasVisitedBefore');
        if (!visitedBefore) {
            localStorage.setItem('hasVisitedBefore', 'true');
            setHasVisitedBefore(false);
        } else {
            setHasVisitedBefore(true);
        }
        // print('hasVisitedBefore: ' + hasVisitedBefore)
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
                style={[styles.terminalInput, styles.standardCursor]}
                textStyle={styles.terminalInputText}
                delay={delay}
                speed={INPUT_TYPE_SPEED}
                noType={hasVisitedBefore}
            />}
            <TypedText
                text="Michael Hotwagner"
                style={[styles.terminalOutput, styles.standardCursor]}
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
                style={[styles.terminalInput, styles.standardCursor]}
                textStyle={styles.terminalInputText}
                delay={delay += DELAY_OFFSET}
                speed={INPUT_TYPE_SPEED}
                noType={hasVisitedBefore}
            />}
            { !isVerySmallScreen && <TypedText
                text="Fullstack Software Engineer"
                style={[styles.terminalOutput, styles.standardCursor]}
                textStyle={[styles.terminalOutputText, styles.title]}
                showCaret={!isSmallScreen}
                caretStyle={styles.terminalOutputText}
                delay={delay += DELAY_OFFSET}
                speed={25}
                caretCharacter="->"
                noType={hasVisitedBefore}
            /> }
            { !isSmallScreen && <TypedText
                text="ls /"
                style={[styles.terminalInput, styles.standardCursor]}
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
            <InputText
                text={inputValue}
                setText={setInputValue}
                onSubmit={handleInputSubmit}
                style={[styles.terminalInput, styles.inputText, isSmallScreen && styles.inputTextSmall]}
                textStyle={[styles.terminalInputText, isSmallScreen && styles.terminalInputSmall]}
                speed={25}
                delay={ hasVisitedBefore ? 0 : delay += DELAY_OFFSET}
            />
            <ContactLinks
                style={[styles.contactLinks, isSmallScreen && styles.contactLinksSmall ]}
                delay={ delay += DELAY_OFFSET}
                hasVisitedBefore={hasVisitedBefore}
                setInputValue={setInputValue}
            />
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
        paddingBottom: 10,
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
    inputTextSmall: {
        marginTop: 10,
        width: '50%',
        maxWidth: 300,
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
    terminalInputSmall: {
        color: "rgb(102, 255, 102)",
        fontWeight: 700,
    },
    terminalOutput: {
        color: "#00a86b",
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 15
    },
    standardCursor: {
        // @ts-ignore
        cursor: "default",
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
        marginTop: 10,
    },
    contactLinks: {
        marginTop: 20,
    },
    contactLinksSmall: {
        marginTop: 0,
        marginBottom: 10,
    }
});
