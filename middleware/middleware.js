//middleware/middleware.js
export { auth as middleware } from '@/auth';

// Path: utils/convertToSerializeableObject.js
export const getPublicIdFromUrl = (imageUrl) => {
	return imageUrl.split('/').slice(-2).join('/').split('.')[0];
};
