import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
	mongoose.set('strictQuery', true);

	if (connected) {
		console.log('MongoDB is already connected...');
		return;
	}
	// Connect to MongoDB
	await mongoose.connect(process.env.MONGO_URI);
	connected = true;
	console.log('MongoDB connected...');
};

export default connectDB;
