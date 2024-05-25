import '../assets/styles/global.css';
import { NavBar } from '../components/NavBar';
const MainLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<NavBar />
				<main style={{ paddingTop: '0.2rem' }}>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;
