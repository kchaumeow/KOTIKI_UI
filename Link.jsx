const Link = (props) =>{
    <a href={props.href} className={`link-primary ${props.disableUnderline ? 'text-decoration-none' : ''}`} >{props.children}</a>
}

export default Link;