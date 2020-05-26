import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, Link } from 'react-router-dom';


interface IProps {
    type?: string
    action: (e: any)=>void
    className?: string
    children?: any
}

Button.propTypes = {
    type: PropTypes.string,
    action: PropTypes.func,
    className: PropTypes.string
}

/**
 * Button exports a button component.
 * @param {string} props.type Type, options: 'icon'/'i' or empty
 * @param {function} props.action Action handler
 * @param {string} props.className Extra CSS classes
 * @param {*} props.children Child nodes
 */
export function Button(props: IProps) {
    switch(props.type) {
        case 'icon' || 'i':
            return (
                <button onClick={props.action} className={props.className !== undefined ? 'btn btn-icon ' + props.className : 
                'btn btn-icon'}>
                    {props.children}
                </button>
            )
        default:
            return (
                <button onClick={props.action} className={props.className !== undefined ? 'btn font-medium p-2 flex flex-row items-center truncate '+
                    props.className : 'btn default font-medium p-2 flex flex-row items-center truncate'}>
                    {props.children}
                </button>
            )
    }
}

interface ILinkButtonProps {
    path?: string
    exact?: boolean
    icon?: string
    input?: string
    type?: string
    isMDI?: boolean
    className?: string
    children?: any
}

ButtonLink.propTypes = {
    path: PropTypes.string,
    exact: PropTypes.bool,
    icon: PropTypes.string,
    input: PropTypes.string,
    type: PropTypes.string,
    isMDI: PropTypes.bool,
    className: PropTypes.string
}

/**
 * ButtonLink exports a button-like redirecting link
 * @param {string} props.path Redirecting path
 * @param {boolean} props.exact Enable exact route matching
 * @param {string} props.icon Icon
 * @param {string} props.input Text content
 * @param {string} props.type Button type
 * @param {boolean} props.isMDI Enable Material Design Community icons
 * @param {string} props.className CSS additional classes
 * @param {*} props.children Child nodes
 */
export function ButtonLink(props: ILinkButtonProps) {
    // Routing hook
    const match = useRouteMatch({
        path: props.path,
        exact: props.exact
    })
    const path = (props.path === undefined) ? '/' : props.path

    const iconClass = props.isMDI ? 'mdi' : 'material-icons-outlined'
    let classType = 'list-item default truncate'
    // Avoid getting undefined on CSS classes
    const className = props.className === undefined ? '' : ' ' + props.className
    

    // Templates
    let iconTemplate = null
    if (props.icon !== undefined) {
        iconTemplate = props.isMDI ? <span className={`${iconClass} ${props.icon}`}></span> :
        <span className={iconClass}>{props.icon}</span>
    }
    let inputTemplate = null
    if (props.input !== undefined) {
        inputTemplate = <span className='ml-2'>{props.input}</span>
    }

    switch (props.type) {
        case 'icon' || 'i':
            classType = 'btn btn-icon stroked-default flex justify-center items-center'
            return (
                <Link to={path} className={match ? `${classType} 
                 ${className} active`: `${classType}${className}`}>
                    {iconTemplate}
                    {props.children}
                </Link>
            )
        default:
            return (
                <Link to={path} className={match ? `${classType} ${className} active`: 
                `${classType}${className}`}>
                    {iconTemplate}
                    {inputTemplate}
                    {props.children}
                </Link>
            )
    }
}