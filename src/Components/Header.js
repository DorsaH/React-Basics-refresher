function Header({title, isDark, onToggle}){
    return(
        <header>
            <h1>{title}</h1>
            <button onClick={onToggle}>
                Switch to{isDark ? "light" : "Dark"} Mode
            </button>
        </header>
    );
}

export default Header;