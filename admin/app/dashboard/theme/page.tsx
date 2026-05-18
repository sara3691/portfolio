'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import api from '@/lib/api';
import { toast } from 'react-hot-toast';

export default function ThemePage() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const { data } = await api.get('/admin/theme');
        if (data.length > 0) reset(data[0]);
      } catch (e) {
        console.error(e);
      }
    };
    fetchTheme();
  }, [reset]);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await api.post('/admin/theme', data);
      toast.success('Theme updated successfully!');
    } catch (e) {
      toast.error('Failed to update theme');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Theme Studio</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            🎨 Color Palette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
              <div className="flex gap-4">
                <input type="color" {...register('colors.primary')} className="h-10 w-20 rounded border cursor-pointer" />
                <input type="text" {...register('colors.primary')} className="flex-1 border rounded px-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
              <div className="flex gap-4">
                <input type="color" {...register('colors.secondary')} className="h-10 w-20 rounded border cursor-pointer" />
                <input type="text" {...register('colors.secondary')} className="flex-1 border rounded px-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
              <div className="flex gap-4">
                <input type="color" {...register('colors.background')} className="h-10 w-20 rounded border cursor-pointer" />
                <input type="text" {...register('colors.background')} className="flex-1 border rounded px-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
              <div className="flex gap-4">
                <input type="color" {...register('colors.text')} className="h-10 w-20 rounded border cursor-pointer" />
                <input type="text" {...register('colors.text')} className="flex-1 border rounded px-3" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            🔡 Typography
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Heading Font</label>
              <select {...register('fonts.heading')} className="w-full border rounded px-3 py-2">
                <option value="Inter">Inter</option>
                <option value="Outfit">Outfit</option>
                <option value="Roboto">Roboto</option>
                <option value="Poppins">Poppins</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Body Font</label>
              <select {...register('fonts.body')} className="w-full border rounded px-3 py-2">
                <option value="Inter">Inter</option>
                <option value="Outfit">Outfit</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
              </select>
            </div>
          </div>
        </section>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Theme Changes'}
        </button>
      </form>
    </div>
  );
}
