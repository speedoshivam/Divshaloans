import React, { useState } from 'react';
import { Calculator as CalculatorIcon, TrendingUp, DollarSign } from 'lucide-react';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTerm, setLoanTerm] = useState(5);

  const calculatePayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    return monthlyPayment;
  };

  const monthlyPayment = calculatePayment();
  const totalPayment = monthlyPayment * loanTerm * 12;
  const totalInterest = totalPayment - loanAmount;

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loan Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estimate your monthly payments and see how different loan terms affect your total cost. 
            Get a clear picture of your loan before you apply.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Controls */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl mr-4">
                <CalculatorIcon size={28} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Calculate Your Payment
              </h3>
            </div>

            <div className="space-y-8">
              {/* Loan Amount */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-3">
                  <span>Loan Amount</span>
                  <span className="text-blue-600 font-bold">${loanAmount.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$1K</span>
                  <span>$100K</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-3">
                  <span>Interest Rate (APR)</span>
                  <span className="text-blue-600 font-bold">{interestRate.toFixed(1)}%</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="15"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>3%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-3">
                  <span>Loan Term</span>
                  <span className="text-blue-600 font-bold">{loanTerm} years</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1 year</span>
                  <span>10 years</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Apply for This Loan
            </button>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Payment Breakdown</h4>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl">
                  <div className="flex items-center">
                    <DollarSign size={24} className="text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Monthly Payment</div>
                      <div className="text-sm text-gray-600">Principal + Interest</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      ${totalPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-sm text-gray-600">Total Payment</div>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      ${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-sm text-gray-600">Total Interest</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <TrendingUp size={24} className="mr-3" />
                <h4 className="text-lg font-semibold">Pro Tips</h4>
              </div>
              <ul className="space-y-2 text-blue-100">
                <li>• Lower interest rates save you money over the life of the loan</li>
                <li>• Shorter terms mean higher monthly payments but less total interest</li>
                <li>• Consider your budget and choose a comfortable monthly payment</li>
                <li>• Good credit scores qualify for better rates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #2563eb, #10b981);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #2563eb, #10b981);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default Calculator;