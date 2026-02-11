import { ScrollView, View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Head from 'expo-router/head';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function NeedCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <View style={styles.needCard}>
      <Text style={styles.needIcon}>{icon}</Text>
      <View style={styles.needContent}>
        <Text style={styles.needTitle}>{title}</Text>
        <Text style={styles.body}>{children}</Text>
      </View>
    </View>
  );
}

export default function RosendaleWoodbank() {
  const { width } = useWindowDimensions();
  const isNarrow = width < 600;

  return (
    <>
      <Head>
        <title>Rosendale Woodbank</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪵</text></svg>" />
      </Head>
      <StatusBar style="light" />
      <ScrollView style={styles.page} contentContainerStyle={styles.pageContent}>
        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>🪵</Text>
          <Text style={[styles.heroTitle, isNarrow && styles.heroTitleNarrow]}>
            Rosendale Woodbank
          </Text>
          <View style={styles.heroDivider} />
          <Text style={[styles.heroSubtitle, isNarrow && styles.heroSubtitleNarrow]}>
            Free firewood for neighbors in need
          </Text>
        </View>

        {/* Content */}
        <View style={[styles.content, isNarrow && styles.contentNarrow]}>

          <Section title="The Problem">
            <Text style={styles.body}>
              A lot of households in our area heat with wood — and a full winter's supply of
              seasoned hardwood costs{' '}
              <Text style={styles.bold}>$1,000 to $1,600</Text> at current prices. For
              families already stretched thin by groceries, medical expenses, and today's
              generally high cost of living, that's an impossible number. New York's HEA
              heating assistance covers a portion, but not enough for a full season.
              Every winter, people in our community go cold.
            </Text>
          </Section>

          <Section title="The Idea">
            <Text style={styles.body}>
              A woodbank works like a food pantry, but for firewood. Volunteers collect,
              split, season, and distribute free cordwood to households that can't afford to
              heat their homes. There are over 200 woodbanks operating across the country,
              many of them small, volunteer-run operations serving a handful of families in
              their own towns. We'd like to start one here.
            </Text>
            <Text style={[styles.body, styles.bodyFollowup]}>
              The concept is straightforward: source wood that would otherwise go to waste —
              storm damage, tree service removals, hazard trees, land clearing — and turn it
              into split, seasoned firewood for people who need it.
            </Text>
          </Section>

          <Section title="What We Have So Far">
            <Text style={styles.body}>
              We have a chainsaw, a hydraulic splitter, a truck to haul with, and a small
              group of people willing to put in the work. Federal grant funding exists
              specifically for woodbank startups through the USDA Forest Service's Firewood
              Bank Assistance Program, and several national organizations offer mentorship and
              resources to new programs.
            </Text>
          </Section>

          <Section title="What We Need">
            <NeedCard icon="📍" title="A Processing Site">
              This is our biggest need. We're looking for a flat, truck-accessible area —
              ideally in or near Rosendale — where we can store logs, run a splitter on
              processing days, and stack split wood to dry. A corner of a farm, a municipal
              yard, church property, or an unused commercial lot would all work. It doesn't
              need to be fancy. It needs to be accessible and available.
            </NeedCard>

            <NeedCard icon="🤝" title="Volunteers">
              Processing firewood is physical work and it goes a lot faster with a crew.
              We'd hold regular processing days — likely weekend mornings — where people can
              show up, split and stack wood, and go home knowing they helped a neighbor stay
              warm. No experience necessary. All safety equipment and training provided.
            </NeedCard>

            <NeedCard icon="🌳" title="Wood">
              If you're a property owner with downed or hazard trees you need removed, or a
              tree service looking for a place to drop logs, we'd love to hear from you.
              Hardwood only — oak, maple, ash, hickory, cherry, beech, birch, and locust are
              all excellent.
            </NeedCard>

            <NeedCard icon="💬" title="Community Input">
              We want to build this the right way. If you heat with wood and have struggled
              with costs, if you know someone who has, or if you have thoughts on how a
              program like this should work in Rosendale, we want to hear from you.
            </NeedCard>
          </Section>

          <Section title="How It Would (Wood) Work">
            <Text style={styles.body}>
              Wood is collected from local sources — tree services, storm cleanup, private
              landowners, and potentially state and county operations — and brought to the
              processing site. Volunteers buck logs to stove length and split them, then stack
              the wood to season over spring and summer. By fall, the firewood is dry and
              ready to distribute.
            </Text>
            <Text style={[styles.body, styles.bodyFollowup]}>
              Distribution would begin in October and run through March, prioritizing elderly
              residents, people with disabilities, families with young children, and anyone in
              an emergency heating situation. Recipients can pick up wood at the site or, for
              those without transportation, we'd deliver.
            </Text>
            <Text style={[styles.body, styles.bodyFollowup]}>
              Eligibility would be based on need — we're not interested in creating
              bureaucratic hurdles.{' '}
              <Text style={styles.italic}>
                If you're struggling to heat your home, that's enough.
              </Text>
            </Text>
          </Section>

          <Section title="Who Benefits">
            <Text style={styles.body}>
              Beyond the families who receive firewood, a woodbank creates value across the
              community. Tree services get a free, local dump site for logs they'd otherwise
              pay to dispose of. The town gets a productive use for storm debris. Volunteers
              get a tangible way to help their neighbors. And all of us benefit from knowing
              that nobody in our community is going without heat.
            </Text>
          </Section>

          {/* CTA */}
          <View style={styles.cta}>
            <Text style={styles.ctaTitle}>Get Involved</Text>
            <Text style={styles.ctaBody}>
              We're in the early stages and looking for all kinds of support — a place to
              work, people to work with, wood to work on, and ideas to work from. If any part
              of this interests you, please reach out.
            </Text>
            <View style={styles.ctaContact}>
              <Text style={styles.ctaContactText}>
                rosendale.woodbank@gmail.com
              </Text>
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Woodbanks are community-driven, volunteer-powered programs. This initiative is
              not affiliated with any commercial firewood operation. All firewood distributed
              through the program would be free of charge to eligible households.
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const colors = {
  heroBackground: '#2d4a3e',
  heroText: '#f5f1eb',
  pageBackground: '#faf7f2',
  heading: '#2d4a3e',
  body: '#3b3330',
  cardBackground: '#f0ebe4',
  cardBorder: '#d6cfc4',
  ctaBackground: '#2d4a3e',
  ctaText: '#f5f1eb',
  divider: 'rgba(245, 241, 235, 0.3)',
  footerText: '#8a8078',
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.pageBackground,
  },
  pageContent: {
    flexGrow: 1,
  },

  // Hero
  hero: {
    backgroundColor: colors.heroBackground,
    paddingVertical: 64,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  heroEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: '700',
    color: colors.heroText,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  heroTitleNarrow: {
    fontSize: 32,
  },
  heroDivider: {
    width: 48,
    height: 2,
    backgroundColor: colors.divider,
    marginVertical: 20,
    borderRadius: 1,
  },
  heroSubtitle: {
    fontSize: 20,
    color: colors.heroText,
    textAlign: 'center',
    opacity: 0.9,
    fontStyle: 'italic',
  },
  heroSubtitleNarrow: {
    fontSize: 17,
  },

  // Content
  content: {
    maxWidth: 720,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 32,
    paddingTop: 16,
    paddingBottom: 48,
  },
  contentNarrow: {
    paddingHorizontal: 20,
  },

  // Sections
  section: {
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.heading,
    marginBottom: 16,
  },

  // Body text
  body: {
    fontSize: 17,
    lineHeight: 28,
    color: colors.body,
  },
  bodyFollowup: {
    marginTop: 16,
  },
  bold: {
    fontWeight: '700',
  },
  italic: {
    fontStyle: 'italic',
  },

  // Need cards
  needCard: {
    flexDirection: 'row',
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 20,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: colors.cardBorder,
  },
  needIcon: {
    fontSize: 24,
    marginRight: 16,
    marginTop: 2,
  },
  needContent: {
    flex: 1,
  },
  needTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.heading,
    marginBottom: 8,
  },

  // CTA
  cta: {
    marginTop: 48,
    backgroundColor: colors.ctaBackground,
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.ctaText,
    marginBottom: 16,
  },
  ctaBody: {
    fontSize: 17,
    lineHeight: 28,
    color: colors.ctaText,
    textAlign: 'center',
    opacity: 0.92,
  },
  ctaContact: {
    marginTop: 24,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  ctaContactText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.ctaText,
  },

  // Footer
  footer: {
    marginTop: 40,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: colors.cardBorder,
  },
  footerText: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.footerText,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
