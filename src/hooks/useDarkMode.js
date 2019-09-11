import { useLocalStorage } from "./useLocalStorage.js";

export const useDarkMode = (key, initialValue, cb) => {
    const [values, setValues] = useLocalStorage(key, initialValue || {});
    const handleChanges = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        cb();
    };
    return [values, handleChanges, handleSubmit];
};