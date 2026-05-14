import { Text } from '@/components';
import { motion } from 'framer-motion';

export function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12">
          <Text variant="h1" className="mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
            Privacy Policy
          </Text>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] mb-4" />
          <Text className="text-sm text-[color-mix(in_srgb,var(--color-text)_60%,transparent)]">
            Last Update: May 14, 2026
          </Text>
        </div>

        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Text variant="h2" className="mb-4 text-[var(--color-primary)]">1. Introduction</Text>
            <Text>
              Allan Kevin Scain is committed to providing quality services to you, and this policy describes our ongoing obligations to you regarding how we manage your personal information.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Text variant="h2" className="mb-4 text-[var(--color-primary)]">2. Information We Collect</Text>
            <Text>
              When you visit the website or use one of our applications, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. Additionally, as you navigate through the website or applications, we collect information about the individual web pages you view, which websites or search terms referred you to the site, and information about how you interact with the site or our applications.
            </Text>
            <Text className="mt-4">
              When you contact us through the available channels, we collect certain information from you, including your name and email address, for the purposes of responding and providing services.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Text variant="h2" className="mb-4 text-[var(--color-primary)]">3. How We Use Your Information</Text>
            <Text>
              We use the information collected for purposes such as: Communicating with you; Improving and optimizing our website and user experience (for example, by generating analytics on how our visitors browse and interact with the portfolio).
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Text variant="h2" className="mb-4 text-[var(--color-primary)]">4. Information Sharing</Text>
            <Text>
              We share your personal information with third parties only to help us use your personal information as described above. For example, we use Google Analytics to understand how you use the site. We may also share your information to comply with applicable laws and regulations or to protect our rights.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Text variant="h2" className="mb-4 text-[var(--color-primary)]">5. General Data Protection Law (LGPD)</Text>
            <Text>
              If you are a resident of Brazil, the General Data Protection Law (LGPD) grants you certain rights regarding the processing of your personal data. We are committed to complying with the obligations set out by the LGPD and ensuring that your personal data is handled transparently and securely.
            </Text>
            <Text className="mt-4">
              You have the right to request access to the data we collect about you, correct any incomplete or inaccurate data, request the deletion of unnecessary data or data processed in non-compliance with the law. To exercise these rights, please contact us using the information provided in the Contact section of this policy.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Text variant="h2" className="mb-4 text-[var(--color-primary)]">6. Updates</Text>
            <Text>
              We may update this privacy policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="rounded-2xl border border-[color-mix(in_srgb,var(--color-text)_10%,transparent)] bg-[color-mix(in_srgb,var(--color-text)_5%,transparent)] p-8 shadow-xl backdrop-blur-md"
          >
            <Text variant="h2" className="mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">7. Contact</Text>
            <Text className="mb-6">
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us:
            </Text>
            <div className="space-y-4">
              <div className="flex flex-col">
                <Text className="text-xs uppercase tracking-widest text-[color-mix(in_srgb,var(--color-text)_50%,transparent)]">Email</Text>
                <a href="mailto:meuemail44allan@email.com" className="text-lg font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]">
                  meuemail44allan@email.com
                </a>
              </div>
              <div className="flex flex-col">
                <Text className="text-xs uppercase tracking-widest text-[color-mix(in_srgb,var(--color-text)_50%,transparent)]">Address</Text>
                <Text className="text-lg font-medium">Allan Kevin Scain</Text>
                <Text>R ANSELMO SCHREINER, 521 - SANDER</Text>
                <Text>RIO GRANDE DO SUL, Brazil</Text>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}
