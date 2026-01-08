
import React from 'react';
import { 
  FileText, 
  BarChart3, 
  ShieldAlert, 
  UserPlus, 
  ClipboardCheck, 
  Building2,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

const Services: React.FC = () => {
  const fullServices = [
    {
      title: "Corporate Tax Filing",
      description: "We handle your Company Income Tax (CIT) and Education Tax filings. No more last-minute stress with FIRS. We make sure you pay exactly what is required and not a kobo more.",
      icon: <FileText className="h-10 w-10 text-gold" />,
      features: ["FIRS Tax Clearance Certificate", "LIRS PAYE Management", "VAT Returns"]
    },
    {
      title: "Monthly Bookkeeping",
      description: "Do you know if your business is making a profit or loss? We record all your daily sales and expenses, providing a clear financial report every month.",
      icon: <BarChart3 className="h-10 w-10 text-gold" />,
      features: ["Daily Transaction Entry", "Profit & Loss Statements", "Bank Reconciliation"]
    },
    {
      title: "Audit & Fraud Prevention",
      description: "Keep your money safe. We check your accounts for errors or theft and suggest better ways to handle your cash and inventory.",
      icon: <ShieldAlert className="h-10 w-10 text-gold" />,
      features: ["Internal Control Setup", "Inventory Audit", "Risk Assessment"]
    },
    {
      title: "CAC Registration",
      description: "Start your business correctly. We help with Business Name, Company (LLC), and NGO registrations with the Corporate Affairs Commission.",
      icon: <Building2 className="h-10 w-10 text-gold" />,
      features: ["Post-Incorporation Filings", "Annual Returns", "Director Changes"]
    },
    {
      title: "Payroll Management",
      description: "Calculate salaries, tax deductions, and pensions for your staff automatically. We provide professional payslips and handle all staff tax matters.",
      icon: <UserPlus className="h-10 w-10 text-gold" />,
      features: ["Staff Payslips", "Pension Fund Management", "NSITF Compliance"]
    },
    {
      title: "Compliance Health Check",
      description: "Is your business in trouble with regulators? We do a deep check to see where you are lacking and fix it before the inspectors come.",
      icon: <ClipboardCheck className="h-10 w-10 text-gold" />,
      features: ["Regulatory Mapping", "Compliance Training", "FIRS Audit Support"]
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-navy mb-6">Expert Accounting Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer specialized solutions tailored for the Nigerian economy. 
            No jargon, just simple and effective financial management.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {fullServices.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border-b-4 hover:border-b-gold">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance Education Section */}
        <div className="bg-navy rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <AlertTriangle className="h-64 w-64" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <ShieldAlert className="mr-4 text-gold" />
              Why Compliance Matters in Nigeria
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  In Nigeria, the Federal Inland Revenue Service (FIRS) and state agencies (like LIRS) have become very strict. Many businesses fail not because they don't have customers, but because of heavy penalties.
                </p>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                  <h4 className="text-gold font-bold mb-2 text-xl">Did you know?</h4>
                  <p className="text-gray-200">Late filing for VAT can cost you N50,000 for the first month and N25,000 for every month after that. This can finish your business capital quickly!</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-6">How we help you stay safe:</h4>
                <ul className="space-y-4">
                  {[
                    "We send you reminders 2 weeks before any deadline.",
                    "We use legal tax-saving strategies to reduce what you pay.",
                    "We communicate directly with FIRS agents on your behalf.",
                    "We ensure your CAC Annual Returns are always up to date."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="h-6 w-6 bg-gold rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <span className="text-navy font-bold text-xs">{idx + 1}</span>
                      </div>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
