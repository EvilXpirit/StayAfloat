import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface AccountDeletionProps {
  onBack: () => void;
}

const AccountDeletion: React.FC<AccountDeletionProps> = ({ onBack }) => {
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
            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
                <Trash2 className="w-8 h-8" />
            </div>
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Account Deletion</h1>
                <p className="text-slate-500 mt-1">StayAfloat Data Safety & Retention</p>
            </div>
          </div>

          <div className="space-y-10 text-slate-600 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Account Deletion Request</h2>
              <p className="mb-4">
                At <strong>StayAfloat</strong>, we value your privacy and control over your personal data. If you wish to delete your account and all associated data, you can do so directly within the application.
              </p>
              <p className="bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100 text-sm">
                <strong>Note:</strong> This action is permanent and cannot be undone. Once completed, you will lose access to your profile, progress, and all earned rewards.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6">How to Delete Your Account</h2>
              <div className="space-y-4">
                {[
                  "Open the StayAfloat app on your mobile device.",
                  "Open the Drawer Navigation (Menu) by tapping the icon in the top corner.",
                  "Select 'Settings' from the menu options.",
                  "Scroll to the bottom of the Settings page to find the 'Delete Account' button.",
                  "Tap 'Delete Account' and select 'Continue' on the prompt.",
                  "For security purposes, you will be asked to re-login to verify your identity.",
                  "A final confirmation screen will appear. Click 'Yes' to permanently delete your account."
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center text-sm border border-slate-200">
                      {index + 1}
                    </div>
                    <p className="pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                    <div className="flex items-center gap-3 mb-4">
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                        <h3 className="font-bold text-slate-900">Data Deleted Permanently</h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                            User Authentication Credentials
                        </li>
                        <li className="flex gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                            Personal Profile Information
                        </li>
                        <li className="flex gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                            All In-app Currency (Coins/Points)
                        </li>
                        <li className="flex gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                            Game Progress & High Scores
                        </li>
                        <li className="flex gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                            Saved Favorites (Quotes, Affirmations)
                        </li>
                    </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                    <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        <h3 className="font-bold text-slate-900">Data Retention Policy</h3>
                    </div>
                    <p className="text-sm text-slate-700 mb-4">
                        We adhere to strict data safety rules:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                            <span><strong>Immediate Deletion:</strong> All personal data is removed from our live databases immediately upon confirmation.</span>
                        </li>
                        <li className="flex gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                            <span><strong>No Hidden Retention:</strong> We do not keep shadow copies of your profile or chat history after you request deletion.</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Support</h2>
              <p>
                If you encounter any issues deleting your account or have questions about your data, please contact our support team at <a href="mailto:adsharma122@gmail.com" className="text-primary-600 hover:underline font-bold">adsharma122@gmail.com</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccountDeletion;