import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface TypedTextProps {
    text: string;
    style?: any;
    textStyle?: any;
    caretStyle?: any;
    delay?: number;
    speed?: number;
    caretCharacter?: string;
    showCaret?: boolean;
    noType?: boolean;
}

const TypedText: React.FC<TypedTextProps> = ({
                                                 text,
                                                 style,
                                                 textStyle,
                                                 caretStyle,
                                                 delay = 0,
                                                 speed = 100,
                                                 caretCharacter = '$',
                                                 showCaret = true,
                                                 noType = false,
                                             }) => {
    const [displayedText, setDisplayedText] = useState(noType ? text : ' ');
    const [caretVisible, setCaretVisible] = useState(noType);

    if (caretStyle === undefined) {
        caretStyle = textStyle;
    }

    useEffect(() => {
        if (noType) {
            setCaretVisible(true);
        } else {
            const timeout = setTimeout(() => {
                setCaretVisible(true);
                let index = 0;
                const interval = setInterval(() => {
                    setDisplayedText(text.slice(0, index));
                    index++;
                    if (index === text.length + 1) {
                        clearInterval(interval);
                    }
                }, speed);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [text, delay, speed, noType]);

    if (noType) {
        return (
            <View style={[styles.container, style]}>
                {showCaret && caretVisible && <Text style={[styles.outputCaret, caretStyle]}>{caretCharacter}</Text>}
                <Text style={textStyle}>{text}</Text>
            </View>
        )
    }
    return (
        <View style={[styles.container, style]}>
            {showCaret && caretVisible && <Text style={[styles.outputCaret, caretStyle]}>{caretCharacter}</Text>}
            <Text style={textStyle}>{displayedText}</Text>
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
        // transform: "translateY(-1.25px)"
    },
});

export default TypedText;
