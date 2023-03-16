const Avatar = (props) =>{
    <div onClick={props.onClick}>
        <img src={props.src ?? 'avatar.png'} class='rounded-circle shadow' alt='Avatar' style='height: 60px; width: 60px;'/>
    </div>
}
 
export default Avatar;