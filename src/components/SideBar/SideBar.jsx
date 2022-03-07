import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import icon from "../../image/toggle.png"
import "./SideBar.css"

function SideBar({props, links}) {
    
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        setToggle(false)
    }, [props, links]) 
    return (
        <div className={toggle ? 'sidebar__container active' : 'sidebar__container'}>
            <div className="sidebar__wrapper">
                <img onClick={()=> setToggle(!toggle)} className='toggle_sidebar' src={icon} alt="toggle" />
                {links.map(x => <div>
                    <h6 className='sidebar__subTitle'>{x.categoria}</h6>
                    <ul className='sidebar__ul'>
                        {x.links.map(link => <li className='sidebar__li'><Link to={link.url}>{link.name}</Link></li>)}
                    </ul>
                </div>)}
            </div>
        </div>
    )
}
export default SideBar