// src/components/Dashboard.tsx
import React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-6 ">
        <Sidebar />
        <div className="p-6 col-span-5">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Card Title</h2>
              <p>Card content goes here.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Card Title</h2>
              <p>Card content goes here.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Card Title</h2>
              <p>Card content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
