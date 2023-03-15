export default function Link(props){
    return(
        <a href={props.href} className={`link-primary ${props.disableUnderline ? 'text-decoration-none' : ''}`} >{props.children}</a>
    );
}