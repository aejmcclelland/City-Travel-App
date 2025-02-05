// Path: utils/convertToSerializeableObject.js

export { auth as middleware } from '@/auth';

export const getPublicIdFromUrl = (imageUrl) => {
	return imageUrl.split('/').slice(-2).join('/').split('.')[0];
};
