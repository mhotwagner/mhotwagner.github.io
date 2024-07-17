import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';

interface ResumeProps {
    setInputValue: any;
}

export default function Resume({setInputValue}: ResumeProps) {
    const handleDownload = async () => {
        const uri = require('@/assets/files/MichaelHotwagner2024.pdf');

        if (Platform.OS === 'web') {
            const link = document.createElement('a');
            link.href = uri;
            link.download = 'MichaelHotwagner2024.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setInputValue('download complete');
        } else {
            try {
                const fileUri = FileSystem.documentDirectory + 'MichaelHotwagner2024.pdf';
                await FileSystem.downloadAsync(uri, fileUri);
                Alert.alert('Download complete!', 'File saved to ' + fileUri);
                setInputValue('download complete');
            } catch (error) {
                Alert.alert('Error', 'An error occurred while downloading the file.');
                setInputValue('download error');
                console.error(error);
            }
        }
    };

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Resume</Text>
                <TouchableOpacity onPress={handleDownload}>
                    <Text style={styles.downloadLink}>Download PDF</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.sectionTitle}>Work Experience</Text>

            <Text style={styles.jobTitle}>Senior Software Engineer at Vettery/Hired</Text>
            <Text style={styles.jobDate}>June 2020 - July 2024</Text>
            <Text style={styles.jobDescription}>
                - Developed backend business logic in Django and PostgreSQL.
                {"\n"}- Supported frontend apps in React, Vue, and vanilla JS through APIs in GraphQL and REST.
                {"\n"}- Maintained and built real-time code evaluation API app in Flask and Docker.
                {"\n"}- Supported and developed new languages for real-time code evaluation.
                {"\n"}- Designed and deployed a replacement for Docker-based evaluation runners using AWS Lambda.
                {"\n"}- Maintained CI deployment pipeline with GitHub, Travis CI, and ElasticBeanstalk.
                {"\n"}- Managed AWS infrastructure on ElasticBeanstalk, RDS, and Lambda.
            </Text>

            <Text style={styles.jobTitle}>Lead Internationalization Engineer at WeWork</Text>
            <Text style={styles.jobDate}>March 2018 - February 2020</Text>
            <Text style={styles.jobDescription}>
                - Developed and managed internationalization infrastructure for diverse applications.
                {"\n"}- Built and managed tools for automated integration with internationalization and localization workflows.
                {"\n"}- Worked with third-party vendors to integrate and support localization tools.
            </Text>

            <Text style={styles.jobTitle}>Full Stack Software Engineer at Voxy</Text>
            <Text style={styles.jobDate}>September 2015 - February 2018</Text>
            <Text style={styles.jobDescription}>
                - Contributed to a multi-tenant English language learning app in the AWS ecosystem.
                {"\n"}- Architected, developed, deployed, and maintained app components including infrastructure, backend, and user clients.
                {"\n"}- Collaborated with product team using agile and TDD methodologies.
            </Text>

            <Text style={styles.jobTitle}>Full Stack Developer at Fluent City</Text>
            <Text style={styles.jobDate}>October 2013 - September 2015</Text>
            <Text style={styles.jobDescription}>
                - Developed and maintained customer-facing website and internal systems.
                {"\n"}- Built out new company and booking site in Python/Django.
                {"\n"}- Integrated internal database with Salesforce.
                {"\n"}- Contributed to all aspects of business development.
            </Text>

            <Text style={styles.jobTitle}>Spanish Teacher at Fluent City</Text>
            <Text style={styles.jobDate}>March 2011 - January 2015</Text>
            <Text style={styles.jobDescription}>
                - Instructed adults in Spanish.
                {"\n"}- Planned curriculum and generated class materials.
            </Text>

            <Text style={styles.jobTitle}>Technology Lead at Protocol</Text>
            <Text style={styles.jobDate}>August 2011 - October 2013</Text>
            <Text style={styles.jobDescription}>
                - Developed and maintained company websites and managed web-based and mobile application projects.
                {"\n"}- Built and implemented Magento-based e-commerce programs.
                {"\n"}- Managed office technology and software.
            </Text>

            <Text style={styles.jobTitle}>Other Roles</Text>
            <Text style={styles.jobDescription}>
                - Instructor at iD Tech Camps (June 2011 - August 2011)
                {"\n"}- Temporary Assistant to the President at Cmb Realty Inc (January 2011 - May 2011)
                {"\n"}- Canvassing Team Leader at New York State Democratic Committee (August 2010 - November 2010)
                {"\n"}- Camp Counselor at Lake of the Woods & Greenwoods Family of Camps (June 2010 - August 2010)
            </Text>

            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.description}>Bachelor of Arts (BA) in Political Science, Central Michigan University (2006 - 2010)</Text>

            <Text style={styles.sectionTitle}>Skills</Text>
            <Text style={styles.description}>Python, JavaScript, PostgreSQL, AWS, AWS Lambda, Git, React, Django, GraphQL</Text>

            <Text style={styles.sectionTitle}>Languages</Text>
            <Text style={styles.description}>Spanish (Professional Working), English (Native or Bilingual)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#ccd6f6',
        marginTop: 20,
        marginBottom: 20,
    },
    downloadLink: {
        fontSize: 16,
        color: '#64ffda',
        textDecorationLine: 'underline',
        marginTop: 20,
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
    jobTitle: {
        fontSize: 18,
        color: '#ccd6f6',
        marginTop: 10,
        marginBottom: 5,
    },
    jobDate: {
        fontSize: 16,
        color: '#8892b0',
        marginBottom: 5,
    },
    jobDescription: {
        fontSize: 16,
        color: '#8892b0',
        marginBottom: 10,
        lineHeight: 22,
    },
});
