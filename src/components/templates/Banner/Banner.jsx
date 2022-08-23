import React from 'react';
import {Container} from 'react-bootstrap'
import './Banner.css'
export default function Banner({ children }) {
    return (
        <section className='inner-banner'>
            <Container>
                <ul className='list-unstyled thm-breadcrumb'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li className='active'>
                        <a href="#none">{children}</a>
                    </li>
                </ul>
                <h2 className='inner-banner__title'>{children}</h2>
            </Container>
        </section>
    );
};