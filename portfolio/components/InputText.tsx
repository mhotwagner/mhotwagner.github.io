import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

interface InputTextProps {
    text: string;
    setText: (text: string) => void;
    onSubmit: () => void;
    style?: any;
    textStyle?: any;
    caretCharacter?: string;
    showCaret?: boolean;
    delay?: number;
    noDelay?: boolean;
    noType?: boolean;
    speed?: number;
}

const InputText: React.FC<InputTextProps> = ({
                                                 text,
                                                 setText,
                                                 onSubmit,
                                                 style,
                                                 textStyle,
                                                 caretCharacter = '$',
                                                 showCaret = true,
                                                 delay,
                                                 noDelay,
                                                 noType = false,
                                                 speed = 25
                                             }) => {
    const [visible, setVisible] = useState(!delay);
    const [cursorVisible, setCursorVisible] = useState(true);
    const [displayedText, setDisplayedText] = useState('');
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        console.log(delay)
        if (noType || !delay) {
            setCursorVisible(true);
            setVisible(true);
            setDisplayedText(text);
        } else if (delay) {
            const timeout = setTimeout(() => setVisible(true), delay);
            return () => clearTimeout(timeout);
        } else {
            setVisible(true);
        }
    }, [setVisible, setCursorVisible, setDisplayedText, noType, delay]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (visible && !noType) {
            let index = 0;
            const interval = setInterval(() => {
                if (index < text.length + 1) {
                    setDisplayedText((text.slice(0, index)));
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, speed);
            return () => clearInterval(interval);
        } else {
            setDisplayedText(text);
        }
    }, [text, visible, noType, speed]);
    useEffect(() => {
        setDisplayText(cursorVisible ? displayedText + '_' : displayedText);
    }, [setDisplayText, cursorVisible, displayedText, caretCharacter]);
    //
    return (
        <View style={[styles.container, style]}>
            {visible && showCaret && <Text style={[styles.outputCaret, textStyle]}>{caretCharacter}</Text>}
            <TextInput
                id="hiddenInput"
                style={[styles.hiddenInput, textStyle]}
                value={text}
                // onChangeText={setText}
                // onSubmitEditing={onSubmit}
                onPressIn={() => setText('')}
                // autoFocus
            />
            <Text
                style={textStyle}
                onPress={() => setText('')}
            >
                {noType ? (visible ? displayText : ' ') : visible ? displayText : ' '}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    outputCaret: {
        marginRight: 10,
    },
    hiddenInput: {
        position: 'absolute',
        opacity: 0,
    },
});

export default InputText;
