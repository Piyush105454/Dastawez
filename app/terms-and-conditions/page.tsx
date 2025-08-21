'use client';

import { motion } from "framer-motion";
import Navbar from "../components/Header";

export default function TCPage() {
  const sections = [
    {
      title: "Service Availability",
      items: [
        "Orders are processed on a first-come, first-served basis.",
        "Same-day or next-day delivery is subject to service location and order volume.",
        "We reserve the right to refuse service under certain circumstances."
      ]
    },
    {
      title: "Document Handling and Accuracy",
      items: [
        "Customers are responsible for verifying the accuracy of their documents before submission.",
        "We are not responsible for errors in submitted files.",
        "Any document modifications after submission may require a new order."
      ]
    },
    {
      title: "Government Services",
      items: [
        "We facilitate applications for government documents through a structured process.",
        "Applications are submitted via standard procedures, ensuring compliance with official guidelines."
      ],
      note: "Important: Integration with MP Online is in progress. Currently, applications are processed through an alternative structured approach for a seamless experience."
    },
    {
      title: "Pricing and Payment",
      items: [
        "We maintain transparent pricing with no hidden charges.",
        "Payment options: UPI and Cash-on-Delivery (COD) (available in select locations).",
        "Prices are subject to change without prior notice.",
        "Full payment is required before delivery for resume services."
      ]
    },
    {
      title: "Order Cancellation and Refunds",
      items: [
        "Orders, once processed, cannot be canceled.",
        "No refunds for completed services.",
        "In case of service unavailability, a refund may be issued at our discretion."
      ]
    },
    {
      title: "Resume Services",
      items: [
        "Professional, ATS-optimized resume-building services based on your inputs.",
        "Delivery within the promised timeframe, subject to current workload.",
        "One free revision is available within 24 hours of delivery; additional revisions may incur charges."
      ]
    },
    {
      title: "Data Privacy and Confidentiality",
      items: [
        "All customer data is securely handled and deleted after order completion (same day).",
        "We do not share customer information with third parties."
      ]
    },
    {
      title: "Limitation of Liability",
      items: [
        "We do not guarantee approval of government applications or job placement.",
        "We are not liable for delays caused by third-party portals or official processing times."
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Terms and Conditions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 text-center mb-12"
        >
          Welcome to <span className="font-semibold">Dastawez and Resume Hub</span>. By using our services, you agree to the following terms and conditions.
        </motion.p>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              {section.note && (
                <p className="mt-4 text-sm bg-yellow-100 text-yellow-800 p-3 rounded-md font-medium">
                  {section.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center text-gray-700"
        >
          <p className="mb-4">
            By using our services, you confirm that you have read, understood, and agreed to these terms.  
            We reserve the right to modify these terms at any time without prior notice.
          </p>
          <p className="font-semibold text-blue-600">
            For any queries, feel free to contact our support team.
          </p>
        </motion.div>
      </div>
    </>
  );
}
