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
    noType?: boolean;
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
                                                 noType,
                                             }) => {
    const [visible, setVisible] = useState(!delay);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        if (noType) {
            setVisible(true);
        } else if (delay) {
            const timeout = setTimeout(() => setVisible(true), delay);
            return () => clearTimeout(timeout);
        } else {
            setVisible(true);
        }
    }, [setVisible, noType]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);


    const displayText = visible ? cursorVisible ? text + '_' : text : '';

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
            >{noType ? visible ? displayText : ' ' : displayText}</Text>
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
