import React from 'react'
import { useRef } from 'react'
import navcss from './Nav.module.css'

export default function Nav(){

    const menu = useRef()

    const menuHandler = () => {
        menu.current.classList.toggle(navcss.showMenu)
    }

    return (
        <nav>
            <div className={navcss.logo}>
                <span>Mohit</span>
            </div>

            <ul ref={menu}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Domains</a>
                </li>
                <li>
                    <a href="#">Expirience</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <div className={navcss.navBtns}>
            <div className={navcss.social}>
  <a href="https://www.linkedin.com/in/themohitbharti" target="_blank" rel="noopener noreferrer">
    <i className='ri-linkedin-line'></i>
  </a>
  <a href="https://github.com/themohitbharti" target="_blank" rel="noopener noreferrer">
    <i className='ri-github-line'></i>
  </a>
  <a href="https://twitter.com/themohitbharti" target="_blank" rel="noopener noreferrer">
    <i className='ri-twitter-x-line'></i>
  </a>
</div>

                <div className={navcss.bars} onClick={menuHandler}>
                   <i className='ri-menu-line'></i>
                </div>
            </div>
            

           
        </nav>
    )
}