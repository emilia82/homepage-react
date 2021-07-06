import "./style.css";

const Navigation = () => (
    <nav className="navigation">
        <ul className="navigation__list">
            <li className="navigation_listItem">
                <a className="navigation__link" href="#o-mnie">O Mnie</a>
                
            </li>
            <li className="navigation_listItem">
                <a className="navigation__link" href="#moje-sukcesy">Moje Sukcesy</a>
               
            </li>
            <li className="navigation_listItem">
                <a className="navigation__link" href="#ulubione-filmy">Ulubione filmy</a>
                
            </li>
        </ul>
    </nav>
);

export default Navigation;