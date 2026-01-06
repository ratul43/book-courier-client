import React from 'react';

const UpdateProfile = () => {
    return (
        <div>
            {/* Update Profile Form */}
        <div className="card bg-base-100 shadow-lg ml-10 w-2xl p-6">
          <h3 className="text-xl font-semibold mb-4">Update Profile</h3>

          <form className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Profile Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter image URL"
                className="input input-bordered w-full"
              />
            </div>

            <div className="pt-2">
              <button className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
        </div>
    );
};

export default UpdateProfile;