import React, {useEffect} from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import TypedText from '@/components/TypedText';
import NavItem from '@/components/NavItem';
import InputText from "@/components/InputText";

interface HeaderProps {
    style?: any;
}

const INPUT_TYPE_SPEED = 25;
const OUTPUT_TYPE_SPEED = 25;
const DELAY_OFFSET = 750;

export default function Header({style}: HeaderProps) {
    const [inputValue, setInputValue] = React.useState('');
    // const [inputVisible, setInputVisible] = React.useState(false);
    const navItems = [
        {name: 'about', label: 'about'},
        {name: 'resume', label: 'resume'},
        {name: 'projects', label: 'projects'},
        {name: 'contact', label: 'contact'}
    ];

    const handleNavItemPress = (id: string) => {
        console.log(id)
        const element = document.getElementById(id);
        console.log(element)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            setInputValue('cd /' + id);
        }
    };

    const handleInputSubmit = () => {
        if (inputValue.slice(0, 3) === 'cd ') {
            const id = inputValue.slice(3);
            console.log(id)
            handleNavItemPress(id);
        }
    }

    let delay = 0;


    return (
        <View style={[styles.header, style]}>
            <TypedText text="whoami"
                       style={styles.terminalInput}
                       textStyle={styles.terminalInputText}
                       delay={delay}
                       speed={INPUT_TYPE_SPEED}/>
            <TypedText text="Michael Hotwagner"
                       style={[styles.terminalOutput, styles.questionCursor]}
                       textStyle={[styles.terminalOutputText, styles.name]}
                       caretStyle={styles.terminalOutputText}
                       delay={delay+=DELAY_OFFSET}
                       speed={25}
                       caretCharacter="->"
                       useCursor={false}/>
            <TypedText text="cat title"
                       style={styles.terminalInput}
                       textStyle={styles.terminalInputText}
                       delay={delay+=DELAY_OFFSET}
                       speed={INPUT_TYPE_SPEED}/>
            <TypedText text="Fullstack Software Engineer"
                       style={[styles.terminalOutput, styles.questionCursor]}
                       textStyle={[styles.terminalOutputText, styles.title]}
                       caretStyle={styles.terminalOutputText}
                       delay={delay+=DELAY_OFFSET}
                       speed={25}
                       caretCharacter="->"
                       useCursor={false}/>
            <TypedText text="ls /"
                       style={styles.terminalInput}
                       textStyle={styles.terminalInputText}
                       delay={delay+=DELAY_OFFSET}
                       speed={INPUT_TYPE_SPEED}/>
            {navItems.map((item, index) => (
                <NavItem
                    key={item.name}
                    name={item.name}
                    style={styles.terminalOutput}
                    delay={delay+=DELAY_OFFSET} onPress={() => handleNavItemPress(item.name)}
                    speed={25}
                >
                    {item.label}
                </NavItem>
            ))}
            <InputText
                text={inputValue}
                setText={setInputValue}
                onSubmit={handleInputSubmit}
                style={[styles.terminalInput, styles.inputText]}
                textStyle={styles.terminalInputText}
                delay={delay+=DELAY_OFFSET}/>
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
});
