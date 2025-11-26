import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors mb-8 font-medium"
        >
          <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-all">
             <ArrowLeft className="w-5 h-5" />
          </div>
          <span>Back to Home</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-slate-100"
        >
          <div className="flex items-center gap-4 mb-10 pb-10 border-b border-slate-100">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                <Shield className="w-8 h-8" />
            </div>
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Privacy Policy</h1>
                <p className="text-slate-500 mt-1">Effective date: 2025-11-26</p>
            </div>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section>
              <p>
                This privacy policy applies to the StayAfloat app (hereby referred to as "Application") for mobile devices that was created by Aditya Sharma (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Information Collection and Use</h2>
              <p className="mb-4">
                The Application collects information when you download and use it. This information may include information such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 bg-slate-50 p-6 rounded-2xl">
                <li>Your device's Internet Protocol address (e.g. IP address)</li>
                <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                <li>The time spent on the Application</li>
                <li>The operating system you use on your mobile device</li>
              </ul>
              <p className="mb-4">
                The Application does not gather precise information about the location of your mobile device.
              </p>
              <p className="mb-4">
                The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Geolocation Services:</strong> The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li>
                <li><strong>Analytics and Improvements:</strong> Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li>
                <li><strong>Third-Party Services:</strong> Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li>
              </ul>
              <p>
                The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.
              </p>
              <p className="mt-4">
                For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to <span className="text-primary-600 font-medium">adsharma122@gmail.com</span>. The information that the Service Provider request will be retained by them and used as described in this privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Third Party Access</h2>
              <p className="mb-4">
                Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.
              </p>
              <p className="mb-4">
                Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
                    AdMob
                  </a>
                </li>
              </ul>
              <p className="mb-4">The Service Provider may disclose User Provided and Automatically Collected Information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Opt-Out Rights</h2>
              <p>
                You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Data Retention Policy</h2>
              <p>
                The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:adsharma122@gmail.com" className="text-primary-600 hover:underline">adsharma122@gmail.com</a> and they will respond in a reasonable time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Children</h2>
              <p className="mb-4">
                The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.
              </p>
              <p>
                The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (<a href="mailto:adsharma122@gmail.com" className="text-primary-600 hover:underline">adsharma122@gmail.com</a>) so that they will be able to take the necessary actions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Security</h2>
              <p>
                The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Changes</h2>
              <p>
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Your Consent</h2>
              <p>
                By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:adsharma122@gmail.com" className="text-primary-600 hover:underline font-bold">adsharma122@gmail.com</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;