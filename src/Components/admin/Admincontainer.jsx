import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminContent from './AdminContent';

const AdminContainer = () => {
  return (
    <section className="flex w-full h-[calc(130vh-75px)] bg-gradient-to-br from-black via-gray-900 to-blue-800 text-white">
      <AdminSidebar />
      <AdminContent />
    </section>
  );
};

export default AdminContainer;
