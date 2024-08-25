import styles from "./input.module.css";

const Input = (props) => {

    const { type, name, placeholder, value, changeFunction, focusHandler } = props;

    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={changeFunction}
                onFocus={focusHandler}
                className={`${styles.input}`}
            />
        </>
    )
}

export default Input;