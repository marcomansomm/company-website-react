import { Link } from 'react-router-dom';

const SubMenu = ({ link, text, isButton, isActive,  }) => {
  if (isButton) {
    return (
      <li className="nav-item">
        <a className="btn btn-primary" href={link}>{text}</a>
      </li>
    );
  }
  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <Link className="nav-link" to={link}>
        {text}
      </Link>
    </li>
  );
}

export default SubMenu;

//se nao funcionar troca a por link