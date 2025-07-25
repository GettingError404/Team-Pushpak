import { AuthenticatedUser } from '../types';

export const decodeToken = (token: string): AuthenticatedUser | null => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const decoded = JSON.parse(jsonPayload);

    // Ensure the decoded token has the expected structure
    if (decoded.id && decoded.role) {
         return {
            id: decoded.id,
            name: decoded.name || 'User', // Name might not be in token, adjust as needed
            role: decoded.role
        };
    }
    return null;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};
