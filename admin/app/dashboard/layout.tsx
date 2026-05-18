import Sidebar from '@/components/Sidebar';
import { Toaster } from 'react-hot-toast';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />
      <main className="ml-64 min-h-screen">
        {children}
      </main>
      <Toaster position="bottom-right" />
    </div>
  );
}
