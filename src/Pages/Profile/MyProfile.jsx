import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 text-xl font-semibold text-gray-700 bg-gray-50">
        Please log in to view your profile.
      </div>
    );
  }

  // Helper function to format date
  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900 sm:p-8">
      <div className="w-full max-w-4xl overflow-hidden bg-white shadow-xl dark:bg-gray-800 rounded-2xl">
        {/* Header/Hero Section */}
        <div
          className="relative h-48 bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1518655048521-f130df041737?q=80&w=2070&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="z-10 text-3xl font-extrabold text-white sm:text-4xl drop-shadow-lg">
              My Profile
            </h1>
          </div>
        </div>

        {/* Profile Content */}
        <div className="relative z-20 flex justify-center p-6 -mt-16 sm:p-10">
          <div className="flex flex-col items-center w-full space-y-6 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-8">
            {/* Profile Image & Basic Info */}
            <div className="flex flex-col items-center">
              <img
                src={
                  user.photoURL ||
                  "https://via.placeholder.com/150?text=User"
                }
                alt={user.displayName || "User"}
                className="object-cover w-32 h-32 border-4 border-green-500 rounded-full shadow-lg"
              />
              <h2 className="mt-4 text-2xl font-bold">
                {user.displayName || "Anonymous User"}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                {user.email || "Email not available"}
              </p>
            </div>

            {/* User Details */}
            <div className="flex-1 w-full sm:w-auto">
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                {/* Email Verification Card */}
                <div className="p-4 shadow-inner bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <p className="flex items-center text-lg font-semibold">
                    Email Verification
                  </p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    {user.emailVerified ? (
                      <span className="font-medium text-green-500">
                        ✅ Verified
                      </span>
                    ) : (
                      <span className="font-medium text-red-500">
                        ❌ Not Verified
                      </span>
                    )}
                  </p>
                </div>

                {/* Account Details Card */}
                <div className="p-4 shadow-inner bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <p className="flex items-center text-lg font-semibold">
                    Account Details
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold text-gray-600 dark:text-gray-300">
                      UID:
                    </span>{" "}
                    <span className="font-mono break-all">{user.uid}</span>
                  </p>
                </div>

                {/* Timestamps Card */}
                <div className="col-span-1 p-4 shadow-inner bg-gray-50 dark:bg-gray-700 rounded-xl sm:col-span-2">
                  <p className="text-lg font-semibold">Timeline</p>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold text-gray-600 dark:text-gray-300">
                      Created:
                    </span>{" "}
                    {formatDate(user.metadata?.creationTime)}
                  </p>
                  <p className="mt-1 text-sm">
                    <span className="font-semibold text-gray-600 dark:text-gray-300">
                      Last Sign-In:
                    </span>{" "}
                    {formatDate(user.metadata?.lastSignInTime)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
