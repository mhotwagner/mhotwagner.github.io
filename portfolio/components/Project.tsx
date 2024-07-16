import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

interface ProjectProps {
    id: string;
    name: string;
    company: string;
    description: string;
    technologies: string[];
    thumbnail: any;
    isSmallScreen: boolean;
    hovering: boolean;
    setHovering: (hovering: boolean) => void;
}

const Project: React.FC<ProjectProps> = ({ id, name, company, description, technologies, thumbnail, isSmallScreen, hovering, setHovering }) => {
    return (
        <View
            key={id}
            style={[styles.project, isSmallScreen && styles.projectSmall]}
            id={id}
            // onMouseEnter={() => setHovering(true)}
            // onMouseLeave={() => setHovering(false)}
        >
            <Image
                source={thumbnail || 'http://via.placeholder.com/640x360'}
                style={[styles.thumbnail, isSmallScreen && styles.thumbnailSmall]}
            />
            <View style={[styles.textContainer, isSmallScreen && styles.textContainerSmall]}>
                <Text style={styles.projectName}>{name}</Text>
                <Text style={styles.company}>{company}</Text>
                <Text style={styles.description}>{description}</Text>
                <View style={styles.techStackContainer}>
                    <View style={styles.techStack}>
                        {technologies.map((tech, idx) => (
                            <View key={idx} style={styles.techPill}>
                                <Text style={styles.techPillText}>{tech}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <Text style={styles.details}>
                    Developed a {description.toLowerCase()} using {technologies.join(', ')}.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    project: {
        flexDirection: 'row',
        marginBottom: 50,
        alignItems: 'flex-start',
        opacity: 1,
        // @ts-ignore
        transition: 'opacity 0.3s',
    },
    projectSmall: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    thumbnail: {
        width: 200,
        height: 150,
        resizeMode: 'cover',
        marginRight: 20,
    },
    thumbnailSmall: {
        width: '100%',
        height: 200,
        marginRight: 0,
        marginBottom: 15,
    },
    textContainer: {
        flex: 1,
    },
    textContainerSmall: {
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

export default Project;
