import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const moveMouseGlow = (e: any) => {

}
export default function Home() {
    const [mouseGlowPosition, setMouseGlowPosition] = useState({x: 0, y: 0});
    const moveMouseGlow = (e: any) => {
        const x = e.clientX - 300;
        const y = e.clientY - 300;
        setMouseGlowPosition({x, y});
    }
    return (
        <View style={styles.outerContainer} onPointerMove={moveMouseGlow}>
            <View style={styles.background}>
                <View style={[styles.mouseGlow as any, {left: mouseGlowPosition.x, top: mouseGlowPosition.y}]}/>
            </View>
            <View style={styles.pageContainer}>
                <View style={styles.headerWrapper}>
                    <Header style={styles.header}/>
                </View>
                <View style={styles.contentWrapper}>
                    <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                        <View id="about" style={styles.section}>
                            <Text style={styles.title}>About</Text>
                            <Text style={styles.description}>
                                I'm a fullstack software engineer with over a decade of experience designing,
                                developing, and implementing functional and elegant solutions to interesting problems.
                                With expertise spanning the stack, from infrastructure through the backend up to the
                                frontend, I have a proven ability to work with clients from design through development
                                and implementation to efficiently deliver excellent products. Explore my projects,
                                experience, and skills to see how I can help bring your next big idea to life.
                            </Text>
                        </View>
                        <View id="resume" style={styles.section}>
                            <Text style={styles.title}>Resume</Text>
                            {/* 500 worlds of lorem ipsum*/}
                            <Text style={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec nisl
                                tincidunt accumsan. Nulla facilisi. Proin ut nunc nec nunc laoreet ultricies. Donec
                                scelerisque, nunc nec bibendum tincidunt, nunc lorem tincidunt ante, nec egestas
                                libero purus non nulla. Integer euismod, risus nec tincidunt suscipit, mi purus
                                ultricies nunc, vel ultricies elit purus nec nunc
                            </Text>
                        </View>
                        <View id="projects" style={styles.section}>
                            <Text style={styles.title}>Projects</Text>
                            {/* Add projects content here */}
                            <Text style={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec nisl
                                tincidunt accumsan. Nulla facilisi. Proin ut nunc nec nunc laoreet ultricies. Donec
                                scelerisque, nunc nec bibendum tincidunt, nunc lorem tincidunt ante, nec egestas
                                libero purus non nulla. Integer euismod, risus nec tincidunt suscipit, mi purus
                                ultricies nunc, vel ultricies elit purus nec nunc
                            </Text>
                        </View>
                        <View id="contact" style={styles.section}>
                            <Text style={styles.title}>Contact</Text>
                            {/* Add contact content here */}
                            <Text style={styles.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec nisl
                                tincidunt accumsan. Nulla facilisi. Proin ut nunc nec nunc laoreet ultricies. Donec
                                scelerisque, nunc nec bibendum tincidunt, nunc lorem tincidunt ante, nec egestas
                                libero purus non nulla. Integer euismod, risus nec tincidunt suscipit, mi purus
                                ultricies nunc, vel ultricies elit purus nec nunc
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <Footer style={styles.footer}/>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    background: {
        backgroundColor: '#0a192f',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    mouseGlow: {
        position: 'absolute',
        width: 600,
        height: 600,
        // @ts-ignore
        backgroundImage: "radial-gradient(rgba(128, 128, 128, .7) 0%, rgba(128, 128, 128, .1) 50%, rgba(128, 128, 128, 0) 75%)",
        opacity: 0.1,
        borderRadius: 100,
    },
    pageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    headerWrapper: {
        width: 400,
        alignItems: 'flex-end', // Aligns the headerWrapper to the right
        flexShrink: 1
    },
    header: {
        width: '100%',
        paddingRight: 20,
    },
    contentWrapper: {
        flexBasis: '50%',
        alignItems: 'center',
        height: "40%",
    },
    contentContainer: {
        flexBasis: '20%',
        flexShrink: 1,
        flexGrow: 0,
        padding: 20,
        alignItems: 'center',
    },
    footer: {
        // backgroundColor: 'rgba(10, 25, 47, 128)',
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    section: {
        maxWidth: 800,
        marginVertical: 20,
    },
    description: {
        fontSize: 16,
        color: '#8892b0',
        lineHeight: 24,
    },
    title: {
        fontSize: 18,
        color: '#ccd6f6',
        marginBottom: 10,
    },
});
