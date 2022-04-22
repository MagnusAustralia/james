import Meta from "./Meta";
import styles from "../styles/Nav.module.css";

const Layout = ({ children }) => {
	return (
		<>
			<Meta />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;
