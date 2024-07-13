import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TypedTextProps {
    text: string;
    style?: any;
    textStyle?: any
    delay?: number;
    speed?: number;
    caretCharacter?: string;
    useCursor?: boolean;
    blinkCursor?: boolean;
}

const TypedText: React.FC<TypedTextProps> = (
    {
        text,
        style,
        textStyle,
        delay = 0,
        speed = 100,
        caretCharacter = '$',
        useCursor = true,
        // blinkCursor = false,
    }) => {
    const [displayedText, setDisplayedText] = useState(' ');
    const [showCaret, setShowCaret] = useState(false);
    // const [cursorVisible, setCursorVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowCaret(true);
            let index = 0;
            const interval = setInterval(() => {
                if (useCursor && index < text.length) {
                    setDisplayedText(text.slice(0, index) + '_');
                } else {
                    setDisplayedText(text.slice(0, index));
                }
                index++;
                if (index === text.length + 1) {
                    clearInterval(interval);
                }
            }, speed);
           // console.log("here?")
           //  if (blinkCursor) {
           //      const cursorInterval = setInterval(() => {
           //          setCursorVisible(!cursorVisible);
           //          console.log(cursorVisible);
           //          setDisplayedText(cursorVisible ? text +  '_' : text);
           //      }, 750);
           //      return () => clearInterval(cursorInterval);
           //  }
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay, speed, useCursor]);

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
        // transform: "translateY(-1.25px)"
    },
});

export default TypedText;
