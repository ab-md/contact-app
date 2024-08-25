import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className="text-indigo-600 text-3xl font-bold">Contact App</h2>
            <div>
                <h1 className="bg-indigo-200 text-indigo-800 py-0 px-2 rounded-md">Meta Contact</h1>
                <p className="ml-1 text-gray-700">
                    | To save your contacts
                </p>
            </div>
        </header>
    );
};

export default Header;