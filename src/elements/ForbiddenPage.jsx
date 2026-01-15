import React from "react";
import { Link } from "react-router";

const ForbiddenPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-error mb-4">403</h1>
        <h2 className="text-2xl font-bold mb-2">Access Forbidden</h2>
        <p className="text-gray-500 mb-6">
          Sorry, you don’t have permission to access this page.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link to="/dashboard" className="btn btn-outline">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForbiddenPage;
