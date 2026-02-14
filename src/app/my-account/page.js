

// app/my-account/page.js
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { clearSession } from '@/redux/sessionSlice';
import axios from 'axios';
import { toast } from 'react-toastify';
import TopNav from '@/loanComponent/Home/TopNav';
import Sidebar from '@/loanComponent/Home/Sidebar';
import ProfileBanner from '@/loanComponent/Profile/ProfileBanner';
import EditProfileForm from '@/loanComponent/Profile/EditProfileForm';
import { ArrowLeft, LogOut } from 'lucide-react';

export default function MyAccountPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  // Client-side protection: redirect if no customerId
  useEffect(() => {
    const customerId = localStorage.getItem("originalCustomerId");
    if (!customerId) {
      toast.error("Please login first");
      router.replace('/login');
    }
  }, [router]);

  const customerId = localStorage.getItem("originalCustomerId");

  const [isProfileLoaded, setIsProfileLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    PAN: "",
    gender: "",
    DOB: "",
    Organisation: "",
    Profession: "",
    bio: "",
    location: "",
    referralCode: ""
  });

  const [kycFiles, setKycFiles] = useState({
    panCard: null,
    aadhaar: null,
    cheque: null,
    photo: null,
    declaration: null
  });

  const handleFileChange = useCallback((key, file) => {
    setKycFiles((prev) => ({ ...prev, [key]: file }));
  }, []);

  // Fetch profile with credentials (this fixes the 400 error)
  const fetchCustomerProfile = useCallback(async () => {
    if (!customerId) return;

    try {
      console.log("Fetching profile for CustomerId:", customerId);

      const response = await axios.post(
        "/api/customer/profile",
        {
          jsonrpc: "2.0",
          method: "call",
          params: { CustomerId: Number(customerId) }
        },
        {
          withCredentials: true,           // ← Crucial: sends cookies (auth_session)
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("Profile response:", response.data);

      const profile = response.data?.result?.[0];

      if (!profile) {
        toast.error("Profile not found");
        return;
      }

      // Save minimal data for TopNav
      if (profile.name) localStorage.setItem("profile", profile.name);
      if (profile.referralCode) localStorage.setItem("Referral", String(profile.referralCode));

      setFormData({
        name: profile.name || "",
        email: profile.email || "",
        phone: profile.phone || "",
        pincode: profile.Pincode || "",
        PAN: profile.PAN || "",
        gender: profile.gender || "",
        DOB: profile.DOB || "",
        Organisation: profile.orgType || "",
        Profession: profile.profession || "",
        bio: profile.bio || "",
        location: profile.Pincode || "",
        referralCode: profile.referralCode || ""
      });

      setIsProfileLoaded(true);
    } catch (error) {
      console.error("Profile fetch error:", error);

      // Auto logout on auth failure
      if (error.response?.status === 400 || error.response?.status === 401) {
        toast.error("Session expired or invalid. Please login again.");
        localStorage.clear();
        document.cookie = "auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        router.replace('/login');
      } else {
        toast.error("Failed to load profile. Please try again.");
      }
    }
  }, [customerId, router]);

  // Auto-fetch on mount
  useEffect(() => {
    fetchCustomerProfile();
  }, [fetchCustomerProfile]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignOut = () => {
    dispatch(clearSession());
    localStorage.clear();
    document.cookie = "auth_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/login");
  };

  // Show loading while checking auth
  if (!customerId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fc]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#592eff] mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fc] mb-20">
      <TopNav />
      <Sidebar />

      {isProfileLoaded && <ProfileBanner profileData={formData} />}

      {/* Header Section */}
      <div className="px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push('/home')}
            className="mr-4 p-2 rounded-lg hover:bg-white/20 transition"
          >
            <ArrowLeft className="w-6 h-6 text-black" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="relative group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center text-4xl sm:text-5xl font-bold text-[#592eff] shadow-lg">
                {formData.name?.[0] || 'U'}
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left text-[#592eff]">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{formData.name}</h2>

              {(formData.Profession || formData.Organisation) && (
                <p className="text-[#5b4bff] text-sm">
                  {formData.Profession}
                  {formData.Profession && formData.Organisation ? ' • ' : ''}
                  {formData.Organisation}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            <EditProfileForm
              formData={formData}
              onChange={handleInputChange}
              customerId={customerId}
              onSaved={fetchCustomerProfile}
            />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>

              <button
                onClick={handleSignOut}
                className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-red-50 rounded-lg text-red-600 transition"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}