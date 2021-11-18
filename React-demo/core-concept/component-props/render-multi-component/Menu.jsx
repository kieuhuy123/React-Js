const root = document.getElementById("root");

const menu = [
    { href: "/", label: "Homepage" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/products", label: "Products" },
    { href: "/blogs", label: "Blog" },
    { href: "/more", label: "More" },
];

const MenuItem = ({ href, children }) => {
    return (
        <li className="menu-item">
            <a className="menu-link" href={href}>
                {children}
            </a>
        </li>
    );
};

const Menu = ({ menu }) => {
    const menuItems = menu.map(({ href, label }) => (
        <MenuItem key={href} href={href}>
            {label}
        </MenuItem>
    ));

    return <ul className="menu">{menuItems}</ul>;
};

const App = () => {
    return (
        <div>
            <h1>Render mutli components using `map()` function</h1>

            <Menu menu={menu} />
        </div>
    );
};

ReactDOM.render(<App />, root);
