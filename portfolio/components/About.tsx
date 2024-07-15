import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function About() {
    return (
        <View>
            {/*<Text style={styles.title}>About Me</Text>*/}
            <Text style={styles.description}>
                I'm a fullstack software engineer with over a decade of experience designing,
                developing, and implementing functional and elegant solutions to interesting problems.
                With expertise spanning the stack, from infrastructure through the backend up to the
                frontend, I have a proven ability to work with clients from design through development
                and implementation to efficiently deliver excellent products.
            </Text>
            <Text style={styles.description}>
                My story started in 1984, in Muskegon, Michigan, the perfect dichotomy of glorious,
                beach-based summers and crisp, snowy winters. Raised by a family of teachers and
                engineers, my love of learning was matched only by my need to tinker. I frequently
                disassembled the family phones, VCRs, and TVs. When our first computer finally arrived,
                I took that apart too, but I quickly learned that it was more fun when it was put
                together. By the time I wrote my first "game" of IF and GOTO statements in BASIC,
                I was hooked.
            </Text>
            <Text style={styles.description}>
                My love of learning has never been limited to technology. I've always wanted to know
                everything I could about the world around me, and the
                people that live in it. I began studying Spanish in middle school, traveled abroad to
                cement the skill, and that same love for the wider world lead me to a degree in
                Political Science, with a focus on International Relations. When I moved to New York
                after college, I found my first home in the City teaching Spanish. I also discovered
                that my love of tinkering and building (or "engineering" as call it now) was my
                real passion, and that if I worked hard, I could make a career out of it.
            </Text>
            <Text style={styles.description}>
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
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 20,
        color: '#ccd6f6',
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        color: '#8892b0',
        lineHeight: 24,
        marginBottom: 20,
    },
});
