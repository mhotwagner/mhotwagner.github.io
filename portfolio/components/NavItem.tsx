import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import TypedText from '@/components/TypedText';

interface NavItemProps {
    children: React.ReactNode;
    name: string;
    style?: any;
    delay?: number;
    speed?: number;
    onPress?: () => void;
    noType?: boolean;
    isSmallScreen?: boolean;
}

export default function NavItem({ children, name, style, delay = 0, speed=50, onPress, noType, isSmallScreen }: NavItemProps) {
    const fullText = children?.toString() || '';
    const [hovering, setHovering] = React.useState(false);

    return (
        <Pressable
            onPress={onPress}
            onHoverIn={() => setHovering(true)}
            onHoverOut={() => setHovering(false)}
        >
            <Text style={[styles.navItem, style]}>
                <TypedText
                    textStyle={styles.terminalOutputText}
                    text={"/" + fullText}
                    delay={delay}
                    caretCharacter={ isSmallScreen ? hovering ? '-->' : ' ->' : hovering ? '-->' : '->'}
                    speed={speed}
                    useCursor={false}
                    noType={noType}
                />
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    navItem: {
        color: '#8892b0',
        fontSize: 14,
    },
    terminalOutputText: {
        color: "#00a86b",
        fontFamily: "Roboto Mono, monospace",
        fontSize: 14,
    },
    hoverOverlay: {
        color: "#f00 !important",
        width: 200,
    },
    mask: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 0,
        //@ts-ignore
        transition: 'width 0.5s',
    },
    maskHover: {
        width: '100%',
    }
});
