import React from 'https://esm.sh/react';
import { Link, useRouter } from "https://deno.land/x/aleph/mod.ts"
import Logo from './logo.tsx';
import './header.css';

export default function Header() {
    const { pathname } = useRouter();

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
    ];

    return (<div className="headerContainer">
        <Logo />
        <nav className="headerContainerNav">
            <ul className="headerContainerNavList">
                {navItems.map((item, index) => (
                    <li className={`headerContainerNavListItem ${item.href === pathname ? 'headerContainerNavListItem--active' : ''}`} active={} key={index}>
                        <Link to={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>);
}
