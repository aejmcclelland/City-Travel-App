import '../assets/styles/global.css';
import { NavBar } from '../components/NavBar';
import AuthProvider from '../components/authProvider';

export const metadata = {
	title: 'London Travel App',
	description: 'Plan your trip to London with our travel app',
};

const MainLayout = ({ children }) => {
	return (
		<AuthProvider>
			<html lang='en'>
				<body>
					<NavBar />
					<main style={{ paddingTop: '0.2rem' }}>{children}</main>
				</body>
			</html>
		</AuthProvider>
	);
};

export default MainLayout;
