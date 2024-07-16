import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { FontAwesome } from '@expo/vector-icons';

interface ContactLinksProps {
    style?: any;
    setInputValue?: (text: string) => void;

}

export default function ContactLinks({ style, setInputValue }: ContactLinksProps) {
    const contactLinks = [
        { icon: 'envelope', action: () => copyToClipboard('mhotwagner@gmail.com', 'email copied to clipboard') },
        { icon: 'phone', action: () => copyToClipboard('1-231-680-0608', 'phone copied to clipboard') },
        { icon: 'github', url: 'https://github.com/mhotwagner' },
        { icon: 'linkedin', url: 'https://www.linkedin.com/in/mhotwagner/' },
    ];

    const copyToClipboard = (text: string, message: string) => {
        Clipboard.setString(text);
        // Alert.alert('Copied to Clipboard', text);
        setInputValue && setInputValue(message);
    };

    return (
        <View style={[styles.container, style]}>
            <View style={styles.contactLinks}>
                {contactLinks.map((link, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => link.action ? link.action() : Linking.openURL(link.url)}
                        style={styles.contactLink}
                    >
                        <FontAwesome name={link.icon} size={20} color="#00a86b" />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
    },
    contactLinks: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 10,
    },
    contactLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 5,
    },
});
