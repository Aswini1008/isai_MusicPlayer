import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminContent = () => {
  return (
    <section className="flex-grow p-6 bg-gray-900 text-white shadow-lg rounded-lg">
      <Outlet />
    </section>
  );
};

export default AdminContent;
