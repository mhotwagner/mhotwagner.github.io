import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TypedTextProps {
    text: string;
    style?: any;
    textStyle?: any
    delay?: number;
    speed?: number;
    caretCharacter?: string;
}

const TypedText: React.FC<TypedTextProps> = ({ text, style, textStyle, delay = 0, speed = 100, caretCharacter = '$'}) => {
    const [displayedText, setDisplayedText] = useState(' ');
    const [showCaret, setShowCaret] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowCaret(true);
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
    }, [text, delay, speed]);

    return (
        <View style={[styles.container, style]}>
            { showCaret && <Text style={[styles.outputCaret, textStyle]}>{caretCharacter}</Text> }
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
        transform: "translateY(-1.25px)"
    },
});

export default TypedText;
