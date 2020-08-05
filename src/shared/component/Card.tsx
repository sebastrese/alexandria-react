import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card exports a card component.
 * @param {string} props.type Type, options: 'small'/'sm', 'medium'/'md' or empty
 * @param {string} props.className Extra CSS classes
 * @param {string} props.image Image URL
 * @param {string} props.alt Image alternative text for accessibility
 * @param {*} props.children Child nodes
 */
export function Card(props: IProps) {
    switch(props.type) {
        case 'small' || 'sm':
            return (
                <div className={props.className !== undefined ? 'card card-sm'+ props.className : 'card card-sm'}>
                    <img src={props.image} alt={props.alt} className='rounded-full w-24 h-24 shadow-lg' />
                    {props.children}
                </div>)
        case 'medium' || 'md':
            return (
                <div className={props.className !== undefined ? 'card max-w-md '+ props.className : 'card max-w-md'}>
                    <img src={props.image} alt={props.alt} className='rounded-lg' />
                    {props.children}
                </div>
            )
        case 'rounded' || 'rnd':
            return(
            <div className={props.className}>
                <img src={props.image} alt={props.alt} className='rounded-full w-24 h-24 shadow-lg' />
                {props.children}
            </div>)
        default:
            return (
                <div className={props.className !== undefined ? 'card '+ props.className : 'card'}
                    style={{backgroundImage:`url(${props.image})`}}>
                    {props.children}
                </div>
            )
    }
}

interface IProps {
    type?: string
    className?: string
    image?: string
    alt?: string
    children?: any
}

Card.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string
}