import React from 'react'
import '../../css/Footer/Footer.css';
import { words } from '../../words';
export default function Footer() {
    return (
        <>
            <footer>
                &copy;{words.footerTitle}
            </footer>
        </>
    )
}
