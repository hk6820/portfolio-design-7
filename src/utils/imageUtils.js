// Image management utilities
import { validateImagePath, getImagePath } from './configUtils';

// Function to preload images for better performance
export const preloadImages = (imagePaths) => {
  const promises = imagePaths.map(path => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(path);
      img.onerror = () => reject(new Error(`Failed to load image: ${path}`));
      img.src = path;
    });
  });
  
  return Promise.allSettled(promises);
};

// Function to get optimized image path
export const getOptimizedImagePath = (imagePath, options = {}) => {
  const { width, height, quality = 80, format = 'webp' } = options;
  
  if (!validateImagePath(imagePath)) {
    return getImagePath(imagePath);
  }
  
  // For now, return the original path
  // In production, you might want to use a CDN or image optimization service
  return imagePath;
};

// Function to get image dimensions
export const getImageDimensions = (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight,
        aspectRatio: img.naturalWidth / img.naturalHeight
      });
    };
    img.onerror = () => reject(new Error(`Failed to load image: ${imagePath}`));
    img.src = imagePath;
  });
};

// Function to create responsive image srcset
export const createResponsiveSrcSet = (basePath, sizes = [320, 640, 1024, 1280]) => {
  if (!validateImagePath(basePath)) {
    return getImagePath(basePath);
  }
  
  // For now, return the original path
  // In production, you might want to generate different sizes
  return basePath;
};
