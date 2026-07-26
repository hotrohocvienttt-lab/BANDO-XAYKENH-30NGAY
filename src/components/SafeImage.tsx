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
    
    // Attempt 0: Primary path with asset URL
    if (attempt === 0) {
      return getAssetUrl(src);
    }
    
    // Attempt 1: Without /uploads/ prefix
    if (attempt === 1) {
      const noUploads = src.replace('/uploads/', '/').replace(/^uploads\//, '');
      return getAssetUrl(noUploads);
    }
    
    // Attempt 2: Direct relative ./ path
    if (attempt === 2) {
      const clean = src.startsWith('/') ? src.slice(1) : src;
      return `./${clean}`;
    }

    // Attempt 3: Direct relative ./ path without uploads
    if (attempt === 3) {
      const cleanNoUploads = src.replace('/uploads/', '/').replace(/^uploads\//, '').replace(/^\//, '');
      return `./${cleanNoUploads}`;
    }

    // Attempt 4: Fallback src if provided
    if (attempt >= 4 && fallbackSrc) {
      return getAssetUrl(fallbackSrc);
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
