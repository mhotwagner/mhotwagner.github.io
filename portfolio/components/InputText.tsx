import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

interface InputTextProps {
    text: string;
    setText: (text: string) => void;
    style?: any;
    textStyle?: any;
    caretCharacter?: string;
    showCaret?: boolean;
    delay?: number;
}

const InputText: React.FC<InputTextProps> = ({
                                                 text,
                                                 setText,
                                                 style,
                                                 textStyle,
                                                 caretCharacter = '$',
                                                 showCaret = true,
                                                 delay,
                                             }) => {
    const [visible, setVisible] = useState(!delay);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        if (delay) {
            console.log('hereee')
            console.log(delay)
            console.log(visible)
            const timeout = setTimeout(() => setVisible(true), delay);
            return () => clearTimeout(timeout);
        }
    }, [setVisible]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const displayText = cursorVisible ? text + '_' : text;

    return (
        <View style={[styles.container, style]}>
                {visible && showCaret && <Text style={[styles.outputCaret, textStyle]}>{caretCharacter}</Text>}
                <TextInput
                    style={[styles.hiddenInput, textStyle]}
                    value={text}
                    onChangeText={setText}
                    autoFocus
                />
            <Text style={textStyle}>{visible ? displayText : ' '}</Text>
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
