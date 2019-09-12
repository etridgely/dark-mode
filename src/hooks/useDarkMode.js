import { useLocalStorage } from "./useLocalStorage.js";
import { useEffect} from "react";

export const useDarkMode = (initialValue) => {
    const [mode, setMode] = useLocalStorage('new mode', initialValue);
    
    useEffect(() => {
        if (mode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    })

    return [mode, setMode];
};