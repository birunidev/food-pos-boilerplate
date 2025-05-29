export const getThumbnailUrl = (imageUrl?: string): string => {
  if (!imageUrl) return `https://www.kliknusae.com/img/404.jpg`;
  return `${import.meta.env.VITE_SERVER_BASE_URL}${imageUrl}`;
};
