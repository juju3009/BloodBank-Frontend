import React from 'react'
import { Tabs, TabItem,Card,Button } from "flowbite-react";
import { HiUserCircle, HiAdjustments, HiClipboardList } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
function DashBoard() {
  return (
    <div>
  <div className="bg-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4"> Blood Connect</h1>
        <p className="text-gray-300 mb-6">
          Organized by Caritas Matha Hospital — Saving Lives, One Drop at a Time
        </p>
        <div className="flex justify-center space-x-4">
          <img
            src="https://cdn.pixabay.com/photo/2020/04/17/08/09/blood-5053760_1280.jpg"
            alt="Blood Donation"
            className="w-60 h-40 object-cover rounded-xl border-4 border-white"
          />
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=500&q=60"
            alt="Donor Smiling"
            className="w-60 h-40 object-cover rounded-xl border-4 border-white"
          />
          <img
            src="https://cdn.pixabay.com/photo/2020/04/21/21/16/vaccine-5074670_1280.jpg"
            alt="Blood Bags"
            className="w-60 h-40 object-cover rounded-xl border-4 border-white"
          />
        </div>
      </section>

      {/* Tabs Section */}
 <section id="donor-list" className="bg-white min-h-screen flex flex-col items-center pt-16 px-6">
  {/* Title */}
  <div className="text-center mb-10">
    <h2 className="text-4xl font-extrabold text-black mb-2">
      Blood Donor <span className="text-red-600">List</span>
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      A record of generous donors who have contributed blood, organized by their blood group.
    </p>
  </div>

  {/* Tabs Section */}
  <div className="w-full max-w-6xl px-4">
    <Tabs
      aria-label="Blood Group Tabs"
      variant="underline"
      className="w-full text-center"
      theme={{
        tablist: {
          base: "flex flex-wrap justify-center gap-4 border-b border-black mb-0",
        },
        tabitem: {
          base: "flex items-center justify-center gap-2 py-2 px-4 text-lg font-medium text-black hover:text-gray-600",
          active: {
            on: "border-b-2 border-black text-black font-semibold",
            off: "border-b-2 border-transparent text-gray-500 hover:text-gray-700",
          },
        },
      }}
    >
      <TabItem active title="A+">
      
      </TabItem>

      <TabItem title="A-">
    
      </TabItem>

      <TabItem title="B+">
    
      </TabItem>
        <TabItem title="B-">
        
          
      </TabItem>

      <TabItem title="O+">
      
      </TabItem>

      <TabItem title="O-">
     
      </TabItem>

      <TabItem title="AB+">
        
           
      </TabItem>

      <TabItem title="AB-">
       
      </TabItem>
    </Tabs>
  </div>
</section>

    {/* About Section */}
 <section id='about' className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image or Illustration */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1600959907703-125ba1374a12?auto=format&fit=crop&w=700&q=80"
            alt="Blood Donation"
            className="rounded-2xl shadow-lg grayscale hover:grayscale-0 transition duration-500"
          />
        </div>

        {/* Right: Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            About <span className="text-red-600">Blood Connect</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            <span className="font-semibold text-white">Blood Connect</span> is an initiative by 
            <span className="text-red-500 font-semibold"> Caritas Matha Hospital</span> 
            aimed at building a compassionate network of donors and recipients.
            Our mission is to bridge the gap between those who want to help and 
            those who urgently need it.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            What began as a small community project within our hospital has grown into a 
            large-scale effort to ensure that no one in our region has to wait for blood 
            during critical moments. Through collaboration, awareness, and advanced 
            matching technology, we strive to make every drop count.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Our motive is simple — to <span className="text-white font-semibold">save lives</span> 
            through unity, compassion, and timely action. We believe that together, 
            we can make blood scarcity a thing of the past.
          </p>
        </div>
      </div>
    </section>
      {/* Contact Section */}
<section id='contact' className="w-full bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-red-700">
          Contact Us
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
         
          <Card className="p-6 border border-gray-200 shadow-md bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Caritas Matha Hospital
            </h3>
            <p className="text-gray-700 mb-2">Kottayam, Kerala</p>
            <p className=" flex items-center text-gray-700 mb-2">  <FaPhone />+91 98765 43210</p>
 <p className="flex items-center text-gray-700 mb-4">
  <CiMail className="mr-2 text-red-600 text-xl" />
  <a
    href="mailto:contact@caritasmathahospital.org"
    className="hover:underline hover:text-red-700"
  >
    contact@caritasmathahospital.org
  </a>
</p>
            <Button
              href="#"
              className="mt-2 bg-red-600 hover:bg-red-700 text-white rounded-full"
            >
              Get In Touch
            </Button>
          </Card>

          {/* Right: Map Iframe */}
          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-md border border-gray-200">
            <iframe
              title="Caritas Matha Hospital Location"
              src="https://www.google.com/maps?q=Caritas+Hospital+Kottayam+Kerala&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
  )
}

export default DashBoard
