'use client';

import React, { useState } from 'react';
import { Download, Loader2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { COMPANY_INFO } from '@/lib/data';
import { ShimmerButton } from './ui/shimmer-button';

interface DownloadButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'nav' | 'drawer' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
}

export function DownloadButton({
  label = 'Unduh Profil (PDF)',
  variant = 'primary',
  size = 'md',
  className,
  showIcon = true,
}: DownloadButtonProps) {
  const [downloadState, setDownloadState] = useState<'idle' | 'preparing' | 'downloading' | 'completed'>('idle');

  const handleDownload = () => {
    if (downloadState !== 'idle') return;

    setDownloadState('preparing');

    setTimeout(() => {
      setDownloadState('downloading');

      // Trigger the actual file download
      const link = document.createElement('a');
      link.href = COMPANY_INFO.pdfPath;
      link.download = COMPANY_INFO.pdfFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setDownloadState('completed');
        setTimeout(() => {
          setDownloadState('idle');
        }, 2200);
      }, 700);
    }, 400);
  };

  const getButtonText = () => {
    switch (downloadState) {
      case 'preparing':
        return 'Menyiapkan...';
      case 'downloading':
        return 'Mengunduh...';
      case 'completed':
        return 'Dokumen Terunduh!';
      default:
        return label;
    }
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-xs min-h-[38px]',
    md: 'py-2.5 px-5 text-sm min-h-[44px]',
    lg: 'py-3.5 px-7 text-base min-h-[48px]',
  };

  const variantClasses = {
    primary:
      'rounded-full bg-accent-indigo-btn hover:bg-accent-violet text-white border border-white/10 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]',
    secondary:
      'rounded-full bg-ground-surface hover:bg-white/[0.05] text-ink-primary border border-white/10 hover:border-white/20 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]',
    nav:
      'rounded-full bg-accent-indigo-btn hover:bg-accent-violet text-white font-semibold border border-white/10 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]',
    drawer:
      'rounded-xl w-full bg-accent-indigo-btn hover:bg-accent-violet text-white font-bold py-3.5 border border-white/10 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]',
    outline:
      'rounded-full bg-transparent hover:bg-white/[0.05] text-ink-primary border border-white/15 hover:border-white/20 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]',
  };

  return (
    <ShimmerButton
      type="button"
      onClick={handleDownload}
      disabled={downloadState !== 'idle'}
      shimmer={variant !== 'secondary' && variant !== 'outline'}
      aria-label="Unduh Dokumen Resmi Company Profile PT Global Agra Ripta Solusindo (PDF)"
      className={cn(
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {showIcon && (
        <span className="shrink-0">
          {downloadState === 'idle' && <Download className="w-4 h-4" strokeWidth={2} />}
          {(downloadState === 'preparing' || downloadState === 'downloading') && (
            <Loader2 className="w-4 h-4 animate-spin text-white" strokeWidth={2} />
          )}
          {downloadState === 'completed' && (
            <Check className="w-4 h-4 text-accent-emerald" strokeWidth={2.5} />
          )}
        </span>
      )}
      <span>{getButtonText()}</span>
    </ShimmerButton>
  );
}
