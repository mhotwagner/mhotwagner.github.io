import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import TypedText from '@/components/TypedText';

interface NavItemProps {
    children: React.ReactNode;
    name: string;
    style?: any;
    delay?: number;
}

export default function NavItem({ children, name, style, delay = 0 }: NavItemProps) {
    const navigation = useNavigation();
    const fullText = children?.toString() || '';
    const [hovering, setHovering] = React.useState(false);

    return (
        <Pressable
            onPress={() => navigation.navigate(name)}
            onHoverIn={() => setHovering(true)}
            onHoverOut={() => setHovering(false)}
        >
            <Text style={[styles.navItem, style]}>
                {/*<Text style={styles.slash}>/</Text>*/}
                <TypedText textStyle={styles.terminalOutputText} text={fullText} delay={delay} caretCharacter="/" speed={25} />
            </Text>
            <View style={[styles.underline, hovering && styles.underlineHovered]} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    navItem: {
        color: '#8892b0',
        fontSize: 14,
        // padding: 10,
        // width: Dimensions.get('window').width / 3,
    },
    terminalOutputText: {
        color: "#00a86b",
        fontFamily: "Roboto Mono, monospace",
        fontSize: 14,
    },
    underline: {
        backgroundColor: '#8892b0',
        height: 2,
        width: 0,
        marginTop: 2,
        marginLeft: 15,
        transition: 'width 0.5s',
    },
    underlineHovered: {
        width: 100,
    }
});
