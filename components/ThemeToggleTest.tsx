"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggleTest() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      padding: '20px', 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white',
      borderRadius: '10px',
      zIndex: 9999,
      fontSize: '12px'
    }}>
      <div><strong>Theme Debug:</strong></div>
      <div>Theme: {theme}</div>
      <div>Resolved: {resolvedTheme}</div>
      <button 
        onClick={() => setTheme('light')}
        style={{ margin: '5px', padding: '5px 10px', cursor: 'pointer' }}
      >
        Light
      </button>
      <button 
        onClick={() => setTheme('dark')}
        style={{ margin: '5px', padding: '5px 10px', cursor: 'pointer' }}
      >
        Dark
      </button>
      <button 
        onClick={() => setTheme('system')}
        style={{ margin: '5px', padding: '5px 10px', cursor: 'pointer' }}
      >
        System
      </button>
    </div>
  );
}
