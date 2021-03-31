import React from 'react'
import './styles.css'




function AppBar({ items }) {
    const ListApp = ({ tittle, icon }) => {
        return (
            <li>
                <a href={`/${tittle}`}>
                    <span className="icon"><IconContent className={icon} aria-hidden="true" /></span>
                    <span className="tittle">
                        {tittle}
                    </span>
                </a>
            </li>
        )
    }
    return (
        <div className="container">
            <div className="navigation">
                <ul>
                    {items.map(item => <ListApp key={item.id} {...item} />)}
                </ul>
            </div>
            <div className="toggle" />
        </div>
    )
}

module.exports = { AppBar }