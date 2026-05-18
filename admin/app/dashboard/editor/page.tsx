'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '@/lib/api';
import { toast } from 'react-hot-toast';

export default function LiveEditor() {
  const [previewKey, setPreviewKey] = useState(0);

  const refreshPreview = () => setPreviewKey(k => k + 1);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Controls */}
      <div className="w-1/3 h-full overflow-y-auto bg-white border-r border-slate-200 p-6">
        <h2 className="text-2xl font-bold mb-6">Live Visual Editor</h2>
        
        {/* We can dynamically inject forms here based on selected section */}
        <div className="space-y-6">
          <div className="p-4 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <p className="text-sm text-slate-500 text-center">
              Select a section to edit its content and style.
              Changes are saved to MongoDB and reflected in the preview.
            </p>
          </div>
          
          {/* Example Hero Edit */}
          <div className="card">
            <h3 className="font-bold mb-4">Hero Content</h3>
            <input 
              className="w-full border rounded px-3 py-2 mb-3" 
              placeholder="Hero Title"
              onChange={() => refreshPreview()} 
            />
            <textarea 
              className="w-full border rounded px-3 py-2" 
              placeholder="Hero Description"
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div className="flex-1 h-full bg-slate-200 p-4">
        <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden relative border-8 border-slate-300">
          <iframe 
            key={previewKey}
            src={process.env.NEXT_PUBLIC_PORTFOLIO_URL || "http://localhost:3000"} 
            className="w-full h-full border-none"
            title="Portfolio Preview"
          />
          <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold animate-pulse">
            LIVE PREVIEW
          </div>
        </div>
      </div>
    </div>
  );
}
