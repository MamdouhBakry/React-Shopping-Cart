import React from 'react'
import '../../css/Header/Header.css';
import { words } from '../../words';
export default function () {
    return (
        <>
            <header>
                {words.headerTitle}
            </header>
        </>
    )
}
