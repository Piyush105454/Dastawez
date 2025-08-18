'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InvoicePage() {
  const [consumerName, setConsumerName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [operationsDescription, setOperationsDescription] = useState('');
  const [portalCharge, setPortalCharge] = useState(0);
  const [servicesCharges, setServicesCharges] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [showInvoice, setShowInvoice] = useState(false);

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setInvoiceDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  useEffect(() => {
    const total = portalCharge + servicesCharges;
    setGrandTotal(total);
  }, [portalCharge, servicesCharges]);

  const generateInvoice = () => {
    setShowInvoice(true);
  };

  const clearForm = () => {
    setConsumerName('');
    setInvoiceNumber('');
    setOperationsDescription('');
    setPortalCharge(0);
    setServicesCharges(0);
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setInvoiceDate(`${yyyy}-${mm}-${dd}`);
  };

  const printInvoice = () => {
    window.print();
  };

  const closeInvoice = () => {
    setShowInvoice(false);
  };

  return (
    <>
      <AnimatePresence>
        {!showInvoice ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="no-print max-w-4xl w-full bg-white shadow-xl rounded-2xl p-6 mb-8 border border-gray-200"
          >
            <motion.h1
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-extrabold text-blue-600 mb-8 text-center tracking-tight"
            >
              Invoice Generator
            </motion.h1>

            {/* Consumer Information */}
            <motion.section
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 p-6 bg-green-50 rounded-lg border border-green-200 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-green-700 mb-4">Consumer Information</h2>
              <input
                type="text"
                id="consumerName"
                value={consumerName}
                onChange={(e) => setConsumerName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 transition-all"
                placeholder="e.g., Name of Consumer"
              />
            </motion.section>

            {/* Invoice Details */}
            <motion.section
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-yellow-700 mb-4">Invoice Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Invoice Number"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                />
                <input
                  type="date"
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-500 focus:border-yellow-500 transition-all"
                />
              </div>
            </motion.section>

            {/* Charges */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8 p-6 bg-purple-50 rounded-lg border border-purple-200 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Charges</h2>
              <input
                type="text"
                placeholder="Operations Description"
                value={operationsDescription}
                onChange={(e) => setOperationsDescription(e.target.value)}
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="number"
                  placeholder="Portal Charge"
                  value={portalCharge}
                  onChange={(e) => setPortalCharge(parseFloat(e.target.value) || 0)}
                  className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-all text-right"
                />
                <input
                  type="number"
                  placeholder="Service Charges"
                  value={servicesCharges}
                  onChange={(e) => setServicesCharges(parseFloat(e.target.value) || 0)}
                  className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 transition-all text-right"
                />
              </div>
            </motion.section>

            {/* Summary */}
            <motion.section
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8 p-6 bg-indigo-50 rounded-lg border border-indigo-200 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">Summary</h2>
              <div className="flex justify-between items-center py-2 border-t pt-4 border-gray-200">
                <span className="text-lg font-medium text-gray-700">Total:</span>
                <motion.span
                  key={grandTotal}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-extrabold text-gray-900"
                >
                  Rs {grandTotal.toFixed(2)}
                </motion.span>
              </div>
            </motion.section>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={generateInvoice}
                className="px-8 py-4 bg-green-600 text-white font-bold rounded-xl shadow-lg hover:bg-green-700 transition"
              >
                Generate Invoice
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearForm}
                className="px-8 py-4 bg-red-500 text-white font-bold rounded-xl shadow-lg hover:bg-red-600 transition"
              >
                Clear All
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="invoice"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="invoice-page fixed inset-0 bg-gray-100 z-50 flex items-center justify-center overflow-auto p-6"
          >
            <div className="invoice-container border border-gray-300 rounded-lg shadow-xl p-10 max-w-4xl w-full bg-white">
              {/* === Your invoice preview content goes here === */}
              <h1 className="text-3xl font-bold text-center mb-6">Invoice Preview</h1>
              <p className="mb-2"><strong>Consumer:</strong> {consumerName}</p>
              <p className="mb-2"><strong>Invoice #:</strong> {invoiceNumber}</p>
              <p className="mb-2"><strong>Date:</strong> {invoiceDate}</p>
              <p className="mb-2"><strong>Description:</strong> {operationsDescription}</p>
              <p className="mb-2"><strong>Portal Charge:</strong> Rs {portalCharge.toFixed(2)}</p>
              <p className="mb-2"><strong>Service Charges:</strong> Rs {servicesCharges.toFixed(2)}</p>
              <hr className="my-4" />
              <p className="text-xl font-bold text-right">Grand Total: Rs {grandTotal.toFixed(2)}</p>

              <div className="flex justify-center mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={printInvoice}
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition mr-4"
                >
                  Print Invoice
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeInvoice}
                  className="px-6 py-3 bg-gray-500 text-white font-semibold rounded-md shadow-md hover:bg-gray-600 transition"
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
