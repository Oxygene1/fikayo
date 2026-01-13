interface LogoProps {
  variant?: 'full' | 'icon' | 'horizontal';
  className?: string;
  theme?: 'light' | 'dark';
}

export function Logo({ variant = 'icon', className = '', theme = 'light' }: LogoProps) {
  const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
  const accentColor =  'oklch(98.5% 0 0)';
  const primaryColor = 'oklch(20% 0.2 280)';

  // Icon-only logo (FD Monogram)
  if (variant === 'icon') {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Background geometric structure */}
        <rect x="4" y="4" width="40" height="40" rx="8" fill={accentColor} fillOpacity="0.1" />
        
        {/* F letter - structured bars */}
        <path
          d="M14 12H28V16H18V21H26V25H18V36H14V12Z"
          fill={accentColor}
        />
        
        {/* D letter - forward motion arc */}
        <path
          d="M30 12H36C39.866 12 43 15.134 43 19V29C43 32.866 39.866 36 36 36H30V12ZM34 16V32H36C37.6569 32 39 30.6569 39 29V19C39 17.3431 37.6569 16 36 16H34Z"
          fill={primaryColor}
        />
        
        {/* Subtle grid/framework accent */}
        <line x1="5" y1="24" x2="11" y2="24" stroke={accentColor} strokeWidth="1" opacity="0.3" />
        <line x1="37" y1="8" x2="43" y2="8" stroke={accentColor} strokeWidth="1" opacity="0.3" />
      </svg>
    );
  }

  // Horizontal logo (icon + text)
  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="4" width="40" height="40" rx="8" fill={accentColor} fillOpacity="0.1" />
          <path
            d="M14 12H28V16H18V21H26V25H18V36H14V12Z"
            fill={accentColor}
          />
          <path
            d="M30 12H36C39.866 12 43 15.134 43 19V29C43 32.866 39.866 36 36 36H30V12ZM34 16V32H36C37.6569 32 39 30.6569 39 29V19C39 17.3431 37.6569 16 36 16H34Z"
            fill={primaryColor}
          />
          <line x1="5" y1="24" x2="11" y2="24" stroke={accentColor} strokeWidth="1" opacity="0.3" />
          <line x1="37" y1="8" x2="43" y2="8" stroke={accentColor} strokeWidth="1" opacity="0.3" />
        </svg>
        <div className="flex flex-col">
          <span className={`font-bold text-lg ${textColor}`}>Fikayomi Duke Famakinwa</span>
          <span className="text-sm text-gray-500">Project Management | Business Analysis</span>
        </div>
      </div>
    );
  }

  // Full logo (icon + name + tagline)
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <svg
        width="80"
        height="80"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="40" height="40" rx="8" fill={accentColor} fillOpacity="0.1" />
        <path
          d="M14 12H28V16H18V21H26V25H18V36H14V12Z"
          fill={accentColor}
        />
        <path
          d="M30 12H36C39.866 12 43 15.134 43 19V29C43 32.866 39.866 36 36 36H30V12ZM34 16V32H36C37.6569 32 39 30.6569 39 29V19C39 17.3431 37.6569 16 36 16H34Z"
          fill={primaryColor}
        />
        <line x1="5" y1="24" x2="11" y2="24" stroke={accentColor} strokeWidth="1" opacity="0.3" />
        <line x1="37" y1="8" x2="43" y2="8" stroke={accentColor} strokeWidth="1" opacity="0.3" />
      </svg>
      <div className="text-center">
        <h1 className={`text-2xl font-bold ${textColor} mb-1`}>Fikayomi Duke Famakinwa</h1>
        <p className="text-sm text-gray-500 mb-2">Project Management | Business Analysis</p>
        <p className="text-xs font-medium text-indigo-600">Driving Strategy. Delivering Results.</p>
      </div>
    </div>
  );
}

// Compact monogram for smaller spaces
export function LogoMonogram({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#4F46E5" fillOpacity="0.1" />
      <path
        d="M14 12H28V16H18V21H26V25H18V36H14V12Z"
        fill="#4F46E5"
      />
      <path
        d="M30 12H36C39.866 12 43 15.134 43 19V29C43 32.866 39.866 36 36 36H30V12ZM34 16V32H36C37.6569 32 39 30.6569 39 29V19C39 17.3431 37.6569 16 36 16H34Z"
        fill="#0F172A"
      />
      <line x1="5" y1="24" x2="11" y2="24" stroke="#4F46E5" strokeWidth="1" opacity="0.3" />
      <line x1="37" y1="8" x2="43" y2="8" stroke="#4F46E5" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

// Animated logo for hero section
export function LogoAnimated({ className = '' }: { className?: string }) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect 
        x="4" 
        y="4" 
        width="40" 
        height="40" 
        rx="8" 
        fill="#4F46E5" 
        fillOpacity="0.1"
        className="animate-pulse"
      />
      <path
        d="M14 12H28V16H18V21H26V25H18V36H14V12Z"
        fill="#4F46E5"
        className="animate-[fadeIn_0.6s_ease-in]"
      />
      <path
        d="M30 12H36C39.866 12 43 15.134 43 19V29C43 32.866 39.866 36 36 36H30V12ZM34 16V32H36C37.6569 32 39 30.6569 39 29V19C39 17.3431 37.6569 16 36 16H34Z"
        fill="#0F172A"
        className="animate-[fadeIn_0.8s_ease-in]"
      />
      <line 
        x1="5" 
        y1="24" 
        x2="11" 
        y2="24" 
        stroke="#4F46E5" 
        strokeWidth="1" 
        opacity="0.3"
        className="animate-[slideRight_1s_ease-in-out_infinite]"
      />
      <line 
        x1="37" 
        y1="8" 
        x2="43" 
        y2="8" 
        stroke="#4F46E5" 
        strokeWidth="1" 
        opacity="0.3"
        className="animate-[slideRight_1s_ease-in-out_infinite_0.5s]"
      />
    </svg>
  );
}