import {Link, NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            </ul>
            <ul>
                <li><NavLink exact to="/about" activeClassName="active">About</NavLink></li>
            </ul>
            <ul>
                <li><NavLink exact to="/contact" activeClassName="active">Contact</NavLink></li>
            </ul>
            <ul>
                <li><NavLink exact to="/categories" activeClassName="active">Categories</NavLink></li>
            </ul>
            <ul>
                <li><NavLink exact to="/login" activeClassName="active">login</NavLink></li>
            </ul>
            <ul>
                <li><NavLink exact to="/register" activeClassName="active">register</NavLink></li>
            </ul>
            <ul>
                <li><NavLink exact to="/dashboard" activeClassName="active">dashboard</NavLink></li>
            </ul>
            <ul>
                <li><NavLink exact to="/payments" activeClassName="active">payments</NavLink></li>
            </ul>
         <h1>Navbar</h1>
        </nav>
    )
}
