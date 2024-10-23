'use client';

import CustomTitle from "@/src/components/modules/dashboard/CustomTitle";

const AdminDashboard = () => {

    return (
      <div className="space-y-6">
        <CustomTitle description="Monitor your website's key metrics" title="Dashboard Overview" />
        {/* <div className="text-center">
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <p className="text-gray-500">Monitor your website&apos;s key metrics</p>
        </div> */}
      </div>
    );
  };

  export default AdminDashboard;