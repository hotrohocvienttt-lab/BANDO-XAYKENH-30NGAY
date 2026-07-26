import React, { useState } from 'react';
import { getAssetUrl } from '../utils/imageHelper';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className,
  onError,
  ...props
}) => {
  const [attempt, setAttempt] = useState(0);

  if (!src) return null;

  const getSource = (): string => {
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return src;
    }
    
    // Attempt 0: Direct path (/uploads/filename)
    if (attempt === 0) {
      return getAssetUrl(src);
    }
    
    // Attempt 1: Without /uploads/ prefix (/filename)
    if (attempt === 1) {
      const noUploads = src.replace('/uploads/', '/').replace(/^uploads\//, '');
      return getAssetUrl(noUploads);
    }
    
    // Attempt 2: Fallback src if provided
    if (attempt === 2 && fallbackSrc) {
      return getAssetUrl(fallbackSrc);
    }

    // Attempt 3: Cache buster on primary path
    if (attempt === 3) {
      return `${getAssetUrl(src)}?v=${Date.now()}`;
    }

    return getAssetUrl(src);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (attempt < 4) {
      setAttempt((prev) => prev + 1);
    }
    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      src={getSource()}
      alt={alt || ''}
      className={className}
      referrerPolicy="no-referrer"
      onError={handleError}
      {...props}
    />
  );
};

