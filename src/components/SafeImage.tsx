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
    const processedSrc = getAssetUrl(src);

    if (attempt === 0) {
      return processedSrc;
    }

    // Google Drive alternative link
    if (attempt === 1 && src.includes('drive.google.com')) {
      const fileDMatch = src.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || src.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (fileDMatch && fileDMatch[1]) {
        return `https://drive.google.com/uc?export=view&id=${fileDMatch[1]}`;
      }
    }

    // Fallback image if primary URL fails
    if (fallbackSrc && (attempt >= 2 || (attempt >= 1 && !src.includes('drive.google.com')))) {
      return getAssetUrl(fallbackSrc);
    }

    if (processedSrc.startsWith('http://') || processedSrc.startsWith('https://') || processedSrc.startsWith('data:')) {
      return processedSrc;
    }

    const cleanSrc = src.split('?')[0];

    // Attempt 0: Primary path (/uploads/filename)
    if (attempt === 0) {
      return getAssetUrl(src);
    }

    // Attempt 1: Without /uploads/ prefix (/filename)
    if (attempt === 1) {
      const noUploads = cleanSrc.replace('/uploads/', '/').replace(/^uploads\//, '');
      return getAssetUrl(noUploads);
    }

    // Attempt 2: Fallback src if provided
    if (attempt === 2 && fallbackSrc) {
      return getAssetUrl(fallbackSrc);
    }

    // Attempt 3: Relative path (./uploads/filename)
    if (attempt === 3) {
      const clean = cleanSrc.startsWith('/') ? cleanSrc.slice(1) : cleanSrc;
      return `./${clean}`;
    }

    // Attempt 4: Relative path without uploads (./filename)
    if (attempt === 4) {
      const cleanNoUploads = cleanSrc.replace('/uploads/', '/').replace(/^uploads\//, '').replace(/^\//, '');
      return `./${cleanNoUploads}`;
    }

    return getAssetUrl(src);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const maxAttempt = 4;
    if (attempt < maxAttempt) {
      setAttempt((prev) => prev + 1);
    } else {
      if (onError) {
        onError(e);
      }
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


