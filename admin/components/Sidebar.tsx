'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Palette, 
  Layers, 
  Briefcase, 
  Cpu, 
  User, 
  Settings,
  Image as ImageIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Theme Studio', icon: Palette, href: '/dashboard/theme' },
  { name: 'Content Sections', icon: Layers, href: '/dashboard/sections' },
  { name: 'Projects', icon: Briefcase, href: '/dashboard/projects' },
  { name: 'Skills', icon: Cpu, href: '/dashboard/skills' },
  { name: 'Media Gallery', icon: ImageIcon, href: '/dashboard/media' },
  { name: 'Profile', icon: User, href: '/dashboard/profile' },
  { name: 'SEO & Settings', icon: Settings, href: '/dashboard/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 p-6 flex flex-col">
      <div className="text-2xl font-bold mb-10 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-500 rounded-lg" />
        Portfolio CMS
      </div>
      
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
              pathname === item.href 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" 
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            )}
          >
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </nav>
      
      <div className="pt-6 border-t border-slate-800">
        <button className="w-full px-4 py-3 text-slate-400 hover:text-white flex items-center gap-3">
          Logout
        </button>
      </div>
    </div>
  );
}
