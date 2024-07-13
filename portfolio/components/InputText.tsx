import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

interface InputTextProps {
    text: string;
    setText: (text: string) => void;
    style?: any;
    textStyle?: any;
    caretCharacter?: string;
    showCaret?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
                                                 text,
                                                 setText,
                                                 style,
                                                 textStyle,
                                                 caretCharacter = '$',
                                                 showCaret = true,
                                             }) => {
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const displayText = cursorVisible ? text + '_' : text;

    return (
        <View style={[styles.container, style]}>
            {showCaret && <Text style={[styles.outputCaret, textStyle]}>{caretCharacter}</Text>}
            <TextInput
                style={[styles.hiddenInput, textStyle]}
                value={text}
                onChangeText={setText}
                autoFocus
            />
            <Text style={textStyle}>{displayText}</Text>
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
