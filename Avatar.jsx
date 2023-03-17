import styles from './Avatar.module.css';

function Avatar({ onClick, src = 'avatar.png', size }) {
  return (<img onClick={onClick} src={src} className={`rounded-circle shadow ${styles[size]}`} alt="Avatar" />);
}

export default Avatar;
