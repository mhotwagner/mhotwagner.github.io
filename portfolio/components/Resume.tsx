import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Platform,
} from "react-native";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";

interface ResumeProps {
  setInputValue: (value: string) => void;
}

export default function Resume({ setInputValue }: ResumeProps) {
  const handleDownload = async () => {
    if (Platform.OS === "web") {
      const pdfAsset = Asset.fromModule(
        require("@/assets/files/MichaelHotwagner2025.pdf")
      );
      await pdfAsset.downloadAsync();
      const link = document.createElement("a");
      link.href = pdfAsset.uri;
      link.download = "MichaelHotwagner2025.pdf";
      link.click();
      setInputValue("resume downloaded");
    } else {
      const url = FileSystem.documentDirectory + "MichaelHotwagner2025.pdf";
      FileSystem.downloadAsync(
        require("@/assets/files/MichaelHotwagner2025.pdf"),
        url
      )
        .then(({ uri }) => {
          FileSystem.getContentUriAsync(uri).then((cUri) => {
            Linking.openURL(cUri);
          });
          setInputValue("resume downloaded");
        })
        .catch((error) => {
          console.error(error);
        });
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

      <Text style={styles.jobTitle}>Staff Software Engineer at Folio</Text>
      <Text style={styles.jobDate}>October 2024 - November 2025</Text>
      <Text style={styles.jobDescription}>
        - Delivered full-stack product work across infrastructure (Terraform,
        Docker, GitHub Actions, AWS Lambda/SQS/S3), backend (Django, DRF,
        WebSockets, Postgres, OpenSearch), and frontend (React/Next.js, HeroUI,
        Tailwind)
        {"\n"}- Led a homepage and global navigation rebuild, improving
        performance and establishing reusable layout patterns across the
        platform
        {"\n"}- Designed and implemented a search-relevance framework in
        OpenSearch with custom boosting, relevance tuning, and re-ranking logic
        {"\n"}- Architected and built a scalable resume-parsing and
        normalization pipeline using AWS Lambda and SQS/S3 with semantic
        matching for skills and education data
        {"\n"}- Developed a context-aware chat interface using OpenAI with
        structured project and user context injection
      </Text>

      <Text style={styles.jobTitle}>
        Senior Software Engineer at Hired Assessments
      </Text>
      <Text style={styles.jobDate}>June 2020 - July 2024</Text>
      <Text style={styles.jobDescription}>
        - Built and maintained backend business logic in Django and Postgres,
        powering React, Vue, and vanilla JS clients via GraphQL and REST APIs
        {"\n"}- Maintained and extended the real-time code evaluation service
        (Flask and Docker), including GraphQL integration with the core Django
        platform
        {"\n"}- Developed and maintained multi-language support for real-time
        evaluation (JavaScript, Python, Ruby, Java, Clojure, Swift, C++, Rust,
        Bash, etc.)
        {"\n"}- Designed, built, and deployed a replacement for Docker-based
        evaluation runners using AWS Lambda, improving scalability and
        reliability
        {"\n"}- Owned CI/CD pipelines (GitHub and TravisCI) and managed
        production AWS infrastructure (ElasticBeanstalk, RDS, Lambda)
      </Text>

      <Text style={styles.jobTitle}>
        Lead Internationalization Engineer at WeWork
      </Text>
      <Text style={styles.jobDate}>March 2018 - February 2020</Text>
      <Text style={styles.jobDescription}>
        - Developed and managed the internationalization infrastructure for a
        diverse ecosystem of web and mobile applications
        {"\n"}- Built tooling to automate integration with internationalization
        and localization workflows
        {"\n"}- Integrated and supported third-party localization vendors
        {"\n"}- Designed and deployed an in-house internationalization
        management system used across platform-agnostic client apps
      </Text>

      <Text style={styles.jobTitle}>Full Stack Software Engineer at Voxy</Text>
      <Text style={styles.jobDate}>September 2015 - February 2018</Text>
      <Text style={styles.jobDescription}>
        - Contributed to a multi-tenant English language learning app deployed
        in AWS, serving 50k+ active monthly users
        {"\n"}- Architected, developed, deployed, and maintained app components
        including AWS infrastructure, Django backend, Postgres/Mongo/Redshift
        data stores, reporting pipelines, and web and native clients
        {"\n"}- Collaborated with product team to deliver features using agile
        and TDD methodologies
      </Text>

      <Text style={styles.jobTitle}>Full Stack Developer at Fluent City</Text>
      <Text style={styles.jobDate}>October 2013 - September 2015</Text>
      <Text style={styles.jobDescription}>
        - Developed and maintained Fluent City's customer-facing website and
        internal systems
        {"\n"}- Built and maintained integrations with Salesforce
        {"\n"}- Contributed to product development, operations, and
        organizational growth
      </Text>

      <Text style={styles.jobTitle}>Spanish Teacher at Fluent City</Text>
      <Text style={styles.jobDate}>March 2011 - January 2015</Text>
      <Text style={styles.jobDescription}>
        - Instructed adults in beginning and intermediate Spanish
        {"\n"}- Planned curriculum and created class materials
      </Text>

      <Text style={styles.jobTitle}>Technology Lead at Protocol</Text>
      <Text style={styles.jobDate}>August 2011 - October 2013</Text>
      <Text style={styles.jobDescription}>
        - Developed and maintained company websites, Magento e-commerce systems,
        and custom interactive projects
        {"\n"}- Managed web infrastructure and office software systems
      </Text>

      <Text style={styles.jobTitle}>Other Roles</Text>
      <Text style={styles.jobDescription}>
        - Instructor at iD Tech Camps (June 2011 - August 2011)
        {"\n"}- Temporary Assistant to the President at Cmb Realty Inc (January
        2011 - May 2011)
        {"\n"}- Canvassing Team Leader at New York State Democratic Committee
        (August 2010 - November 2010)
        {"\n"}- Camp Counselor at Lake of the Woods & Greenwoods Family of Camps
        (June 2010 - August 2010)
      </Text>

      <Text style={styles.sectionTitle}>Education</Text>
      <Text style={styles.description}>
        Bachelor of Arts (BA) in Political Science, Central Michigan University
        (2006 - 2010)
      </Text>

      <Text style={styles.sectionTitle}>Skills</Text>
      <Text style={styles.description}>
        Python, JavaScript, Django, React, PostgreSQL, AWS, AWS Lambda, Docker,
        GraphQL, OpenSearch, Terraform, LLMs, Prompt Engineering, Git
      </Text>

      <Text style={styles.sectionTitle}>Languages</Text>
      <Text style={styles.description}>English (Native)</Text>
      <Text style={styles.description}>Spanish (Advanced)</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#ccd6f6",
    marginTop: 20,
    marginBottom: 20,
  },
  downloadLink: {
    fontSize: 16,
    color: "#64ffda",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: "#ccd6f6",
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: "#8892b0",
    lineHeight: 24,
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 18,
    color: "#ccd6f6",
    marginTop: 10,
    marginBottom: 5,
  },
  jobDate: {
    fontSize: 16,
    color: "#8892b0",
    marginBottom: 5,
  },
  jobDescription: {
    fontSize: 16,
    color: "#8892b0",
    marginBottom: 10,
    lineHeight: 22,
  },
});
