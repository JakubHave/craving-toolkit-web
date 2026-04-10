import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "App Privacy Policy | Craving Toolkit",
  description:
    "Privacy Policy for the Craving Toolkit — Recovery Tools mobile app. How we handle your data, permissions, and account information.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-5">{title}</h2>
      <div className="space-y-4 text-lg leading-relaxed text-slate-600">
        {children}
      </div>
    </section>
  );
}

export default function AppPrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="border-b bg-white">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl tracking-tight text-emerald-800"
          >
            Craving Toolkit
          </Link>
          <div className="flex gap-6">
            <Link
              href="/articles"
              className="text-base font-medium text-slate-600 hover:text-emerald-700 transition"
            >
              Articles
            </Link>
            <Link
              href="/#pricing"
              className="text-base font-medium text-slate-600 hover:text-emerald-700 transition"
            >
              Get the Guide
            </Link>
          </div>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          App Privacy Policy
        </h1>
        <p className="text-lg font-semibold text-slate-700 mb-4">
          Craving Toolkit — Recovery Tools
        </p>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          This policy explains how information is handled in connection with the
          Craving Toolkit mobile application for iOS and Android.
        </p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Last updated April 4, 2026
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-emerald-900 text-emerald-50 rounded-3xl p-8 md:p-10 mb-10 shadow-xl shadow-emerald-950/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-emerald-100 mb-6">
            <Link
              href="/app-terms"
              className="hover:text-white transition"
            >
              App Terms of Use
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">App Privacy Policy</span>
          </div>
          <p className="text-lg leading-relaxed text-emerald-100">
            Our core privacy commitment is simple: Craving Toolkit does not
            collect, transmit, store on any server, or share any personal data.
            The App is designed to function entirely offline. Your data never
            leaves your device.
          </p>
        </div>

        <div className="space-y-6">
          <Section title="1. Introduction and Privacy Commitment">
            <p>
              This Privacy Policy describes how Jakub Havelka
              (&ldquo;Developer,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;), an individual residing in the Slovak Republic,
              handles information in connection with the Craving Toolkit —
              Recovery Tools mobile application (&ldquo;App&rdquo;).
            </p>
            <p>
              <strong className="text-slate-800">
                Our core privacy commitment is simple: Craving Toolkit does not
                collect, transmit, store on any server, or share any personal
                data.
              </strong>{" "}
              The App is designed to function entirely offline. There is no
              backend, no server, no cloud storage, no user accounts, no
              analytics, no tracking, and no advertising. Your data never leaves
              your device.
            </p>
            <p>
              We have built the App with privacy-by-design principles,
              recognizing that people using addiction recovery tools deserve
              absolute confidence that their most private and sensitive
              information remains under their control.
            </p>
            <p>
              This Privacy Policy is provided to comply with the requirements of
              the General Data Protection Regulation (EU) 2016/679
              (&ldquo;GDPR&rdquo;), the Apple App Store, the Google Play Store,
              and other applicable privacy laws, even though we do not collect
              personal data.
            </p>
          </Section>

          <Section title="2. Information We Do NOT Collect">
            <p>
              To be clear and transparent, the App does{" "}
              <strong className="text-slate-800">not</strong> collect, transmit,
              access, process, or share any of the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal identification information (name, email, phone number,
                address)
              </li>
              <li>
                Account credentials or login information (no accounts exist)
              </li>
              <li>
                Device identifiers, hardware IDs, or advertising identifiers
              </li>
              <li>IP addresses</li>
              <li>Location data or GPS coordinates</li>
              <li>
                Usage analytics, behavioral data, or interaction patterns
              </li>
              <li>
                Crash reports or diagnostic data transmitted to the Developer
              </li>
              <li>
                Cookies, tracking pixels, or similar tracking technologies
              </li>
              <li>Biometric data</li>
              <li>
                Financial or payment information (see Section 7 for in-app
                purchases)
              </li>
              <li>Data from other apps on your device</li>
              <li>
                Contacts, photos, calendar, or other device data beyond what is
                described in Section 3
              </li>
            </ul>
            <p>
              <strong className="text-slate-800">
                We do not use any third-party analytics, advertising,
                attribution, or tracking SDKs.
              </strong>{" "}
              There are no hidden data collection mechanisms in the App.
            </p>
          </Section>

          <Section title="3. Information Stored on Your Device">
            <p>
              The App stores data{" "}
              <strong className="text-slate-800">
                exclusively on your device
              </strong>{" "}
              in a local SQLite database and local file storage. This data is
              created by you, stored by you, and accessible only to you. The
              Developer never has access to this data.
            </p>
            <p>
              The types of information stored locally on your device include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-slate-800">
                  Profile information
                </strong>{" "}
                you enter during onboarding (addiction types you select, recovery
                stage, personality style result, recovery start date)
              </li>
              <li>
                <strong className="text-slate-800">Recovery cards</strong> —
                personal text statements you write
              </li>
              <li>
                <strong className="text-slate-800">Craving log entries</strong>{" "}
                — intensity ratings, trigger types, tools used, and outcomes you
                record
              </li>
              <li>
                <strong className="text-slate-800">Daily check-in data</strong>{" "}
                — risk level selections you make
              </li>
              <li>
                <strong className="text-slate-800">Voice recordings</strong> —
                audio messages you record using the Voice of Truth feature (see
                Section 4)
              </li>
              <li>
                <strong className="text-slate-800">Support contacts</strong> —
                names and phone numbers you choose to store
              </li>
              <li>
                <strong className="text-slate-800">
                  Custom lie/truth pairs
                </strong>{" "}
                — personal addictive voice entries you create
              </li>
              <li>
                <strong className="text-slate-800">Milestone data</strong> —
                recovery milestones tracked by the App
              </li>
              <li>
                <strong className="text-slate-800">App preferences</strong> —
                theme selection, notification settings, and other configuration
                choices
              </li>
            </ul>
            <p>
              <strong className="text-slate-800">
                All of this data remains on your device at all times.
              </strong>{" "}
              It is never uploaded, transmitted, synced, backed up to our
              servers, or shared with any party. We do not have the technical
              capability to access this data, as no server infrastructure exists
              to receive it.
            </p>
            <p>
              If you uninstall the App, all locally stored data will be{" "}
              <strong className="text-slate-800">
                permanently and irreversibly deleted
              </strong>{" "}
              from your device. The Developer cannot recover this data under any
              circumstances.
            </p>
          </Section>

          <Section title="4. Voice Recordings">
            <p>
              The App includes a feature called &ldquo;Voice of Truth&rdquo;
              that allows you to record personal audio messages to yourself.
              These recordings are intended to be played back during moments of
              craving or emotional distress.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Voice recordings are captured using your device&apos;s
                microphone.
              </li>
              <li>
                Recordings are stored as audio files (m4a format) in the
                App&apos;s local storage directory on your device.
              </li>
              <li>
                Recording metadata (user-assigned label, duration, creation
                date) is stored in the local SQLite database.
              </li>
              <li>
                Maximum recording length is 3 minutes per recording.
              </li>
            </ul>
            <p>
              <strong className="text-slate-800">
                We never access, upload, transmit, process, listen to, analyze,
                or store your voice recordings on any server or system.
              </strong>{" "}
              Your voice recordings exist only on your device and are under your
              complete control. You may play, delete, or re-record messages at
              any time within the App.
            </p>
            <p>
              We recognize that voice recordings are personal data under GDPR
              (as a voice can identify an individual). However, because the
              Developer never processes this data — it is created and stored by
              you, on your device, for your personal use only — the Developer is
              not acting as a data controller or data processor with respect to
              your voice recordings.
            </p>
          </Section>

          <Section title="5. Sensitive Health Information">
            <p>
              We acknowledge that information you create and store within the
              App — including craving logs, addiction type selections, recovery
              stage, daily check-in data, and slip review entries — may
              constitute sensitive personal data relating to your health under
              GDPR Article 9 (&ldquo;special categories of personal
              data&rdquo;).
            </p>
            <p>
              <strong className="text-slate-800">
                The Developer does not process this sensitive data.
              </strong>{" "}
              All health-related information is created by you, stored locally on
              your device, and never transmitted to or accessed by the Developer
              or any third party. The App&apos;s fully offline architecture
              ensures that this sensitive information remains exclusively under
              your control.
            </p>
          </Section>

          <Section title="6. Third-Party Services">
            <p>
              As of the effective date of this Privacy Policy, the App does{" "}
              <strong className="text-slate-800">not</strong> integrate with,
              transmit data to, or use any third-party services, SDKs, APIs, or
              external platforms.
            </p>
            <p>
              If we introduce third-party services in future versions of the App
              (for example, for subscription management), we will update this
              Privacy Policy before any such integration is made available,
              clearly describing what data is involved, the purpose of the
              integration, and the third party&apos;s privacy practices.
            </p>
          </Section>

          <Section title="7. In-App Purchases and Payment Processing">
            <p>
              The App may offer optional premium features through in-app
              purchases or subscriptions.
            </p>
            <p>
              All payment transactions are processed exclusively by{" "}
              <strong className="text-slate-800">Apple</strong> (via the App
              Store) or <strong className="text-slate-800">Google</strong> (via
              Google Play), depending on the platform you use. The Developer does{" "}
              <strong className="text-slate-800">not</strong> collect, process,
              store, or have access to your payment information, credit card
              details, billing address, or any financial data.
            </p>
            <p>
              Payment-related data is handled in accordance with the privacy
              policies of the respective platform:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-slate-800">Apple:</strong>{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 underline"
                >
                  apple.com/legal/privacy
                </a>
              </li>
              <li>
                <strong className="text-slate-800">Google:</strong>{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 underline"
                >
                  policies.google.com/privacy
                </a>
              </li>
            </ul>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              The App is not intended for and is not directed at children under
              the age of 16. We do not knowingly collect any personal information
              from children under 16. Since the App collects no personal
              information from any user, there is no data from children to
              collect, store, or process.
            </p>
            <p>
              If you are a parent or guardian and believe that a child under 16
              has accessed the App, please note that no personal data has been
              collected or transmitted to the Developer. You may uninstall the
              App from the child&apos;s device to remove all locally stored data.
            </p>
          </Section>

          <Section title="9. Your Rights Under GDPR">
            <p>
              The General Data Protection Regulation (EU) 2016/679 grants
              EU/EEA residents certain rights regarding their personal data,
              including the right of access, rectification, erasure, restriction
              of processing, data portability, and the right to object.
            </p>
            <p>
              Because the Developer does not collect, store, or process any
              personal data, these rights are not applicable in the traditional
              sense — there is no personal data held by the Developer to access,
              rectify, erase, restrict, port, or object to.
            </p>
            <p>
              <strong className="text-slate-800">
                You have full control over all data stored locally on your
                device.
              </strong>{" "}
              You may:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-slate-800">View</strong> all your data
                within the App at any time.
              </li>
              <li>
                <strong className="text-slate-800">Edit</strong> your recovery
                cards, craving log entries, support contacts, voice recordings,
                and other User Content directly within the App.
              </li>
              <li>
                <strong className="text-slate-800">Delete</strong> individual
                entries, recordings, or all data by using the App&apos;s
                built-in editing and deletion features.
              </li>
              <li>
                <strong className="text-slate-800">Erase all data</strong> by
                uninstalling the App, which permanently deletes all locally
                stored data from your device.
              </li>
            </ul>
            <p>
              If you have any questions about your data rights or wish to
              exercise any right under GDPR, please contact us at the address
              provided in Section 14. We will respond within 30 days.
            </p>
            <p>
              <strong className="text-slate-800">
                Data Protection Authority:
              </strong>{" "}
              If you are located in the EU/EEA and have concerns about data
              protection, you have the right to lodge a complaint with your local
              data protection supervisory authority. In Slovakia, this is:
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <p className="font-semibold text-slate-800">
                Úrad na ochranu osobných údajov Slovenskej republiky
              </p>
              <p>
                (Office for Personal Data Protection of the Slovak Republic)
              </p>
              <p>
                Hraničná 12, 820 07 Bratislava 27, Slovak Republic
              </p>
              <p>
                <a
                  href="https://dataprotection.gov.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 underline"
                >
                  dataprotection.gov.sk
                </a>
              </p>
            </div>
          </Section>

          <Section title="10. Your Rights Under CCPA / CPRA">
            <p>
              The California Consumer Privacy Act (CCPA) and California Privacy
              Rights Act (CPRA) grant California residents certain rights
              regarding personal information collected by businesses.
            </p>
            <p>
              The Developer does not collect, sell, share, or disclose personal
              information from any user, including California residents. As the
              Developer does not meet the CCPA/CPRA applicability thresholds and
              does not collect personal information, these regulations do not
              impose obligations on the Developer with respect to the App.
            </p>
            <p>Notwithstanding the above, we affirm that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We do <strong className="text-slate-800">not</strong> sell your
                personal information.
              </li>
              <li>
                We do <strong className="text-slate-800">not</strong> share your
                personal information for cross-context behavioral advertising.
              </li>
              <li>
                We do <strong className="text-slate-800">not</strong> collect
                personal information from any user.
              </li>
            </ul>
          </Section>

          <Section title="11. Device Backups">
            <p>
              Your device&apos;s operating system may include App data in
              automated device backups if you have enabled such features (e.g.,
              iCloud Backup on iOS, Google Backup on Android). These backups are
              created and managed by Apple or Google, respectively, not by the
              Developer.
            </p>
            <p>If App data is included in a device backup:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The backup is encrypted and managed according to Apple&apos;s or
                Google&apos;s policies.
              </li>
              <li>
                The Developer has no access to, control over, or visibility into
                these backups.
              </li>
              <li>
                Restoring a device from a backup may restore previously deleted
                App data.
              </li>
            </ul>
            <p>
              For information about managing device backups, please refer to
              Apple&apos;s or Google&apos;s support documentation.
            </p>
          </Section>

          <Section title="12. Data Security">
            <p>
              Because all data is stored locally on your device and is never
              transmitted over any network, the primary security for your data is
              provided by your device&apos;s built-in security features,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device passcode, PIN, or password protection</li>
              <li>
                Biometric authentication (Face ID, Touch ID, fingerprint)
              </li>
              <li>
                Device encryption (enabled by default on modern iOS and Android
                devices)
              </li>
            </ul>
            <p>We recommend that you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use a strong device passcode or biometric lock.</li>
              <li>
                Keep your device&apos;s operating system updated.
              </li>
              <li>
                Do not share your device with individuals you do not trust with
                access to your recovery data.
              </li>
              <li>
                Be aware that if someone has physical access to your unlocked
                device, they may be able to open the App and view your data.
              </li>
            </ul>
            <p>
              The Developer does not transmit data over any network, so there is
              no risk of data interception, man-in-the-middle attacks, or
              server-side data breaches related to the App.
            </p>
          </Section>

          <Section title="13. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be effective upon publication of the updated Privacy Policy within
              the App or on our website at cravingtoolkit.com.
            </p>
            <p>
              We will indicate the date of the most recent update at the top of
              this Privacy Policy. If we make material changes (particularly if
              we begin collecting or processing any personal data in a future
              version), we will provide prominent notice within the App before
              the changes take effect.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically.
            </p>
            <p>
              Your continued use of the App after the publication of an updated
              Privacy Policy constitutes your acceptance of the revised Privacy
              Policy.
            </p>
          </Section>

          <Section title="14. Contact Information">
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <p className="font-semibold text-slate-800">Jakub Havelka</p>
              <p>Račianska 61</p>
              <p>Bratislava, 831 02</p>
              <p>Slovak Republic</p>
              <p className="mt-3">
                <strong className="text-slate-800">Email:</strong>{" "}
                <a
                  href="mailto:jacob@cravingtoolkit.com"
                  className="text-emerald-700 hover:text-emerald-800 underline"
                >
                  jacob@cravingtoolkit.com
                </a>
              </p>
              <p>
                <strong className="text-slate-800">Website:</strong>{" "}
                <a
                  href="https://www.cravingtoolkit.com"
                  className="text-emerald-700 hover:text-emerald-800 underline"
                >
                  cravingtoolkit.com
                </a>
              </p>
            </div>
            <p>
              We will respond to all privacy-related inquiries within 30 days.
            </p>
          </Section>

          <Section title="App Store Privacy Labels">
            <p>
              For transparency, here is how we declare our data practices to the
              app stores:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-slate-800">
                  Apple App Store Privacy Label:
                </strong>{" "}
                &ldquo;The developer does not collect any data from this
                app.&rdquo;
              </li>
              <li>
                <strong className="text-slate-800">
                  Google Play Data Safety:
                </strong>{" "}
                &ldquo;No data collected. No data shared with third
                parties.&rdquo;
              </li>
            </ul>
          </Section>
        </div>

        <p className="text-center text-slate-500 mt-10 text-base">
          &copy; 2026 Jakub Havelka. All rights reserved.
        </p>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 text-center text-base">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-4">
            <strong>Disclaimer:</strong> This app is educational and based on
            lived experience and modern addiction science. It is not medical
            advice and is not a substitute for professional treatment, therapy,
            or emergency support.
          </p>
          <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
            <Link
              href="/terms"
              className="text-slate-300 hover:text-white transition"
            >
              Guide Terms of Service
            </Link>
            <span aria-hidden="true" className="text-slate-500">
              /
            </span>
            <Link
              href="/privacy"
              className="text-slate-300 hover:text-white transition"
            >
              Guide Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-slate-500">
              /
            </span>
            <Link
              href="/app-terms"
              className="text-slate-300 hover:text-white transition"
            >
              App Terms of Use
            </Link>
            <span aria-hidden="true" className="text-slate-500">
              /
            </span>
            <Link
              href="/app-privacy"
              className="text-slate-300 hover:text-white transition"
            >
              App Privacy Policy
            </Link>
          </div>
          <p className="mb-4">
            Contact:{" "}
            <a
              href="mailto:jacob@cravingtoolkit.com"
              className="text-slate-300 hover:text-white transition"
            >
              jacob@cravingtoolkit.com
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} Craving Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
