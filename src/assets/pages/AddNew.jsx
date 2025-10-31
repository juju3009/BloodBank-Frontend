import React, { useState } from 'react';
import { addDonorAPI } from '../../services/allAPIs';
import Swal from 'sweetalert2';

function AddNew() {
  const [donorData, setDonorData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bloodGroup: '',
    location: '',
    donationDate: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setDonorData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addDonorAPI(donorData);
      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        Swal.fire({
          title: 'Success!',
          text: 'Donor details added successfully.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });

        // Clear the form after success
        setDonorData({
          fullName: '',
          email: '',
          phone: '',
          bloodGroup: '',
          location: '',
          donationDate: ''
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong while adding donor data.',
          icon: 'error',
          confirmButtonColor: '#d33',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to connect to the server.',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat py-10"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2018/06/26/05/08/lab-3498584_1280.jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md w-full flex-col gap-4 bg-black/85 p-6 rounded-2xl shadow-lg text-white border border-gray-800"
      >
        <h2 className="text-2xl font-semibold text-center mb-2">
          Blood Donor Registration
        </h2>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="mb-2 block text-white">
            Full Name
          </label>
          <input
            id="fullName"
            value={donorData.fullName}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter Your Name"
            required
            className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 
                       focus:ring-white focus:border-white caret-white px-3 py-2"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block text-white">
            Email
          </label>
          <input
            id="email"
            value={donorData.email}
            onChange={handleInputChange}
            type="email"
            placeholder="Enter Your Mail Id"
            required
            className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 
                       focus:ring-white focus:border-white caret-white px-3 py-2"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="mb-2 block text-white">
            Phone Number
          </label>
          <input
            id="phone"
            value={donorData.phone}
            onChange={handleInputChange}
            type="tel"
            placeholder="Enter Phone No"
            required
            className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 
                       focus:ring-white focus:border-white caret-white px-3 py-2"
          />
        </div>

        {/* Blood Group */}
        <div>
          <label htmlFor="bloodGroup" className="mb-2 block text-white">
            Blood Group
          </label>
          <select
            id="bloodGroup"
            value={donorData.bloodGroup}
            onChange={handleInputChange}
            required
            className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white 
                       focus:ring-white focus:border-white caret-white px-3 py-2"
          >
            <option value="">Select your blood group</option>
            <option>A+</option>
            <option>A−</option>
            <option>B+</option>
            <option>B−</option>
            <option>AB+</option>
            <option>AB−</option>
            <option>O+</option>
            <option>O−</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="mb-2 block text-white">
            Location
          </label>
          <input
            id="location"
            value={donorData.location}
            onChange={handleInputChange}
            type="text"
            placeholder="House name, City, State"
            required
            className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 
                       focus:ring-white focus:border-white caret-white px-3 py-2"
          />
        </div>

        {/* Date of Donation */}
        <div>
          <label htmlFor="donationDate" className="mb-2 block text-white">
            Date of Donation
          </label>
          <input
            id="donationDate"
            value={donorData.donationDate}
            onChange={handleInputChange}
            type="date"
            required
            className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white 
                       focus:ring-white focus:border-white caret-white px-3 py-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="relative overflow-hidden rounded-full bg-white text-black font-semibold px-5 py-2.5 
                     shadow-md transition-all duration-300 ease-in-out 
                     hover:bg-gray-100 hover:shadow-lg hover:scale-105 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Submit Donor Details
        </button>
      </form>
    </div>
  );
}

export default AddNew;
