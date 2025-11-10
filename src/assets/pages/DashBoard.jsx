import React, { useEffect, useState } from "react";
import { Tabs, TabItem, Card, Button } from "flowbite-react";
import { getDonorAPI } from "../../services/allAPIs";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function DashBoard() {
  const [donors, setDonors] = useState([]);
  const [activeGroup, setActiveGroup] = useState("A+");
  const [expandedId, setExpandedId] = useState(null);

  const bloodGroups = ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"];

  // Fetch donors
  const fetchDonors = async () => {
    try {
      const res = await getDonorAPI();
      if (res.status === 200) {
        setDonors(res.data);
      }
    } catch (err) {
      console.error("Error fetching donors:", err);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  // Filter donors by blood group
  const getFilteredDonors = (group) => {
    return donors.filter(
      (d) =>
        d.bloodGroup &&
        d.bloodGroup.trim().toUpperCase() === group.toUpperCase()
    );
  };

  // ✅ Working PDF generation (no oklch / iframe errors)
  const handleDownload = async (donor) => {
    try {
      // Create a clean printable div
      const printable = document.createElement("div");
      printable.style.padding = "20px";
      printable.style.width = "600px";
      printable.style.fontFamily = "Arial, sans-serif";
      printable.style.background = "#ffffff";
      printable.style.color = "#000";
      printable.style.border = "2px solid #e5e5e5";
      printable.style.borderRadius = "10px";
      printable.innerHTML = `
        <h2 style="color:#d32f2f; text-align:center;">Blood Donor Details</h2>
        <hr style="margin:10px 0;">
        <p><b>Full Name:</b> ${donor.fullName || "N/A"}</p>
        <p><b>Blood Group:</b> ${donor.bloodGroup || "N/A"}</p>
        <p><b>Location:</b> ${donor.location || "N/A"}</p>
        <p><b>Email:</b> ${donor.email || "N/A"}</p>
        <p><b>Phone:</b> ${donor.phone || "N/A"}</p>
        <p><b>Last Donation Date:</b> ${donor.donationDate || "N/A"}</p>
        <br>
        <p style="text-align:center; color:gray; font-size:12px;">
          Generated via Blood Connect • ${new Date().toLocaleString()}
        </p>
      `;
      document.body.appendChild(printable);

      // Convert to canvas
      const canvas = await html2canvas(printable, {
        scale: 2,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
      pdf.save(`${donor.fullName || "donor"}_details.pdf`);

      // Clean up
      document.body.removeChild(printable);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Header */}
      <section className="w-full bg-black text-white py-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Blood Connect</h1>
        <p className="text-gray-300 mb-6">
          Organized by Caritas Matha Hospital — Saving Lives, One Drop at a Time
        </p>
      </section>

      {/* Donor List */}
      <section
        id="donor-list"
        className="bg-white w-full py-12 flex flex-col items-center px-6"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-black mb-2">
            Blood Donor <span className="text-red-600">List</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            View registered donors, grouped by their blood type.
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full max-w-6xl">
          <Tabs aria-label="Blood Group Tabs" variant="underline" className="w-full text-center">
            {bloodGroups.map((group) => {
              const donorsForGroup = getFilteredDonors(group);
              return (
                <TabItem
                  key={group}
                  active={activeGroup === group}
                  title={group}
                  onClick={() => setActiveGroup(group)}
                >
                  {donorsForGroup.length === 0 ? (
                    <p className="text-gray-500 text-center py-6">
                      No donors found for {group}.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                      {donorsForGroup.map((donor) => (
                        <Card
                          key={donor.id}
                          id={`donor-${donor.id}`}
                          className="shadow-md border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg"
                          onClick={() =>
                            setExpandedId(
                              expandedId === donor.id ? null : donor.id
                            )
                          }
                        >
                          {/* Always visible */}
                          <h3 className="text-xl font-semibold text-red-600 mb-1">
                            {donor.bloodGroup}
                          </h3>
                          <p className="text-gray-700 mb-2">
                            <strong>Location:</strong> {donor.location}
                          </p>

                          {/* Expanded details */}
                          {expandedId === donor.id && (
                            <div className="mt-2 text-gray-800">
                              <p><strong>Name:</strong> {donor.fullName}</p>
                              <p><strong>Email:</strong> {donor.email}</p>
                              <p><strong>Phone:</strong> {donor.phone}</p>
                              <p>
                                <strong>Donation Date:</strong>{" "}
                                {donor.donationDate}
                              </p>

                              <Button
                                onClick={(e) => {
                                  e.stopPropagation(); // prevent card toggle
                                  handleDownload(donor);
                                }}
                                className="mt-3 bg-red-600 hover:bg-red-700 text-white rounded-full"
                              >
                                Download PDF
                              </Button>
                            </div>
                          )}
                        </Card>
                      ))}
                    </div>
                  )}
                </TabItem>
              );
            })}
          </Tabs>
        </div>
      </section>
    </div>
  );
}

export default DashBoard;
