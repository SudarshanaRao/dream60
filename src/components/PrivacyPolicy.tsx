import { ArrowLeft, Shield, Eye, Lock, Database, Server, Globe, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';
import { AnimatedBackground } from './AnimatedBackground';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <AnimatedBackground />

      {/* Header */}
      <motion.header 
        className="bg-white/95 backdrop-blur-md border-b border-purple-200 shadow-sm relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button
              onClick={onBack}
              variant="ghost"
              size="sm"
              className="text-purple-600 hover:text-purple-800 hover:bg-purple-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Game
            </Button>
            <div className="w-px h-6 bg-purple-300"></div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-purple-600" />
              <h1 className="text-2xl font-bold text-purple-800">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </motion.header>

      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto space-y-4 sm:space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Privacy Promise */}
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-300 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start space-x-3">
                <Lock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-800 mb-2">Our Privacy Promise</h3>
                  <p className="text-sm sm:text-base text-green-700">
                    Dream60 is committed to protecting your privacy and personal information. 
                    We collect only what's necessary to provide our auction services and never sell your data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-4 sm:space-y-6">
            {/* 1. Information We Collect */}
            <Card className="bg-white border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-white border-b border-purple-100">
                <CardTitle className="text-lg sm:text-xl text-purple-800 flex items-center space-x-2">
                  <Database className="w-5 h-5 text-purple-600" />
                  <span>1. Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 text-sm sm:text-base">
                <div className="space-y-3">
                  <div className="bg-purple-50 border-l-4 border-purple-400 p-3 rounded">
                    <h3 className="font-semibold text-purple-800 mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-1 text-purple-700 text-sm">
                      <li>Full name and date of birth (for age verification)</li>
                      <li>Email address and phone number</li>
                      <li>Government-issued ID for identity verification</li>
                      <li>Mailing address for prize delivery</li>
                      <li>Tax identification numbers (for winnings over $600)</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                    <h3 className="font-semibold text-green-800 mb-2">Financial Information</h3>
                    <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                      <li>Payment method details (encrypted and tokenized)</li>
                      <li>Billing addresses and payment history</li>
                      <li>Transaction records and timestamps</li>
                      <li>Prize winnings and tax reporting data</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                    <h3 className="font-semibold text-blue-800 mb-2">Gaming and Usage Data</h3>
                    <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                      <li>Auction participation history and patterns</li>
                      <li>Bidding strategies and timing preferences</li>
                      <li>Win/loss records and statistics</li>
                      <li>Session duration and platform interactions</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <h3 className="font-semibold text-yellow-800 mb-2">Technical Information</h3>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                      <li>IP addresses and geolocation data</li>
                      <li>Browser type, version, and settings</li>
                      <li>Device information and operating system</li>
                      <li>Error logs and performance metrics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. How We Use Your Information */}
            <Card className="bg-white border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-white border-b border-blue-100">
                <CardTitle className="text-lg sm:text-xl text-blue-800 flex items-center space-x-2">
                  <Server className="w-5 h-5 text-blue-600" />
                  <span>2. How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 text-sm sm:text-base">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <h4 className="font-semibold text-purple-800 mb-2 text-sm">Service Operations</h4>
                    <ul className="list-disc list-inside space-y-1 text-purple-700 text-xs">
                      <li>Processing auction entries and payments</li>
                      <li>Verifying user identity</li>
                      <li>Delivering prizes and winnings</li>
                      <li>Customer support</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <h4 className="font-semibold text-green-800 mb-2 text-sm">Communications</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-700 text-xs">
                      <li>Auction results and notifications</li>
                      <li>Account security alerts</li>
                      <li>Platform updates</li>
                      <li>Marketing (with consent)</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">Platform Improvement</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-700 text-xs">
                      <li>Analyzing user behavior</li>
                      <li>Developing new features</li>
                      <li>Optimizing performance</li>
                      <li>Market research</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                    <h4 className="font-semibold text-yellow-800 mb-2 text-sm">Legal Compliance</h4>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700 text-xs">
                      <li>Tax reporting</li>
                      <li>Anti-money laundering (AML)</li>
                      <li>KYC verification</li>
                      <li>Legal requests</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3. Information Sharing */}
            <Card className="bg-white border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-white border-b border-yellow-100">
                <CardTitle className="text-lg sm:text-xl text-yellow-800 flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-yellow-600" />
                  <span>3. Information Sharing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-3 text-sm sm:text-base text-purple-700">
                <p><strong className="text-purple-800">3.1 Service Providers:</strong> Payment processors, identity verification services, cloud hosting, email services, and prize fulfillment partners.</p>
                <p><strong className="text-purple-800">3.2 Legal Requirements:</strong> Tax authorities, law enforcement, regulatory bodies, courts, and government agencies as required by law.</p>
                <p><strong className="text-purple-800">3.3 Business Operations:</strong> Potential buyers in case of business sale, professional advisors, fraud prevention networks.</p>
                <p><strong className="text-purple-800">3.4 User Consent:</strong> Marketing partners and social media (only with explicit consent).</p>
              </CardContent>
            </Card>

            {/* 4. Data Security */}
            <Card className="bg-white border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-50 to-white border-b border-green-100">
                <CardTitle className="text-lg sm:text-xl text-green-800 flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-green-600" />
                  <span>4. Data Security and Protection</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 text-sm sm:text-base">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <h4 className="font-semibold text-green-800 mb-2 text-sm">Technical Safeguards</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-700 text-xs">
                      <li>AES-256 encryption at rest</li>
                      <li>TLS 1.3 encryption in transit</li>
                      <li>Secure payment tokenization</li>
                      <li>Multi-factor authentication</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">Access Controls</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-700 text-xs">
                      <li>Role-based access control</li>
                      <li>24/7 security monitoring</li>
                      <li>Automated threat detection</li>
                      <li>Regular access audits</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <h4 className="font-semibold text-purple-800 mb-2 text-sm">Infrastructure Security</h4>
                    <ul className="list-disc list-inside space-y-1 text-purple-700 text-xs">
                      <li>SOC 2 Type II certified data centers</li>
                      <li>Redundant disaster recovery</li>
                      <li>DDoS protection</li>
                      <li>Regular penetration testing</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <h4 className="font-semibold text-red-800 mb-2 text-sm">Incident Response</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-700 text-xs">
                      <li>24-hour breach notification</li>
                      <li>Forensic investigation</li>
                      <li>Customer notification protocols</li>
                      <li>Business continuity plans</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 5. Your Privacy Rights */}
            <Card className="bg-white border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-white border-b border-purple-100">
                <CardTitle className="text-lg sm:text-xl text-purple-800 flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-purple-600" />
                  <span>5. Your Privacy Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 text-sm sm:text-base">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">Access & Portability</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-700 text-xs">
                      <li>Request complete data copy</li>
                      <li>Download in readable formats</li>
                      <li>View transaction history</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded p-3">
                    <h4 className="font-semibold text-green-800 mb-2 text-sm">Correction & Updates</h4>
                    <ul className="list-disc list-inside space-y-1 text-green-700 text-xs">
                      <li>Update profile information</li>
                      <li>Correct inaccurate data</li>
                      <li>Modify preferences</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <h4 className="font-semibold text-red-800 mb-2 text-sm">Deletion & Restriction</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-700 text-xs">
                      <li>Request account deletion</li>
                      <li>Restrict data processing</li>
                      <li>Withdraw consent</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <h4 className="font-semibold text-purple-800 mb-2 text-sm">Communication Control</h4>
                    <ul className="list-disc list-inside space-y-1 text-purple-700 text-xs">
                      <li>Unsubscribe from marketing</li>
                      <li>Adjust notifications</li>
                      <li>Manage cookie preferences</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 6-10 Condensed */}
            <Card className="bg-white border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-white border-b border-purple-100">
                <CardTitle className="text-lg sm:text-xl text-purple-800">6-10. Additional Privacy Terms</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-3 text-sm sm:text-base text-purple-700">
                <p><strong className="text-purple-800">6. Cookies:</strong> Essential cookies for authentication, analytics cookies for usage statistics, and marketing cookies (with consent). Manage via browser settings.</p>
                <p><strong className="text-purple-800">7. Data Retention:</strong> Active account data retained while account is active. Transaction history kept for 7 years for tax compliance. Closed account data deleted after 90 days (except legal requirements).</p>
                <p><strong className="text-purple-800">8. International Transfers:</strong> We transfer data globally using Standard Contractual Clauses and other approved safeguarding mechanisms.</p>
                <p><strong className="text-purple-800">9. Children's Privacy:</strong> Strictly 18+ only. We implement age verification and do not knowingly collect data from minors.</p>
                <p><strong className="text-purple-800">10. Policy Changes:</strong> We provide 30 days notice for significant changes via email and platform notifications.</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Card */}
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-2">Questions About Privacy?</h3>
                  <p className="text-sm sm:text-base text-purple-700 mb-2">
                    If you have any questions about this privacy policy or how we handle your data, 
                    please contact us at:
                  </p>
                  <p className="text-sm text-purple-800 font-semibold">Email: privacy@dream60.com</p>
                  <p className="text-sm text-purple-600 mt-3">Last updated: December 5, 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}