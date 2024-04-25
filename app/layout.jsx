import '@/assets/styles/global.css';

const MainLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<main>{children}</main>
			</body>
		</html>
	);
};

export default MainLayout;
