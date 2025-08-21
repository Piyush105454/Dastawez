'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const GovernmentServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    userPhone: '',
    userEmail: '',
    timeSlot: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const services = [
    // Identity Documents
    { id: 'aadhaar-enrollment', title: 'Aadhaar Enrollment', description: 'Apply for a new Aadhaar card.', category: 'Identity', fullDescription: 'New Aadhaar card application for individuals.' },
    { id: 'aadhaar-update', title: 'Aadhaar Update/Correction', description: 'Update personal details, address, or biometrics.', category: 'Identity', fullDescription: 'Update personal details, address, or biometrics on Aadhaar.' },
    { id: 'aadhaar-download', title: 'Aadhaar Download/Print', description: 'Get your e-Aadhaar copy.', category: 'Identity', fullDescription: 'Download and print e-Aadhaar copies.' },
    { id: 'pan-new', title: 'PAN Card New Application', description: 'Apply for a new PAN card from the Income Tax Department.', category: 'Identity', fullDescription: 'Apply for a new Permanent Account Number (PAN) card.' },
    { id: 'pan-correction', title: 'PAN Card Correction', description: 'Update details on your existing PAN card.', category: 'Identity', fullDescription: 'Make corrections or changes to existing PAN card details.' },
    { id: 'voter-registration', title: 'Voter ID New Registration', description: 'Register to get your Voter ID card.', category: 'Identity', fullDescription: 'Register as a new voter for Election Commission of India.' },
    { id: 'voter-correction', title: 'Voter ID Correction/Deletion', description: 'Update or delete your Voter ID information.', category: 'Identity', fullDescription: 'Correct details or request deletion of a voter ID.' },
    { id: 'voter-download', title: 'Digital Voter ID Download', description: 'Get your e-Voter ID copy.', category: 'Identity', fullDescription: 'Download your digital copy of Voter ID card.' },
    { id: 'passport-new', title: 'New Passport Application', description: 'Apply for your first Indian passport.', category: 'Identity', fullDescription: 'Apply for a new Indian passport.' },
    { id: 'passport-renewal', title: 'Passport Re-issue/Renewal', description: 'Renew or re-issue your expired or expiring passport.', category: 'Identity', fullDescription: 'Re-issue or renew an existing passport.' },
    { id: 'passport-pcc', title: 'Passport PCC Application', description: 'Apply for a Police Clearance Certificate (PCC).', category: 'Identity', fullDescription: 'Apply for Police Clearance Certificate (PCC) for passport.' },
    { id: 'learner-dl', title: "Learner's Driving License", description: "Apply for your Learner's Driving License.", category: 'Identity', fullDescription: "Apply for a new Learner's Driving License." },
    { id: 'driving-license', title: 'New Driving License', description: "Apply for a permanent Driving License after your learner's.", category: 'Identity', fullDescription: 'Apply for a permanent Driving License.' },
    { id: 'dl-renewal', title: 'DL Renewal/Duplicate', description: 'Renew your Driving License or get a duplicate copy.', category: 'Identity', fullDescription: 'Renew an expired DL or apply for a duplicate.' },
    { id: 'vehicle-rc', title: 'Vehicle RC Services', description: 'New registration, transfer, or duplicate RC.', category: 'Identity', fullDescription: 'New vehicle registration, RC transfer, duplicate RC.' },

    // Certificates & Essential Documents
    { id: 'birth-certificate', title: 'Birth Certificate Registration', description: 'Register a birth and obtain the certificate.', category: 'Certificates', fullDescription: 'Register a new birth and obtain a birth certificate.' },
    { id: 'death-certificate', title: 'Death Certificate Registration', description: 'Register a death and obtain the certificate.', category: 'Certificates', fullDescription: 'Register a death and obtain a death certificate.' },
    { id: 'marriage-certificate', title: 'Marriage Certificate Registration', description: 'Register a marriage and obtain the certificate.', category: 'Certificates', fullDescription: 'Register a marriage and obtain a marriage certificate.' },
    { id: 'caste-certificate', title: 'Caste Certificate', description: 'Apply for new SC/ST/OBC caste certificates.', category: 'Certificates', fullDescription: 'Application for new caste certificates (SC/ST/OBC).' },
    { id: 'income-certificate', title: 'Income Certificate', description: 'Apply for an income certificate.', category: 'Certificates', fullDescription: 'Application for income certificates for various purposes.' },
    { id: 'domicile-certificate', title: 'Domicile Certificate', description: 'Apply for a domicile (Mool Niwas) certificate.', category: 'Certificates', fullDescription: 'Application for domicile certificates (Mool Niwas).' },
    { id: 'creamy-layer', title: 'Creamy Layer Certificate', description: 'Apply for non-creamy layer certificate (OBC).', category: 'Certificates', fullDescription: 'Application for non-creamy layer certificates for OBC category.' },
    { id: 'bonafide-certificate', title: 'Bonafide Certificate', description: 'Apply for a bonafide resident certificate.', category: 'Certificates', fullDescription: 'Application for bonafide certificates for residents of Madhya Pradesh.' },
    { id: 'character-certificate', title: 'Character Certificate (Police)', description: 'Apply for a police character verification certificate.', category: 'Certificates', fullDescription: 'Application for police character verification certificate.' },
    { id: 'mp-psg-certificates', title: 'MP Public Service Guarantee Certificates', description: 'Access various certificates under the MP Public Service Guarantee Act.', category: 'Certificates', fullDescription: 'Various certificates under MP Public Service Guarantee Act.' },

    // Land & Property Services
    { id: 'khasra-khatauni', title: 'Khasra/Khatauni Copy', description: 'Get copies of land records and ownership details.', category: 'Land', fullDescription: 'Obtain copies of land records (Khasra and Khatauni).' },
    { id: 'property-mutation', title: 'Property Mutation Application', description: 'Apply for property ownership transfer.', category: 'Land', fullDescription: 'Apply for mutation (transfer of ownership) of property.' },
    { id: 'land-diversion', title: 'Land Diversion Application', description: 'Apply for changing land use category.', category: 'Land', fullDescription: 'Apply for land use change (diversion) from agricultural to non-agricultural.' },
    { id: 'land-demarcation', title: 'Land Demarcation Application', description: 'Request official measurement of land boundaries.', category: 'Land', fullDescription: 'Request for demarcation of land boundaries.' },
    { id: 'property-tax', title: 'Property Tax Payment', description: 'Pay your municipal property taxes.', category: 'Property', fullDescription: 'Pay property taxes online.' },
    { id: 'water-bill', title: 'Water Bill Payment', description: 'Pay your water consumption bills.', category: 'Property', fullDescription: 'Pay water utility bills.' },
    { id: 'trade-license', title: 'Trade License Application', description: 'Apply for a trade license from the municipality.', category: 'Property', fullDescription: 'Apply for a new trade license for businesses.' },
    { id: 'building-permission', title: 'Building Permission Application', description: 'Apply for permission to construct or alter a building.', category: 'Property', fullDescription: 'Apply for permission for new construction or alteration.' },

    // Financial & Banking Services
    { id: 'bank-account', title: 'Bank Account Opening Assistance', description: 'Assistance in opening a new bank account.', category: 'Financial', fullDescription: 'Assistance with opening new bank accounts.' },
    { id: 'aeps', title: 'AEPS (Aadhaar Enabled Payment System)', description: 'Cash withdrawal and balance inquiry using Aadhaar.', category: 'Financial', fullDescription: 'Cash withdrawal, balance inquiry using Aadhaar.' },
    { id: 'money-transfer', title: 'Money Transfer Services', description: 'Send money to any bank account in India.', category: 'Financial', fullDescription: 'Domestic money transfer services.' },
    { id: 'loan-assistance', title: 'Loan Application Assistance', description: 'Assistance with applying for various loans.', category: 'Financial', fullDescription: 'Assistance with various loan applications (e.g., PM SVANidhi).' },
    { id: 'pmjjby', title: 'PMJJBY Enrollment', description: "Enroll in the government's life insurance scheme.", category: 'Financial', fullDescription: 'Enrollment for life insurance scheme.' },
    { id: 'pmsby', title: 'PMSBY Enrollment', description: "Enroll in the government's accident insurance scheme.", category: 'Financial', fullDescription: 'Enrollment for accident insurance scheme.' },
    { id: 'pmfby', title: 'PMFBY Enrollment', description: "Enroll in the government's crop insurance scheme.", category: 'Financial', fullDescription: 'Enrollment for crop insurance scheme.' },
    { id: 'apy', title: 'Atal Pension Yojana (APY) Enrollment', description: 'Enroll in the government-backed pension scheme.', category: 'Financial', fullDescription: 'Enroll in the government pension scheme.' },
    { id: 'nps', title: 'National Pension System (NPS) Enrollment', description: 'Enroll in the National Pension System.', category: 'Financial', fullDescription: 'Enroll in the National Pension System.' },
    { id: 'jeevan-pramaan', title: 'Jeevan Pramaan (Digital Life Certificate)', description: 'Submit your digital life certificate for pension.', category: 'Financial', fullDescription: 'Submission of digital life certificate for pensioners.' },
    { id: 'itr-filing', title: 'Income Tax Return (ITR) Filing', description: 'Get assistance with filing your income tax returns.', category: 'Financial', fullDescription: 'Assistance with filing income tax returns.' },
    { id: 'gst-registration', title: 'GST Registration', description: 'Assistance with Goods and Services Tax registration.', category: 'Financial', fullDescription: 'Assistance with Goods and Services Tax (GST) registration.' },
    { id: 'gst-return', title: 'GST Return Filing', description: 'Assistance with filing your GST returns.', category: 'Financial', fullDescription: 'Assistance with filing GST returns.' },
    { id: 'epfo-uan', title: 'EPFO UAN Activation/Linking', description: 'Activate your UAN and link Aadhaar for EPFO services.', category: 'Financial', fullDescription: 'Activate Universal Account Number and link Aadhaar.' },
    { id: 'epfo-balance', title: 'EPFO Balance Check/Withdrawal', description: 'Check PF balance and assist with withdrawal claims.', category: 'Financial', fullDescription: 'Check PF balance and apply for withdrawals.' },

    // Utility & Bill Payments
    { id: 'electricity-bill', title: 'Electricity Bill Payment', description: 'Pay your electricity bills online.', category: 'Utility', fullDescription: 'Pay electricity bills for various providers.' },
    { id: 'gas-bill', title: 'Gas Bill Payment/Booking', description: 'Pay your gas bills or book gas cylinders.', category: 'Utility', fullDescription: 'Pay gas bills or book gas cylinders.' },
    { id: 'mobile-recharge', title: 'Mobile Recharge/Bill Payment', description: 'Recharge your mobile or pay postpaid bills.', category: 'Utility', fullDescription: 'Recharge mobile phones or pay postpaid bills.' },
    { id: 'dth-recharge', title: 'DTH Recharge', description: 'Recharge your DTH services.', category: 'Utility', fullDescription: 'Recharge DTH services for various providers.' },
    { id: 'fastag-recharge', title: 'FASTag Recharge', description: 'Recharge your FASTag for highway tolls.', category: 'Utility', fullDescription: 'Recharge FASTag for toll payments.' },

    // Travel & Logistics
    { id: 'railway-booking', title: 'Railway Ticket Booking (IRCTC)', description: 'Book your train tickets.', category: 'Travel', fullDescription: 'Book train tickets for Indian Railways.' },
    { id: 'airline-booking', title: 'Airline Ticket Booking', description: 'Book domestic and international flight tickets.', category: 'Travel', fullDescription: 'Book domestic and international airline tickets.' },
    { id: 'bus-booking', title: 'Bus Ticket Booking', description: 'Book your bus tickets for inter-city travel.', category: 'Travel', fullDescription: 'Book bus tickets for various routes.' },
    { id: 'eway-bill', title: 'E-Way Bill Generation', description: 'Generate e-Way Bills for goods transportation.', category: 'Logistics', fullDescription: 'Generate e-Way Bills for goods transportation.' },
    { id: 'postal-services', title: 'Postal Services (India Post)', description: 'Access Speed Post, Registered Post, and money order services.', category: 'Logistics', fullDescription: 'Speed Post, Registered Post, money order services.' },

    // Education & Employment
    { id: 'exam-applications', title: 'Online Exam Applications', description: 'Assistance with filling out online exam application forms.', category: 'Education', fullDescription: 'Assistance with applying for various competitive exams.' },
    { id: 'scholarship-applications', title: 'Scholarship Applications', description: 'Assistance with applying for various government scholarships.', category: 'Education', fullDescription: 'Assistance with applying for government scholarships.' },
    { id: 'university-forms', title: 'University Enrollment/Forms', description: 'Assistance with university admission and other academic forms.', category: 'Education', fullDescription: 'Assistance with university admission and other forms.' },
    { id: 'employment-exchange', title: 'Employment Exchange Registration', description: 'Register for job opportunities through the employment exchange.', category: 'Employment', fullDescription: 'Register with local employment exchange for job opportunities.' },

    // Government Schemes & Welfare
    { id: 'dbt-schemes', title: 'DBT Scheme Applications', description: 'Apply for various Direct Benefit Transfer schemes.', category: 'Welfare', fullDescription: 'Application for various DBT linked government schemes.' },
    { id: 'ayushman-bharat', title: 'Ayushman Bharat (PM-JAY) Enrollment', description: 'Enroll in the national health protection scheme.', category: 'Welfare', fullDescription: 'Enroll in the national health protection scheme.' },
    { id: 'ujjwala-yojana', title: 'PM Ujjwala Yojana (PMUY)', description: 'Apply for free LPG connections.', category: 'Welfare', fullDescription: 'Apply for free LPG connections.' },
    { id: 'awas-yojana', title: 'PM Awas Yojana (PMAY)', description: 'Apply for affordable housing under PMAY.', category: 'Welfare', fullDescription: 'Application for affordable housing scheme.' },
    { id: 'ration-card-new', title: 'Ration Card New Application', description: 'Apply for a new ration card.', category: 'Welfare', fullDescription: 'Apply for a new ration card.' },
    { id: 'ration-card-update', title: 'Ration Card Update/Duplicate', description: 'Update details or get a duplicate ration card.', category: 'Welfare', fullDescription: 'Update details or apply for a duplicate ration card.' },

    // Police, Legal & Grievance
    { id: 'fir-registration', title: 'Online FIR Registration', description: 'Register a First Information Report (FIR) online.', category: 'Police', fullDescription: 'Register a First Information Report (FIR) online.' },
    { id: 'ecourts-services', title: 'e-Courts Services', description: 'Check case status, court orders, and more.', category: 'Legal', fullDescription: 'Check case status, court orders, cause list.' },
    { id: 'grievance-redressal', title: 'Public Grievance Redressal', description: 'Submit and track your grievances to government departments.', category: 'Grievance', fullDescription: 'Submit and track grievances to government departments.' },

    // Business & Enterprise Services
    { id: 'msme-registration', title: 'MSME Udyam Registration', description: 'Register your Micro, Small, or Medium Enterprise.', category: 'Business', fullDescription: 'Register micro, small, and medium enterprises.' },
    { id: 'fssai-registration', title: 'FSSAI Registration/License', description: 'Apply for FSSAI food business registration or license.', category: 'Business', fullDescription: 'Apply for FSSAI food business registration/license.' },
    { id: 'shop-establishment', title: 'Shop & Establishment Registration', description: 'Register your new shop or establishment.', category: 'Business', fullDescription: 'Register new shops and establishments.' },
    { id: 'startup-india', title: 'Startup India Registration', description: 'Register your startup under the Startup India initiative.', category: 'Business', fullDescription: 'Register your startup with the Startup India program.' },
    { id: 'gem-registration', title: 'GeM Registration', description: 'Register as a seller on the Government e-Marketplace.', category: 'Business', fullDescription: 'Register as a seller on GeM portal.' },

    // Miscellaneous Digital Services
    { id: 'digilocker', title: 'DigiLocker Services', description: 'Access and securely store your digital documents.', category: 'Digital', fullDescription: 'Access and store digital documents securely.' },
    { id: 'estamping', title: 'e-Stamping', description: 'Obtain digital stamp papers.', category: 'Digital', fullDescription: 'Obtain digital stamp papers for various agreements.' },
    { id: 'echallan', title: 'e-Challan Payment', description: 'Pay your traffic e-challans online.', category: 'Digital', fullDescription: 'Pay traffic e-challans online.' },
    { id: 'ehospital', title: 'e-Hospital Services', description: 'Book appointments and access reports for certain hospitals.', category: 'Digital', fullDescription: 'Book appointments, access reports in select hospitals.' },
    { id: 'digital-signature', title: 'Digital Signature Certificate (DSC) Application', description: 'Apply for a Digital Signature Certificate for secure transactions.', category: 'Digital', fullDescription: 'Apply for a Digital Signature Certificate.' },
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM'
  ];

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApplyNow = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Create form data for submission
    const submitData = new FormData();
    submitData.append('serviceName', selectedService?.title || '');
    submitData.append('userName', formData.userName);
    submitData.append('userPhone', formData.userPhone);
    submitData.append('userEmail', formData.userEmail);
    submitData.append('timeSlot', formData.timeSlot);

    try {
      await fetch('https://formsubmit.co/6fa3378a3b6dc3ecbbe3973ab810dcb3', {
        method: 'POST',
        body: submitData
      });
      
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowModal(false);
        setShowSuccessMessage(false);
        setFormData({
          userName: '',
          userPhone: '',
          userEmail: '',
          timeSlot: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
  const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <Head>
        <title>Dastawez - Government Services</title>
        <meta name="description" content="Access a comprehensive range of government services, facilitated by Dastawez, leveraging various official portals like MPOnline, e-District, and Parivahan Seva." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/jpg" href="/img/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Head>

      <div className="text-gray-800 min-h-screen">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center relative">
            <div className="logo flex items-center">
              <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-3 overflow-hidden">
                <Image src="/img/logo.png" alt="Dastawez Logo" width={48} height={48} className="h-full w-full object-cover" />
              </div>
              <h1 className="text-white text-2xl font-bold">
                Dasta<span className="text-yellow-400">wez</span>
              </h1>
            </div>
            
            <button 
              className="md:hidden text-white text-2xl focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><Link href="/" className="text-white font-medium hover:text-yellow-400 transition-colors relative py-2">Home</Link></li>
                <li><a href="#servicesList" className="text-white font-medium hover:text-yellow-400 transition-colors relative py-2">Services</a></li>
                <li><Link href="/contact" className="text-white font-medium hover:text-yellow-400 transition-colors relative py-2">Contact</Link></li>
                <li><Link href="/about" className="text-white font-medium hover:text-yellow-400 transition-colors relative py-2">About</Link></li>
                <li><Link href="/terms" className="text-white font-medium hover:text-yellow-400 transition-colors relative py-2">Terms & Conditions</Link></li>
              </ul>
            </nav>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-blue-800 md:hidden z-40">
                <div className="flex flex-col p-4">
                  <Link href="/" className="text-white py-2 hover:text-yellow-400">Home</Link>
                  <a href="#servicesList" className="text-white py-2 hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>Services</a>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqTnXUQh6tOCfrR3vQcl5q4clYNIFrwgXtEM6k7paOP2pwIw/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="text-white py-2 hover:text-yellow-400">Order Now</a>
                  <Link href="/contact" className="text-white py-2 hover:text-yellow-400">Contact</Link>
                  <Link href="/about" className="text-white py-2 hover:text-yellow-400">About</Link>
                  <Link href="/terms" className="text-white py-2 hover:text-yellow-400">Terms & Conditions</Link>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Government Services</h1>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Access a comprehensive range of government services, facilitated by Dastawez, leveraging various official portals like MPOnline, e-District, and Parivahan Seva.
          </p>

          {/* Search Bar */}
          <div className="mb-10 flex justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search for a service or document..."
            />
          </div>

          {/* Services List */}
          <div id="servicesList" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                </div>
                <button
                  onClick={() => handleApplyNow(service)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 text-sm"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {/* Other Services Section */}
          <div className="mt-12 bg-gray-100 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Can&apos;t Find Your Service Here?</h3>
            <p className="text-gray-700 mb-4">
              If the government service you&apos;re looking for isn&apos;t listed above, please don&apos;t hesitate to reach out! We&apos;re constantly updating our offerings and aim to facilitate a wide range of government processes for you.
            </p>
            <p className="text-gray-700 font-semibold mb-4">Contact us via WhatsApp or phone for personalized assistance!</p>
            <a
              href="https://wa.me/917898282349"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Application Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-bold text-gray-800">Apply for {selectedService?.title}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  &times;
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="p-6">
                <div className="mb-4">
                  <label htmlFor="userName" className="block text-gray-700 font-semibold mb-2">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="userPhone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="userPhone"
                    name="userPhone"
                    value={formData.userPhone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., +919876543210"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="userEmail" className="block text-gray-700 font-semibold mb-2">
                    Email ID:
                  </label>
                  <input
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    value={formData.userEmail}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., yourname@example.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="timeSlot" className="block text-gray-700 font-semibold mb-2">
                    Preferred Time Slot:
                  </label>
                  <select
                    id="timeSlot"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                  disabled={showSuccessMessage}
                >
                  {showSuccessMessage ? 'Submitted!' : 'Submit Application'}
                </button>

                {showSuccessMessage && (
                  <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                    Application submitted successfully! We will contact you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-800 text-white pt-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-8 mb-8">
              {/* About Column */}
              <div className="flex-1 min-w-[200px]">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mr-3 overflow-hidden">
                    <Image src="/img/logo.png" alt="Dastawez Logo" width={48} height={48} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Dasta<span className="text-yellow-400">wez</span>
                  </h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Your trusted partner for all document and government service needs in Anuppur, Madhya Pradesh.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://chat.whatsapp.com/ELYNoYxFIaC6p4ztD8WPQh" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="https://www.instagram.com/dastawez.in?igsh=MXZnZmFoNzhuNTlncg==" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>

              {/* Services Column */}
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#servicesList" className="text-gray-400 hover:text-white transition">MP Online Services</a></li>
                  <li><a href="#servicesList" className="text-gray-400 hover:text-white transition">Academic Forms</a></li>
                  <li><a href="#servicesList" className="text-gray-400 hover:text-white transition">Document Services</a></li>
                  <li><a href="#servicesList" className="text-gray-400 hover:text-white transition">Digital Services</a></li>
                  <li><a href="#servicesList" className="text-gray-400 hover:text-white transition">Exam Forms</a></li>
                  <li><Link href="/invoice" className="text-gray-400 hover:text-white transition">Invoice</Link></li>
                </ul>
              </div>

              {/* Quick Links Column */}
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                  <li><a href="#servicesList" className="text-gray-400 hover:text-white transition">Services</a></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                    <span>Bhopal, Madhya Pradesh, India</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-phone-alt mt-1 mr-3 text-blue-400"></i>
                    <a href="tel:+917898282349" className="hover:text-white">+91-7898282349</a>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-envelope mt-1 mr-3 text-blue-400"></i>
                    <a href="mailto:dastawez.in@gmail.com" className="hover:text-white">dastawez.in@gmail.com</a>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-link mt-1 mr-3 text-blue-400"></i>
                    <a href="https://linktr.ee/dastawez" className="hover:text-white" target="_blank" rel="noopener noreferrer">Link Tree</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
              <p>&copy; 2025 Dastawez. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default GovernmentServices;