import React, { useEffect, useState } from "react";
import { Button, Modal, Label, Select } from "flowbite-react";
import { HiX } from "react-icons/hi";
import Swal from "sweetalert2";
import { updateDonorAPI } from "../../services/allAPIs";

function EditModal({ donor, refresh }) {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    bloodGroup: "",
    location: "",
    donationDate: "",
  });

  // Prefill donor info when modal opens
  useEffect(() => {
    if (openModal && donor) {
      setFormData({
        fullName: donor.fullName || donor.fullname || "",
        email: donor.email || "",
        phone: donor.phone || "",
        bloodGroup: donor.bloodGroup || donor.bloodgroup || "",
        location: donor.location || "",
        donationDate: donor.donationDate || donor.date || "",
      });
    }
  }, [openModal, donor]);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle donor update
  const handleUpdate = async () => {
    if (!formData.fullName || !formData.bloodGroup) {
      Swal.fire("Warning", "Full Name and Blood Group are required.", "warning");
      return;
    }

    try {
      setLoading(true);
      const res = await updateDonorAPI(donor.id, formData);

      if (res.status === 200) {
        Swal.fire("Success!", "Donor details updated successfully.", "success");
        setOpenModal(false);
        refresh?.(); // refresh donor list
      } else {
        Swal.fire("Error!", "Failed to update donor details.", "error");
      }
    } catch (err) {
      console.error("Update failed:", err);
      Swal.fire("Error!", "Unable to update donor. Try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpenModal(true)}
        className="bg-white text-black px-3 py-1.5 rounded-full font-medium text-xs hover:bg-gray-200 transition"
      >
        Edit
      </button>

      {/* Modal */}
      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)}>
        <div className="bg-black/95 rounded-2xl text-white border border-gray-800 shadow-2xl">
          {/* Header */}
          <div className="flex justify-between items-center border-b border-gray-700 px-6 py-4">
            <h3 className="text-lg font-semibold text-white">Edit Donor Details</h3>
            <button
              onClick={() => setOpenModal(false)}
              className="text-gray-400 hover:text-white transition"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName" className="text-sm text-gray-300 mb-1 block">
                Full Name
              </Label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm text-gray-300 mb-1 block">
                Email
              </Label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-sm text-gray-300 mb-1 block">
                Phone Number
              </Label>
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Blood Group */}
            <div>
              <Label htmlFor="bloodGroup" className="text-sm text-gray-300 mb-1 block">
                Blood Group
              </Label>
              <Select
                id="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white text-sm focus:ring-2 focus:ring-red-500"
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </Select>
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="location" className="text-sm text-gray-300 mb-1 block">
                Location
              </Label>
              <input
                id="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
                className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Donation Date */}
            <div>
              <Label htmlFor="donationDate" className="text-sm text-gray-300 mb-1 block">
                Date of Donation
              </Label>
              <input
                id="donationDate"
                type="date"
                value={formData.donationDate}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-700 bg-gray-900 text-white px-3 py-2 text-sm focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t border-gray-700 px-6 py-4">
            <Button
              onClick={handleUpdate}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              {loading ? "Updating..." : "Update"}
            </Button>
            <Button
              color="gray"
              onClick={() => setOpenModal(false)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EditModal;
