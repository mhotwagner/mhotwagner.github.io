import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AboutProps {
    isSmallScreen: boolean;
}

export default function About({ isSmallScreen }: AboutProps) {
    return (
        <View>
            <Text style={[styles.title, isSmallScreen && styles.titleSmall, {marginTop: 0}]}>Who is Michael Hotwagner?</Text>
            <Text style={[styles.description, isSmallScreen && styles.descriptionSmall]}>
                I'm a fullstack software engineer with over a decade of experience designing,
                developing, and implementing functional and elegant solutions to interesting problems.
                With expertise spanning the stack, from infrastructure through the backend up to the
                frontend, I have a proven ability to work with clients from design through development
                and implementation to efficiently deliver excellent products.
            </Text>
            <Text style={[styles.description, isSmallScreen && styles.descriptionSmall]}>
                My story started in Muskegon, Michigan. Raised by a family of teachers and
                engineers, my love of learning was matched only by my need to tinker (ie, disassemble
                everything I could get my hands on). When our first computer finally arrived,
                I took that apart too, but found it was more fun  put together. By the time
                I wrote my first "game" of IF and GOTO statements in BASIC, I was hooked.
            </Text>
            <Text style={[styles.description, isSmallScreen && styles.descriptionSmall]}>
                My love of learning has never been limited to technology. I've always wanted to know
                everything I could about the world around me, and the
                people that live in it. I began studying Spanish in middle school, traveled abroad to
                cement the skill, and that same love for the wider world led me to a degree in
                Political Science and International Relations. When I moved to New York, I found my
                first home in the City teaching Spanish. I also discovered that my love of tinkering
                and building (or "engineering" as I call it now) was my real passion, and that if I worked
                hard, I could make a career out of it.
            </Text>
            <Text style={[styles.description, isSmallScreen && styles.descriptionSmall]}>
                Fifteen years later, I've built many projects large and small, personal and professional,
                across industries with clients and partners around the globe. I love what I do, and I
                work hard to keep my core values of curiosity, collaboration, and respect for all people
                at the heart of my work. Please take some time to explore my projects, experience, and
                skills, and let me know if you think I can help bring your next big idea to life.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#ccd6f6',
        marginTop: 20,
        marginBottom: 20,
    },
    titleSmall: {
        // fontSize: 20,
        // marginTop: 10,
        // marginBottom: 10,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        color: '#ccd6f6',
        marginTop: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        color: '#8892b0',
        lineHeight: 24,
        marginBottom: 20,
    },
    descriptionSmall: {
        textAlign: 'center',
    }
});
