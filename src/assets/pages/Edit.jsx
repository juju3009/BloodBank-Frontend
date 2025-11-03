import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import EditModal from "./EditModal";
import { getDonorAPI, deleteDonorAPI } from "../../services/allAPIs";

import Swal from "sweetalert2";

function Edit() {
  const [donors, setDonors] = useState([]);

  // Fetching donors from backend
  const fetchDonors = async () => {
    try {
      const res = await getDonorAPI();
      if (res.status === 200) {
        setDonors(res.data);
      } else {
        Swal.fire("Error!", "Failed to fetch donors", "error");
      }
    } catch (err) {
      Swal.fire("Error!", "Unable to connect to server", "error");
    }
  };

  
  useEffect(() => {
    fetchDonors();
  }, []);

  // Deleting donor
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This donor data will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      background: "#111",
      color: "#fff",
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteDonorAPI(id);
        if (res.status === 200) {
          Swal.fire("Deleted!", "Donor removed successfully.", "success");
          fetchDonors(); // refresh list
        } else {
          Swal.fire("Error!", "Failed to delete donor", "error");
        }
      }
    });
  };

  return (
    <div>
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-16 px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594904351111-8a37a1f6ed0b?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <h2 className="text-4xl font-semibold text-black mb-8 tracking-wide drop-shadow-lg">
          Edit Donor List
        </h2>

        <div className="w-full max-w-5xl bg-black/85 rounded-2xl p-8 shadow-2xl text-white border border-gray-800 backdrop-blur-sm">
          {donors.length > 0 ? (
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700 uppercase tracking-wider text-xs">
                  <th className="p-3 text-left">Full Name</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Phone</th>
                  <th className="p-3 text-left">Blood Group</th>
                  <th className="p-3 text-left">Location</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {donors.map((donor) => (
                  <tr
                    key={donor.id}
                    className="border-b border-gray-800 hover:bg-gray-900/60 transition"
                  >
                    <td className="p-3">{donor.fullName}</td>
                    <td className="p-3">{donor.email}</td>
                    <td className="p-3">{donor.phone}</td>
                    <td className="p-3">{donor.bloodGroup}</td>
                    <td className="p-3">{donor.location}</td>
                    <td className="p-3">{donor.donationDate}</td>
                    <td className="p-3">
                      <div className="flex justify-center items-center gap-2">
                        <EditModal donor={donor} />
                        <button
                          onClick={() => handleDelete(donor.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-full font-medium text-xs transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-400 py-10">
              No donor records found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Edit;
