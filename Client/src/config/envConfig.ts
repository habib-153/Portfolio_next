const envConfig = {
  baseApi: process.env.NEXT_PUBLIC_BASE_API,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  VITE_USER_ID: process.env.VITE_USER_ID,
  VITE_SERVICE_ID: process.env.VITE_SERVICE_ID,
  VITE_TEMPLATE_ID: process.env.VITE_TEMPLATE_ID,
};

export default envConfig;
