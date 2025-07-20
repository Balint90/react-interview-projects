import './styles.css';
import useLocalStorage from './useLocalStorage';

export default function LightDarkMode() {

    const [theme, setTheme] = useLocalStorage('theme', "dark");

    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className='light-dark-mode' data-theme={theme}>
            <div className='container'>
                <h1>Hello World!</h1>
                <button onClick={handleToggleTheme}>Change Theme!</button>
            </div>
        </div >
    )
}