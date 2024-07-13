import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import TypedText from '@/components/TypedText';

interface NavItemProps {
    children: React.ReactNode;
    name: string;
    style?: any;
    delay?: number;
    onPress?: () => void;
}

export default function NavItem({ children, name, style, delay = 0, onPress }: NavItemProps) {
    const fullText = children?.toString() || '';
    const [hovering, setHovering] = React.useState(false);

    return (
        <Pressable
            onPress={onPress}
            onHoverIn={() => setHovering(true)}
            onHoverOut={() => setHovering(false)}
        >
            <Text style={[styles.navItem, style]}>
                <TypedText textStyle={styles.terminalOutputText} text={"/" + fullText} delay={delay} caretCharacter="->" speed={25} useCursor={false}/>
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
});
