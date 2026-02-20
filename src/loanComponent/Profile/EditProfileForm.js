// components/Profile/EditProfileForm.js
'use client';

import { useState } from 'react';
import axios from 'axios';
import { Save, X, Pencil, User, Mail, Phone, MapPin, Grid3X3, Calendar, Briefcase, Building2 } from 'lucide-react';
import { toast } from 'react-toastify';

const REQUIRED_FIELDS = ['name', 'email', 'phone', 'DOB', 'PAN', 'pincode', 'gender'];

export default function EditProfileForm({ formData, onChange, customerId, onSaved }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [draft, setDraft] = useState(formData);

  const infoFields = [
    { label: 'Full Name', key: 'name', Icon: User },
    { label: 'Email', key: 'email', Icon: Mail, readOnly: true },
    { label: 'Phone', key: 'phone', Icon: Phone, readOnly: true },
    { label: 'Pincode', key: 'pincode', Icon: MapPin },
    { label: 'PAN', key: 'PAN', Icon: Grid3X3 },
    { label: 'DOB', key: 'DOB', Icon: Calendar },
    { label: 'Gender', key: 'gender', Icon: User },
    { label: 'Organisation', key: 'Organisation', Icon: Building2, readOnly: true },
    { label: 'Profession', key: 'Profession', Icon: Briefcase }
  ];

  const startEditing = () => {
    setDraft(formData);
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);

      const payload = {
        jsonrpc: '2.0',
        method: 'call',
        params: {
          CustomerId: Number(customerId),
          name: draft.name,
          email: formData.email,
          phone: formData.phone,
          Pincode: draft.pincode || draft.location || '',
          PAN: draft.PAN,
          DOB: draft.DOB,
          gender: draft.gender,
          orgType: formData.Organisation,
          profession: draft.Profession,
          source_id:"finsbee-website"
        }
      };

      await axios.post('/api/update/customer', payload);

      // Optimistic update to parent
      onChange('name', draft.name);
      onChange('pincode', draft.pincode);
      onChange('PAN', draft.PAN);
      onChange('DOB', draft.DOB);
      onChange('gender', draft.gender);
      onChange('Profession', draft.Profession);
      if (draft.pincode) onChange('location', draft.pincode);

      if (onSaved) await onSaved();

      setIsEditing(false);
      toast.success('Profile updated successfully.');
    } catch (error) {
      console.error('Failed to update profile:', error);
      toast.error('Could not update profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => setIsEditing(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-[#1f1f1f]">Personal Information</h3>
        {isEditing ? (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-3 py-1 bg-[#592eff] text-white rounded-lg hover:bg-[#4b22e0] disabled:opacity-50 transition-colors flex items-center space-x-1"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Saving...' : 'Save'}</span>
            </button>
            <button
              onClick={handleCancel}
              disabled={isSaving}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 transition-colors flex items-center space-x-1"
            >
              <X className="w-4 h-4" />
              <span>Cancel</span>
            </button>
          </div>
        ) : (
          <button
            onClick={startEditing}
            className="px-3 py-1 bg-gray-900 text-white rounded-lg hover:opacity-90 transition-colors flex items-center space-x-1"
          >
            <Pencil className="w-4 h-4" />
            <span>Edit</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {infoFields.map(({ label, key, Icon, readOnly }) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-1">
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </label>
            {isEditing ? (
              readOnly ? (
                <input
                  type={key === 'email' ? 'email' : 'text'}
                  value={formData[key] ?? ''}
                  disabled
                  title={`${label} cannot be edited`}
                  className="w-full px-3 py-2 border border-gray-200 bg-gray-100 text-gray-700 rounded-lg cursor-not-allowed"
                />
              ) : (
                <input
                  type={key === 'DOB' ? 'date' : 'text'}
                  value={draft[key] ?? ''}
                  onChange={(e) => setDraft((d) => ({ ...d, [key]: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#592eff] focus:border-transparent"
                />
              )
            ) : (
              <p className="text-gray-900 break-words capitalize">{formData[key] || '-'}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}