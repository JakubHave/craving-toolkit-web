import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "App Terms of Use",
  description:
    "Terms of Use for the Craving Toolkit — Recovery Tools mobile app. Read our policies on subscriptions, content use, and acceptable conduct.",
  alternates: {
    canonical: "https://www.cravingtoolkit.com/app-terms",
  },
  openGraph: {
    url: "https://www.cravingtoolkit.com/app-terms",
  },
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

export default function AppTermsPage() {
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
              className="text-base font-semibold text-slate-700 hover:text-emerald-700 transition"
            >
              Articles
            </Link>
            <Link
              href="/calculators"
              className="text-base font-semibold text-slate-700 hover:text-emerald-700 transition"
            >
              Calculators
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-1.5 rounded-full transition-colors whitespace-nowrap"
            >
              Get the Guide
            </Link>
          </div>
        </div>
      </nav>

      <header className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <Smartphone className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          App Terms of Use
        </h1>
        <p className="text-lg font-semibold text-slate-700 mb-4">
          Craving Toolkit — Recovery Tools
        </p>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          These terms govern your use of the Craving Toolkit mobile application
          for iOS and Android.
        </p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Last updated April 4, 2026
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-8 md:p-10 mb-6">
          <h2 className="text-xl font-bold text-amber-900 mb-4 uppercase tracking-wide">
            Important — Please read carefully before using this app
          </h2>
          <p className="text-lg leading-relaxed text-amber-800 font-semibold">
            If you are experiencing a medical or mental health emergency,
            suicidal thoughts, an overdose, severe withdrawal, or a
            substance-related crisis, stop reading and immediately call
            emergency services: <strong>112</strong> (EU),{" "}
            <strong>911</strong> (US/Canada), or your local emergency number.
            This app is not an emergency service and cannot provide crisis
            intervention.
          </p>
        </div>

        <div className="bg-emerald-900 text-emerald-50 rounded-3xl p-8 md:p-10 mb-10 shadow-xl shadow-emerald-950/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-emerald-100 mb-6">
            <span className="text-white">App Terms of Use</span>
            <span aria-hidden="true">/</span>
            <Link
              href="/app-privacy"
              className="hover:text-white transition"
            >
              App Privacy Policy
            </Link>
          </div>
          <p className="text-lg leading-relaxed text-emerald-100">
            Please read these terms carefully before downloading, installing, or
            using the Craving Toolkit mobile application. They clarify how the
            app may be used, its limitations, and the important health
            disclaimers that apply.
          </p>
        </div>

        <div className="space-y-6">
          <Section title="1. Agreement to Terms">
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally
              binding agreement between you (&ldquo;User,&rdquo;
              &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Jakub Havelka, an
              individual residing in the Slovak Republic, with an address at
              Račianska 61, Bratislava, 831 02, Slovakia (&ldquo;Developer,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            </p>
            <p>
              By downloading, installing, accessing, or using the Craving
              Toolkit — Recovery Tools mobile application (&ldquo;App&rdquo;),
              you acknowledge that you have read, understood, and agree to be
              bound by these Terms. If you do not agree to these Terms, do not
              download, install, or use the App. Uninstall the App immediately.
            </p>
            <p>
              We reserve the right to update or modify these Terms at any time.
              Changes become effective upon publication of the updated Terms
              within the App or on our website at cravingtoolkit.com. Your
              continued use of the App after any such changes constitutes your
              acceptance of the revised Terms. We encourage you to review these
              Terms periodically.
            </p>
          </Section>

          <Section title="2. Description of the App">
            <p>
              Craving Toolkit is a self-help educational mobile application
              designed to provide general information, exercises, and practical
              tools related to craving management and behavioral change. The App
              is based on lived experience, publicly available recovery
              frameworks, and principles from modern behavioral science
              literature.
            </p>
            <p>
              The App is intended as a{" "}
              <strong className="text-slate-800">
                supplementary educational resource only
              </strong>
              . It is designed to complement — not replace — professional
              treatment, therapy, medical care, counseling, peer support groups,
              or other forms of professional or clinical support.
            </p>
          </Section>

          <Section title="3. Health and Medical Disclaimer">
            <p className="font-semibold text-slate-700">
              THIS SECTION IS CRITICALLY IMPORTANT. PLEASE READ IT IN ITS
              ENTIRETY.
            </p>
            <p className="font-semibold text-slate-700">
              THE APP IS PROVIDED FOR EDUCATIONAL AND INFORMATIONAL PURPOSES
              ONLY. THE APP IS NOT A MEDICAL DEVICE. THE APP DOES NOT PROVIDE
              MEDICAL ADVICE, DIAGNOSIS, TREATMENT, OR THERAPY OF ANY KIND. THE
              APP IS NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE,
              PSYCHOLOGICAL COUNSELING, ADDICTION TREATMENT, PSYCHIATRIC CARE,
              DETOXIFICATION, REHABILITATION, OR ANY FORM OF PROFESSIONAL HEALTH
              SERVICE.
            </p>
            <p className="font-semibold text-slate-700">
              THE DEVELOPER IS NOT A LICENSED PHYSICIAN, PSYCHOLOGIST,
              PSYCHIATRIST, THERAPIST, COUNSELOR, OR HEALTHCARE PROVIDER. THE
              CONTENT AND TOOLS PROVIDED WITHIN THE APP DO NOT CREATE A
              PROVIDER-PATIENT, THERAPIST-CLIENT, OR ANY OTHER PROFESSIONAL
              HEALTHCARE RELATIONSHIP BETWEEN YOU AND THE DEVELOPER.
            </p>
            <p>
              <strong className="text-slate-800">
                You acknowledge and agree that:
              </strong>
            </p>
            <div className="space-y-3 pl-1">
              <p>
                (a) The App does not and cannot diagnose, treat, cure, prevent,
                or manage any disease, condition, disorder, or addiction.
              </p>
              <p>
                (b) No content, feature, exercise, tool, or information provided
                through the App should be interpreted as medical advice, clinical
                guidance, or a professional recommendation.
              </p>
              <p>
                (c) You should never disregard professional medical or mental
                health advice, delay seeking professional treatment, or
                discontinue prescribed medication or treatment because of any
                information or tool provided through this App.
              </p>
              <p>
                (d) You should always consult with a qualified healthcare
                professional before making any decisions related to your health,
                addiction, recovery, medication, or treatment plan.
              </p>
              <p>
                (e) Recovery from addiction and compulsive behaviors can involve
                serious medical risks, including but not limited to withdrawal
                symptoms, medical emergencies, and mental health crises. The App
                is not equipped to address any of these situations.
              </p>
              <p>
                (f) Any exercises, techniques, or suggestions provided in the
                App (including but not limited to breathing exercises, physical
                counter-actions, urge surfing, and delay techniques) are general
                educational information and may not be appropriate for your
                specific medical condition, physical health, or circumstances.
                You perform any exercise or activity suggested by the App
                entirely at your own risk and should consult your physician
                before engaging in any physical activity.
              </p>
              <p>
                (g) The App may contain references to scientific research,
                authors, books, and recovery frameworks. These references are
                provided for educational context only and do not constitute
                endorsements, and the Developer makes no representations
                regarding the accuracy, completeness, or applicability of such
                referenced materials to your specific situation.
              </p>
            </div>
          </Section>

          <Section title="4. Crisis Resources">
            <p>
              The App includes tools designed for use during moments of craving
              or emotional distress. However, the App is{" "}
              <strong className="text-slate-800">not</strong> a crisis service,
              helpline, or emergency intervention tool.
            </p>
            <p>
              If you or someone you know is in immediate danger, experiencing a
              mental health crisis, having suicidal thoughts, at risk of
              overdose, or experiencing severe withdrawal symptoms, please
              contact professional emergency services immediately:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-slate-800">
                  European Emergency Number:
                </strong>{" "}
                112
              </li>
              <li>
                <strong className="text-slate-800">
                  United States / Canada:
                </strong>{" "}
                911
              </li>
              <li>
                <strong className="text-slate-800">
                  Suicide &amp; Crisis Lifeline (US):
                </strong>{" "}
                988
              </li>
              <li>
                <strong className="text-slate-800">
                  Crisis Text Line (US):
                </strong>{" "}
                Text HOME to 741741
              </li>
              <li>
                <strong className="text-slate-800">
                  Samaritans (UK/Ireland):
                </strong>{" "}
                116 123
              </li>
            </ul>
            <p>
              For addiction-specific support, please consult: SMART Recovery
              (smartrecovery.org), Alcoholics Anonymous (aa.org), Narcotics
              Anonymous (na.org), or your local addiction treatment services.
            </p>
            <p>
              The inclusion of these resources does not create any obligation,
              duty, or liability on the part of the Developer regarding crisis
              intervention or emergency response.
            </p>
          </Section>

          <Section title="5. Eligibility and Age Restrictions">
            <p>
              The App is intended for users aged{" "}
              <strong className="text-slate-800">16 years and older</strong>. By
              using the App, you represent and warrant that you are at least 16
              years of age. If you are under 16 years of age, you may not
              download, install, or use the App.
            </p>
            <p>
              If you are between the ages of 16 and 18 (or the age of legal
              majority in your jurisdiction, whichever is higher), you represent
              that your parent or legal guardian has reviewed and agrees to these
              Terms on your behalf.
            </p>
            <p>
              The Developer does not knowingly provide the App to children under
              16 years of age.
            </p>
          </Section>

          <Section title="6. License Grant and Restrictions">
            <p>
              Subject to your compliance with these Terms, the Developer grants
              you a limited, non-exclusive, non-transferable, non-sublicensable,
              revocable license to download, install, and use the App on a
              mobile device that you own or control, solely for your personal,
              non-commercial use.
            </p>
            <p>
              <strong className="text-slate-800">You may not:</strong>
            </p>
            <div className="space-y-3 pl-1">
              <p>
                (a) Copy, reproduce, distribute, publish, display, perform,
                transmit, or otherwise make available any part of the App or its
                content to any third party.
              </p>
              <p>
                (b) Modify, adapt, translate, reverse engineer, decompile,
                disassemble, or create derivative works based on the App or any
                part thereof.
              </p>
              <p>
                (c) Remove, alter, or obscure any copyright notice, trademark,
                or other proprietary rights notice displayed in or on the App.
              </p>
              <p>
                (d) Use the App for any commercial purpose, including but not
                limited to creating competing products or services, reselling,
                or sublicensing.
              </p>
              <p>
                (e) Use the App in any manner that violates applicable laws,
                regulations, or these Terms.
              </p>
              <p>
                (f) Use the App to develop, train, or improve any artificial
                intelligence, machine learning model, or similar technology.
              </p>
              <p>
                (g) Use automated means (bots, scrapers, or similar tools) to
                access or interact with the App.
              </p>
              <p>
                (h) Attempt to gain unauthorized access to any portion of the
                App, its systems, or its data.
              </p>
            </div>
            <p>
              This license is effective until terminated. The Developer may
              terminate this license at any time without notice if you breach
              any provision of these Terms. Upon termination, you must cease all
              use of the App and delete all copies from your devices.
            </p>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              The App, including but not limited to its design, layout, visual
              elements, animations, text, exercises, guided flows, recovery
              frameworks, lie/truth card content, educational content, sound
              elements, user interface, icons, graphics, code, and all other
              materials (&ldquo;Content&rdquo;), is the exclusive property of
              the Developer and is protected by copyright, trademark, and other
              intellectual property laws of the Slovak Republic, the European
              Union, and international treaties.
            </p>
            <p>
              All rights not expressly granted in these Terms are reserved by
              the Developer.
            </p>
            <p>
              &ldquo;Craving Toolkit&rdquo; and associated logos, names, and
              visual marks are trademarks or trade names of the Developer. You
              may not use these marks without prior written consent.
            </p>
            <p>
              The App may reference third-party authors, books, research, or
              recovery frameworks (such as works by Judson Brewer, Anna Lembke,
              Marc Lewis, Gabor Maté, Charles Duhigg, and others) for
              educational context. All such names, titles, and frameworks are the
              property of their respective owners and are referenced under fair
              use principles for educational commentary. The Developer is not
              affiliated with, endorsed by, or sponsored by any of these authors
              or their publishers.
            </p>
          </Section>

          <Section title="8. User Content">
            <p>
              The App allows you to create personal content including but not
              limited to recovery cards, voice recordings, craving log entries,
              daily check-ins, custom lie/truth pairs, and other personal data
              (&ldquo;User Content&rdquo;).
            </p>
            <p>
              <strong className="text-slate-800">Ownership:</strong> You retain
              all ownership rights in your User Content. Because all User
              Content is created, stored, and processed exclusively on your
              device and is never transmitted to, accessed by, collected by, or
              stored on any server or system operated by the Developer, the
              Developer claims no ownership, license, or any other rights over
              your User Content.
            </p>
            <p>
              <strong className="text-slate-800">Your responsibility:</strong>{" "}
              You are solely responsible for all User Content you create within
              the App. The Developer does not review, moderate, approve, or
              endorse any User Content.
            </p>
            <p>
              <strong className="text-slate-800">
                No backup or recovery:
              </strong>{" "}
              The Developer does not and cannot access, back up, recover, or
              restore your User Content. All User Content is stored locally on
              your device only. If you uninstall the App, factory reset your
              device, or otherwise lose access to your device, all User Content
              will be permanently and irreversibly deleted. The Developer shall
              have no liability whatsoever for any loss, deletion, corruption, or
              inaccessibility of your User Content, regardless of the cause.
            </p>
            <p>
              <strong className="text-slate-800">Device backups:</strong> Your
              device&apos;s operating system may include User Content in
              automated device backups (such as iCloud or Google Backup) if you
              have enabled such features. These backups are governed by the terms
              and privacy policies of Apple or Google, respectively, and are
              outside the Developer&apos;s control.
            </p>
          </Section>

          <Section title="9. Assumption of Risk">
            <p className="font-semibold text-slate-700">
              YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE APP IS
              ENTIRELY AT YOUR OWN RISK.
            </p>
            <p>You understand and acknowledge that:</p>
            <div className="space-y-3 pl-1">
              <p>
                (a) Addiction and recovery involve serious physical,
                psychological, and emotional risks. The App is not equipped to
                assess, mitigate, or manage these risks.
              </p>
              <p>
                (b) The exercises and tools provided in the App (including
                physical counter-actions such as squats, push-ups, sprinting,
                and grip exercises; breathing exercises; and urge surfing)
                involve physical activity that may pose risks to your health. You
                should consult a medical professional before engaging in any
                physical exercise.
              </p>
              <p>
                (c) The App may be used during moments of emotional distress,
                craving, or crisis. The Developer makes no representation that
                the App or any of its tools will be effective in managing,
                reducing, or eliminating cravings, addictive behaviors, or any
                related conditions.
              </p>
              <p>
                (d) You are solely responsible for seeking appropriate
                professional help for your specific situation. The App does not
                replace and should not delay professional treatment.
              </p>
              <p>
                (e) Any decisions you make regarding your recovery, health,
                behavior, or treatment based on information or tools provided by
                the App are made entirely at your own risk and discretion.
              </p>
            </div>
          </Section>

          <Section title="10. Disclaimers and No Warranty">
            <p className="font-semibold text-slate-700">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APP IS
              PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
              BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED,
              STATUTORY, OR OTHERWISE.
            </p>
            <p className="font-semibold text-slate-700">
              THE DEVELOPER EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT
              NOT LIMITED TO:
            </p>
            <div className="space-y-3 pl-1">
              <p>
                (a) IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p>
                (b) ANY WARRANTY THAT THE APP WILL MEET YOUR REQUIREMENTS OR
                EXPECTATIONS.
              </p>
              <p>
                (c) ANY WARRANTY THAT THE APP WILL BE UNINTERRUPTED, TIMELY,
                SECURE, ACCURATE, RELIABLE, COMPLETE, OR ERROR-FREE.
              </p>
              <p>
                (d) ANY WARRANTY REGARDING THE RESULTS THAT MAY BE OBTAINED FROM
                THE USE OF THE APP.
              </p>
              <p>
                (e) ANY WARRANTY THAT THE APP WILL BE COMPATIBLE WITH YOUR
                DEVICE OR OPERATING SYSTEM.
              </p>
              <p>
                (f) ANY WARRANTY THAT THE CONTENT, TOOLS, EXERCISES, OR
                INFORMATION PROVIDED IN THE APP ARE ACCURATE, COMPLETE, CURRENT,
                RELIABLE, OR APPROPRIATE FOR ANY PARTICULAR PURPOSE OR
                INDIVIDUAL.
              </p>
              <p>
                (g) ANY WARRANTY THAT THE APP WILL BE EFFECTIVE IN MANAGING,
                REDUCING, OR ELIMINATING CRAVINGS, ADDICTIVE BEHAVIORS, OR ANY
                RELATED CONDITION.
              </p>
            </div>
            <p>
              No advice or information, whether oral or written, obtained by you
              from the Developer or through the App shall create any warranty not
              expressly stated in these Terms.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of implied
              warranties. In such jurisdictions, the above exclusions may not
              apply to you to the extent prohibited by applicable law.
            </p>
          </Section>

          <Section title="11. Limitation of Liability">
            <p className="font-semibold text-slate-700">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
              SHALL THE DEVELOPER, ITS AFFILIATES, LICENSORS, OR SERVICE
              PROVIDERS BE LIABLE FOR ANY OF THE FOLLOWING, WHETHER BASED ON
              WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY,
              OR ANY OTHER LEGAL THEORY, WHETHER OR NOT THE DEVELOPER HAS BEEN
              ADVISED OF THE POSSIBILITY OF SUCH DAMAGES:
            </p>
            <div className="space-y-3 pl-1">
              <p>
                (a) ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY,
                OR PUNITIVE DAMAGES.
              </p>
              <p>
                (b) ANY LOSS OF PROFITS, REVENUE, DATA, USE, GOODWILL, OR OTHER
                INTANGIBLE LOSSES.
              </p>
              <p>
                (c) ANY PERSONAL INJURY OR PROPERTY DAMAGE RESULTING FROM YOUR
                USE OF OR INABILITY TO USE THE APP.
              </p>
              <p>
                (d) ANY HARM, DAMAGE, OR ADVERSE OUTCOME RELATED TO YOUR
                ADDICTION, RECOVERY, HEALTH, OR WELLBEING, WHETHER OR NOT
                RELATED TO YOUR USE OF THE APP.
              </p>
              <p>
                (e) ANY UNAUTHORIZED ACCESS TO, ALTERATION OF, OR LOSS OF YOUR
                USER CONTENT OR DATA STORED ON YOUR DEVICE.
              </p>
              <p>
                (f) ANY DAMAGES ARISING FROM YOUR RELIANCE ON ANY CONTENT, TOOL,
                EXERCISE, OR INFORMATION PROVIDED THROUGH THE APP.
              </p>
            </div>
            <p className="font-semibold text-slate-700">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE
              DEVELOPER&apos;S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS
              ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE APP
              SHALL NOT EXCEED THE GREATER OF: (I) THE AMOUNT YOU HAVE ACTUALLY
              PAID TO THE DEVELOPER FOR THE APP IN THE TWELVE (12) MONTHS
              IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (II)
              TEN EUROS (&euro;10).
            </p>
            <p>
              <strong className="text-slate-800">
                EU consumer protection notice:
              </strong>{" "}
              Nothing in these Terms shall limit or exclude liability that cannot
              be limited or excluded under applicable law, including but not
              limited to liability for death or personal injury caused by
              negligence, fraud, or fraudulent misrepresentation.
            </p>
          </Section>

          <Section title="12. Indemnification">
            <p>
              To the maximum extent permitted by applicable law, you agree to
              defend, indemnify, and hold harmless the Developer and its
              affiliates, officers, agents, and licensors from and against any
              and all claims, damages, obligations, losses, liabilities, costs,
              and expenses (including reasonable attorneys&apos; fees) arising
              from or relating to:
            </p>
            <div className="space-y-3 pl-1">
              <p>(a) Your use of or inability to use the App.</p>
              <p>(b) Your violation of these Terms.</p>
              <p>
                (c) Your violation of any applicable law, regulation, or
                third-party right.
              </p>
              <p>(d) Any User Content you create within the App.</p>
              <p>
                (e) Any actions you take or fail to take based on information or
                tools provided through the App.
              </p>
            </div>
          </Section>

          <Section title="13. Subscriptions and In-App Purchases">
            <p>
              The App may offer optional premium features available through paid
              subscriptions or in-app purchases (&ldquo;Premium
              Features&rdquo;).
            </p>
            <p>
              All payment processing for Premium Features is handled exclusively
              by Apple (through the App Store) or Google (through Google Play),
              depending on the platform on which you access the App. The
              Developer does not directly collect, process, or store any payment
              information, credit card numbers, or financial data.
            </p>
            <p>
              Subscription terms, pricing, auto-renewal mechanics, billing
              periods, and cancellation procedures are governed by the policies
              of the platform through which you made the purchase:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-slate-800">Apple App Store:</strong>{" "}
                Subscriptions are managed through your Apple ID settings. You may
                cancel at any time through your device Settings → Apple ID →
                Subscriptions. Refer to Apple&apos;s subscription terms at
                apple.com/legal.
              </li>
              <li>
                <strong className="text-slate-800">Google Play Store:</strong>{" "}
                Subscriptions are managed through the Google Play Store app. You
                may cancel at any time through Google Play → Subscriptions. Refer
                to Google&apos;s subscription terms at
                play.google.com/about/play-terms.
              </li>
            </ul>
            <p>
              Prices are displayed in the App before purchase and may vary by
              region. The Developer reserves the right to modify pricing for
              Premium Features at any time. Price changes will not affect active
              subscription periods.
            </p>
            <p>
              <strong className="text-slate-800">Refunds</strong> are handled
              exclusively by the applicable platform (Apple or Google) in
              accordance with their respective refund policies.
            </p>
          </Section>

          <Section title="14. Acceptable Use">
            <p>You agree not to use the App in any manner that:</p>
            <div className="space-y-3 pl-1">
              <p>
                (a) Violates any applicable law, regulation, or legal obligation.
              </p>
              <p>
                (b) Infringes or violates the intellectual property rights or
                other rights of the Developer or any third party.
              </p>
              <p>
                (c) Is harmful, fraudulent, deceptive, threatening, abusive,
                harassing, defamatory, or otherwise objectionable.
              </p>
              <p>
                (d) Attempts to interfere with, compromise, or disrupt the
                integrity, security, or proper functioning of the App.
              </p>
              <p>
                (e) Involves using the App to develop competing products,
                services, or applications.
              </p>
            </div>
          </Section>

          <Section title="15. Termination">
            <p>
              The Developer may terminate or suspend your access to the App at
              any time, with or without cause, and with or without notice.
            </p>
            <p>
              You may terminate your use of the App at any time by uninstalling
              the App from your device. Upon uninstallation, all User Content
              stored locally on your device by the App will be permanently
              deleted.
            </p>
            <p>
              All provisions of these Terms which by their nature should survive
              termination shall survive, including but not limited to
              intellectual property provisions, warranty disclaimers, limitation
              of liability, indemnification, and governing law.
            </p>
          </Section>

          <Section title="16. Governing Law and Dispute Resolution">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the Slovak Republic, without regard to its conflict of
              law principles.
            </p>
            <p>
              Any dispute, claim, or controversy arising out of or relating to
              these Terms or your use of the App shall be submitted to the
              exclusive jurisdiction of the courts of the Slovak Republic, unless
              otherwise required by applicable mandatory consumer protection
              law.
            </p>
            <p>
              <strong className="text-slate-800">
                EU Online Dispute Resolution:
              </strong>{" "}
              In accordance with EU Regulation No. 524/2013, the European
              Commission provides an online dispute resolution platform,
              available at:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . You may use this platform for out-of-court resolution of
              disputes arising from online contracts.
            </p>
            <p>
              <strong className="text-slate-800">EU consumer rights:</strong> If
              you are a consumer residing in the European Union, nothing in these
              Terms shall deprive you of the protection afforded by mandatory
              provisions of the law of the EU Member State in which you reside,
              in accordance with Regulation (EC) No 593/2008 (Rome I).
            </p>
          </Section>

          <Section title="17. EU Consumer Rights — Withdrawal">
            <p>
              If you are a consumer residing in the European Union, you have the
              right to withdraw from a digital content contract within 14 days
              without giving any reason, in accordance with Directive
              2011/83/EU.
            </p>
            <p>
              However, you acknowledge and expressly consent that by initiating
              a download or purchase of digital content (including Premium
              Features), you request that performance begins immediately. You
              further acknowledge that by doing so, you waive your right of
              withdrawal once the digital content has been fully delivered or the
              subscription period has begun.
            </p>
            <p>
              For free features of the App, no withdrawal right applies as there
              is no financial transaction.
            </p>
          </Section>

          <Section title="18. Apple-Specific Provisions">
            <p>
              If you downloaded the App from the Apple App Store, the following
              additional terms apply:
            </p>
            <div className="space-y-3 pl-1">
              <p>
                (a) These Terms are between you and the Developer only, and not
                with Apple Inc. (&ldquo;Apple&rdquo;). Apple is not responsible
                for the App or its content.
              </p>
              <p>
                (b) The license granted to you is limited to a non-transferable
                license to use the App on any Apple-branded device that you own
                or control, as permitted by the Usage Rules set forth in the
                Apple Media Services Terms of Service.
              </p>
              <p>
                (c) The Developer, not Apple, is solely responsible for the App,
                including but not limited to: (i) maintenance and support; (ii)
                any product warranties, whether express or implied; (iii) any
                product claims, including but not limited to product liability
                claims and claims related to health, medical disclaimers, or
                regulatory compliance; and (iv) any claims of intellectual
                property infringement.
              </p>
              <p>
                (d) In the event of any failure of the App to conform to any
                applicable warranty, you may notify Apple, and Apple will refund
                the purchase price (if any) for the App. To the maximum extent
                permitted by applicable law, Apple has no other warranty
                obligation with respect to the App.
              </p>
              <p>
                (e) The Developer, not Apple, is responsible for addressing any
                user or third-party claims relating to the App or your
                possession and/or use of the App.
              </p>
              <p>
                (f) In the event of any third-party claim that the App or your
                possession and use of the App infringes a third party&apos;s
                intellectual property rights, the Developer, not Apple, shall be
                solely responsible for the investigation, defense, settlement,
                and discharge of any such claim.
              </p>
              <p>
                (g) You represent and warrant that: (i) you are not located in a
                country subject to a U.S. Government embargo or designated as a
                &ldquo;terrorist supporting&rdquo; country; and (ii) you are not
                listed on any U.S. Government list of prohibited or restricted
                parties.
              </p>
              <p>
                (h) The Developer&apos;s contact information for questions,
                complaints, or claims is provided in Section 20 below.
              </p>
              <p>
                (i) Apple and its subsidiaries are third-party beneficiaries of
                these Terms. Upon your acceptance of these Terms, Apple will have
                the right (and will be deemed to have accepted the right) to
                enforce these Terms against you as a third-party beneficiary.
              </p>
            </div>
          </Section>

          <Section title="19. Severability and General Provisions">
            <p>
              If any provision of these Terms is found to be invalid, illegal, or
              unenforceable by a court of competent jurisdiction, such invalidity,
              illegality, or unenforceability shall not affect the remaining
              provisions, which shall remain in full force and effect.
            </p>
            <p>
              The failure of the Developer to exercise or enforce any right or
              provision of these Terms shall not constitute a waiver of such
              right or provision.
            </p>
            <p>
              These Terms constitute the entire agreement between you and the
              Developer regarding your use of the App, and supersede all prior
              agreements, understandings, and communications, whether written or
              oral.
            </p>
            <p>
              No joint venture, partnership, employment, or agency relationship
              exists between you and the Developer as a result of these Terms or
              your use of the App.
            </p>
          </Section>

          <Section title="20. Contact Information">
            <p>
              If you have any questions, concerns, or complaints regarding these
              Terms or the App, please contact us:
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
                <strong className="text-slate-800">Phone:</strong> 00421 903 902
                512
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
