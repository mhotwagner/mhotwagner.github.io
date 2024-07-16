import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const projects = [
    {
        name: "Charitotes.com",
        company: "for Protocol",
        description: "Promotional Site for Charitotes charitable product",
        technologies: ["HTML", "CSS", "Vanilla JS"],
        thumbnail: require('@/assets/images/charitotes.gif')
    },
    {
        name: "Fluent City V1",
        company: "for Fluent City",
        description: "Language class booking site",
        technologies: ["HTML", "CSS", "JavaScript", "PHP"],
        thumbnail: require('@/assets/images/fluent-city-v1.png')
    },
    {
        name: "Fluent City V2",
        company: "for Fluent City",
        description: "Language class booking site",
        technologies: ["Python", "Django", "Postgres", "Heroku", "CSS", "JavaScript", "HTML"],
        thumbnail: require('@/assets/images/fluent-city-v2.png')
    },
    {
        name: "Voxy",
        company: "for Voxy",
        description: "Language learning platform",
        technologies: ["Python", "Django", "Postgres", "Heroku", "CSS", "JavaScript", "HTML", "Backbone", "iOS", "Android"],
        thumbnail: require('@/assets/images/voxy.png')
    },
    {
        name: "WeWork.com",
        company: "for WeWork",
        description: "Internationalization platform and tools",
        technologies: ["i18n", "Python", "Django", "Postgres", "Heroku", "React", "iOS", "Android"],
        thumbnail: require('@/assets/images/wework.png')
    },
    {
        name: "Vettery.com",
        company: "for Vettery/Hired",
        description: "Job matching platform Candidate App",
        technologies: ["JavaScript", "React", "Redux", "Node", "CSS", "HTML"],
        thumbnail: require('@/assets/images/vettery.png')
    },
    {
        name: "Hired Assessments",
        company: "for Vettery/Hired",
        description: "Candidate assessment platform",
        technologies: ["Django", "Postgres", "AWS (RDS, Lambda)", "Docker", "GraphQL", "Python"],
        thumbnail: require('@/assets/images/hired-assessments.png')
    },
];

export default function Projects() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Projects</Text>
            {projects.map((project, index) => (
                <View key={index} style={styles.project}>
                    <Image
                        source={project.thumbnail || 'http://via.placeholder.com/640x360'}
                        style={styles.thumbnail}
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
                        <Text style={styles.details}>
                            Developed a {project.description.toLowerCase()} using {project.technologies.join(', ')}.
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 28,
        color: '#ccd6f6',
        marginBottom: 20,
        textAlign: 'center',
    },
    project: {
        flexDirection: 'row',
        marginBottom: 50,
        alignItems: 'flex-start',
    },
    thumbnail: {
        width: 200,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        marginRight: 20,
    },
    textContainer: {
        flex: 1,
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
    },
    techStackContainer: {
        marginBottom: 15,
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
    },
});
