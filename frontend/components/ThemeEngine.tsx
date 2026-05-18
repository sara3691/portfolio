'use client';

import { useEffect } from 'react';

interface ThemeProps {
  theme: any;
}

export default function ThemeEngine({ theme }: ThemeProps) {
  useEffect(() => {
    if (!theme) return;

    const root = document.documentElement;
    
    // Colors
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--secondary', theme.colors.secondary);
    root.style.setProperty('--background', theme.colors.background);
    root.style.setProperty('--surface', theme.colors.surface);
    root.style.setProperty('--text', theme.colors.text);
    root.style.setProperty('--text-muted', theme.colors.textMuted);
    root.style.setProperty('--accent', theme.colors.accent);

    // Fonts
    root.style.setProperty('--font-heading', theme.fonts.heading);
    root.style.setProperty('--font-body', theme.fonts.body);

    // Radius
    root.style.setProperty('--radius-btn', theme.borderRadius.button);
    root.style.setProperty('--radius-card', theme.borderRadius.card);

    // Shadows
    root.style.setProperty('--shadow-card', theme.shadows.card);

  }, [theme]);

  return null;
}
