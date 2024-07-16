import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";

const moveMouseGlow = (e: any) => {}

export default function Home() {
    const [mouseGlowPosition, setMouseGlowPosition] = useState({x: 0, y: 0});
    const [topFadeMouseGlowPosition, setTopFadeMouseGlowPosition] = useState({x: 0, y: 0});
    const moveMouseGlow = (e: any) => {
        const x = e.clientX - 300;
        const y = e.clientY - 300;
        setMouseGlowPosition({x, y});
        const topFade = document.getElementById('topFade');
        if (topFade) {
            const topFadeRect = topFade.getBoundingClientRect();
            const topFadeX = e.clientX - topFadeRect.left - 300;
            const topFadeY = e.clientY - topFadeRect.top - 300;
            setTopFadeMouseGlowPosition({x: topFadeX, y: topFadeY})
        }
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
                    <ScrollView
                        contentContainerStyle={styles.contentContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <View id="spacer" style={styles.spacer}/>
                        <View id="about" style={styles.section}>
                            <About />
                        </View>
                        <View id="resume" style={styles.section}>
                            <Resume />
                        </View>
                        <View id="projects" style={styles.section}>
                            <Projects />
                        </View>
                        <View id="contact" style={styles.section}>
                            <Text style={styles.title}>Contact</Text>
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
        opacity: 0.2,
        borderRadius: 100,
    },
    pageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
    },
    headerWrapper: {
        marginTop: 100,
        // width: 400,
        alignItems: 'flex-end',
        flexShrink: 1
    },
    header: {
        // width: '100%',
        paddingRight: 20,
    },
    contentWrapper: {
        alignItems: 'center',
        height: "95%",
        maxWidth: 600,
    },
    contentContainer: {
        flexShrink: 1,
        flexGrow: 0,
        padding: 20,
        alignItems: 'center',
        overflow: 'visible'
    },
    footer: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    section: {
        // maxWidth: 600,
        marginVertical: 50,
    },
    spacer: {
        height: 100,
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
