import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import "./SideBar.css"

function SideBar({props, links}) {
    
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        setToggle(false)
    }, [props, links]) 
    return (
        <div className={toggle ? 'sidebar__container active' : 'sidebar__container'}>
            <div className="sidebar__wrapper">
                <button onClick={()=> setToggle(!toggle)} className='toggle_sidebar'>Toggle</button>
                {links.map(x => <div>
                    <h6>{x.categoria}</h6>
                    <ul>
                        {x.links.map(link => <li><Link to={link.url}>{link.name}</Link></li>)}
                    </ul>
                </div>)}
            </div>
        </div>
    )
}
export default SideBar