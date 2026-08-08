import React from 'react'
import { NavLink } from 'react-router'

const AdminSidebar = () => {
  return (
    <sidebar className="flex flex-col">
      <NavLink to={"/admin"}>Dashboard</NavLink>
      <NavLink to={"/admin/vendor-request"}>VendorRequests</NavLink>
      <NavLink to={"/admin/vendors"}>Vendors</NavLink>
    </sidebar>
  )
}

export default AdminSidebar