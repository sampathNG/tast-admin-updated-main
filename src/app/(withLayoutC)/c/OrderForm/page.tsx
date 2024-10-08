import React from 'react';
import Signature from './Signature.tsx/Signature';

const OrderForm: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold flex justify-center">Stunning Design</h2>

      <div className="flex justify-center">
        <p className="ml-2 block text-xl text-gray-900">Personal Information</p>
      </div>
      <div className="mb-4 flex items-center justify-center">
        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
        <label className="ml-2 block text-sm text-gray-900">Want to add Information to your profile</label>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Applicant&apos; Full Name</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Occupation</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Language you speak</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">National ID/Passport Number</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Permanent address</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
      </div>

      <h3 className="text-xl flex justify-center font-bold mt-8 mb-4">Essential Details Of The Project</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="block text-sm font-medium text-gray-700">Project Requirement</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Type of Project</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pay Currency</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Budget</label>
          <input type="number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Project Deadline</label>
          <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Reference Name</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Project Location</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Provide the project-related files</label>
          <input type="file" className="mt-1 block w-full text-gray-700" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum Pay</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
      </div>

      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-700">Give some details about the project</label>
        <textarea rows={5} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
      </div>

      <div className='flex justify-between'>
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700">Applicant&apos;s Signature</label>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div className="mt-8">
          <Signature />
         </div>

      </div>

      <div className="mt-8 flex items-center">
        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
        <label className="ml-2 block text-sm text-gray-900">I consent to the use of my data according to the privacy policy.</label>
      </div>

      <div className="mt-2 flex items-center">
        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
        <label className="ml-2 block text-sm text-gray-900">I confirm that the information provided is accurate and complete.</label>
      </div>

      <div className="mt-2 flex items-center">
        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
        <label className="ml-2 block text-sm text-gray-900">I am applying by agreeing to all terms and conditions.</label>
      </div>

    </div>
  );
};

export default OrderForm;
