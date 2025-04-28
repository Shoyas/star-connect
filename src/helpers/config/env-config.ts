export const getBaseUrl = () => {
  return process.env.NEXT_PUBLIC_SERVER_API_BASE_URL || 'http://localhost:3000';
};

