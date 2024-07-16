import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const projects = [
    {
        id: 'charitotes',
        name: "Charitotes.com",
        company: "for Protocol",
        description: "Promotional Site for Charitotes charitable product",
        technologies: ["HTML", "CSS", "Vanilla JS"],
        thumbnail: require('@/assets/images/charitotes.gif')
    },
    {
        id: 'fluent-city-v1',
        name: "Fluent City V1",
        company: "for Fluent City",
        description: "Language class booking site",
        technologies: ["HTML", "CSS", "JavaScript", "PHP"],
        thumbnail: require('@/assets/images/fluent-city-v1.png')
    },
    {
        id: 'fluent-city-v2',
        name: "Fluent City V2",
        company: "for Fluent City",
        description: "Language class booking site",
        technologies: ["Python", "Django", "Postgres", "Heroku", "CSS", "JavaScript", "HTML"],
        thumbnail: require('@/assets/images/fluent-city-v2.png')
    },
    {
        id: 'voxy',
        name: "Voxy",
        company: "for Voxy",
        description: "Language learning platform",
        technologies: ["Python", "Django", "Postgres", "Heroku", "CSS", "JavaScript", "HTML", "Backbone", "iOS", "Android"],
        thumbnail: require('@/assets/images/voxy.png')
    },
    {
        id: 'wework',
        name: "WeWork.com",
        company: "for WeWork",
        description: "Internationalization platform and tools",
        technologies: ["i18n", "Python", "Django", "Postgres", "Heroku", "React", "iOS", "Android"],
        thumbnail: require('@/assets/images/wework.png')
    },
    {
        id: 'vettery',
        name: "Vettery.com",
        company: "for Vettery/Hired",
        description: "Job matching platform Candidate App",
        technologies: ["JavaScript", "React", "Redux", "Node", "CSS", "HTML"],
        thumbnail: require('@/assets/images/vettery.png')
    },
    {
        id: 'hired-assessments',
        name: "Hired Assessments",
        company: "for Vettery/Hired",
        description: "Candidate live-coding assessment platform",
        technologies: ["Django", "Postgres", "AWS (RDS, Lambda)", "Docker", "GraphQL", "Python"],
        thumbnail: require('@/assets/images/hired-assessments.png')
    },
];

export default function Projects() {
    const isSmallScreen = Dimensions.get('window').width < 768;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projects</Text>
            {projects.map((project, index) => (
                <View key={index} style={styles.project}>
                    <Image
                        source={project.thumbnail || 'http://via.placeholder.com/640x360'}
                        style={[styles.thumbnail, isSmallScreen ? styles.thumbnailSmall : styles.thumbnailLarge]}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.projectName}>{project.name}</Text>
                        <Text style={styles.company}>{project.company}</Text>
                        <Text style={styles.description}>{project.description}</Text>
                        <View style={styles.techStackContainer}>
                            <View style={styles.techStack}>
                                {project.technologies.map((tech, idx) => (
                                    <View key={idx} style={styles.techPill}>
                                        <Text style={styles.techPillText}>{tech}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                        {/*<Text style={styles.details}>*/}
                        {/*    Developed a {project.description.toLowerCase()} using {project.technologies.join(', ')}.*/}
                        {/*</Text>*/}
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        opacity: 0.75,
    },
    title: {
        fontSize: 28,
        color: '#ccd6f6',
        marginBottom: 20,
        textAlign: 'center',
    },
    project: {
        marginBottom: 50,
        alignItems: 'center',
        width: '100%',
    },
    thumbnail: {
        resizeMode: 'cover',
        marginBottom: 15,
        width: '100%',
        // borderRadius: 10,
    },
    thumbnailLarge: {
        height: 200,
    },
    thumbnailSmall: {
        height: 150,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    projectName: {
        fontSize: 22,
        color: '#64ffda',
        marginBottom: 5,
    },
    company: {
        fontSize: 18,
        color: '#8892b0',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#8892b0',
        marginBottom: 15,
        textAlign: 'center',
    },
    techStackContainer: {
        marginBottom: 15,
        width: '100%',
        alignItems: 'center',
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    techPill: {
        backgroundColor: '#233554',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    techPillText: {
        fontSize: 14,
        color: '#64ffda',
    },
    details: {
        fontSize: 16,
        color: '#8892b0',
        lineHeight: 24,
        textAlign: 'center',
    },
});
