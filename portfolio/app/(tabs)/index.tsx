import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";

const moveMouseGlow = (e: any) => { }

export default function Home() {
    const [mouseGlowPosition, setMouseGlowPosition] = useState({ x: 0, y: 0 });
    const [topFadeMouseGlowPosition, setTopFadeMouseGlowPosition] = useState({ x: 0, y: 0 });
    const [isSmallScreen, setIsSmallScreen] = useState(Dimensions.get('window').width < 1000);
    const [isVerySmallScreen, setIsVerySmallScreen] = useState(Dimensions.get('window').width < 768);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const updateLayout = () => {
            setIsSmallScreen(Dimensions.get('window').width < 1000);
        };

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            // @ts-ignore
            Dimensions.removeEventListener('change', updateLayout);
        };
    }, []);

    const moveMouseGlow = (e: any) => {
        const x = e.clientX - 300;
        const y = e.clientY - 300;
        setMouseGlowPosition({ x, y });
        const topFade = document.getElementById('topFade');
        if (topFade) {
            const topFadeRect = topFade.getBoundingClientRect();
            const topFadeX = e.clientX - topFadeRect.left - 300;
            const topFadeY = e.clientY - topFadeRect.top - 300;
            setTopFadeMouseGlowPosition({ x: topFadeX, y: topFadeY })
        }
    }

    return (
        <View style={styles.outerContainer} onPointerMove={moveMouseGlow}>
            <View style={styles.background}>
                { !isSmallScreen && <View style={[styles.mouseGlow as any, { left: mouseGlowPosition.x, top: mouseGlowPosition.y }]} /> }
            </View>
            <View style={[styles.pageContainer, isSmallScreen && styles.pageContainerSmall]}>
                <View style={[styles.headerWrapper, isSmallScreen && styles.headerWrapperSmall]}>
                    <Header
                        style={styles.header}
                        isSmallScreen={isSmallScreen}
                        isVerySmallScreen={isVerySmallScreen}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                </View>
                <View style={[styles.contentWrapper, isSmallScreen && styles.contentWrapperSmall]}>
                    <ScrollView
                        contentContainerStyle={[styles.contentContainer, isSmallScreen && styles.contentContainerSmall]}
                        showsVerticalScrollIndicator={false}
                    >
                        { !isSmallScreen && <View id="spacer" style={styles.spacer} /> }
                        <View id="about" style={[styles.section, isSmallScreen && styles.sectionSmall]}>
                            <About isSmallScreen={isSmallScreen} />
                        </View>
                        <View style={styles.hr} />
                        <View id="resume" style={[styles.section, isSmallScreen && styles.sectionSmall]}>
                            <Resume setInputValue={setInputValue} />
                        </View>
                        <View style={styles.hr} />
                        <View id="projects" style={[styles.section, isSmallScreen && styles.sectionSmall]}>
                            <Projects />
                        </View>
                    </ScrollView>
                </View>
                {isSmallScreen && <Footer style={[styles.footer, styles.footerSmall]} />}
            </View>
            {!isSmallScreen && <Footer style={[styles.footer, isSmallScreen && styles.footerSmall]} />}
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
        overflow: 'hidden',
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
    pageContainerSmall: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
    },
    headerWrapper: {
        marginTop: 100,
        alignItems: 'flex-end',
        flexShrink: 1
    },
    headerWrapperSmall: {
        marginTop: 0,
        alignItems: 'center',
        width: '100%',
    },
    header: {
        paddingRight: 20,
    },
    contentWrapper: {
        alignItems: 'center',
        height: "95%",
        maxWidth: 600,
    },
    contentWrapperSmall: {
        maxWidth: 'auto',
        // width: '80%',
        // height: 800,
        paddingHorizontal: 20,
        // paddingTop: 60,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        flexShrink: 1,
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
        height: '100%',
    },
    contentContainerSmall: {
        alignItems: 'stretch',
        alignSelf: 'center',
        width:'90%',
    },
    footer: {
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    footerSmall: {
        marginTop: 20,
        width: 'auto',
    },
    section: {
        marginVertical: 50,
    },
    sectionSmall: {
        marginVertical: 20,
    },
    spacer: {
        height: 100,
    },
    hr: {
        width: '100%',
        height: 1,
        backgroundColor: '#00a86b',
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
