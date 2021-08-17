import { Container, Content } from './styles';
import logo from '../../Assets/Img/logosimplified.png';
import groups from '../../Assets/Img/groups.png';
import profile from '../../Assets/Img/profile.png';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = ({setViewNavbar}) => {
    return(
        <Container>
            <Content>
                <div className="closeNav">
                    { window.innerWidth <= 768 &&
                        <button onClick={() => setViewNavbar(false)}><ArrowBack/></button>
                    }
                </div>
                
                <Link to="/dashboard">
                    <img src={profile} alt="Imagem de usuário"/>
                    <h4>Perfil</h4>
                    <span>Kenzinho</span>
                </Link>

                <Link to="/groups">
                    <img src={groups} alt="Imagem de usuário"/>
                    <h4>Grupo</h4>
                    <span>Participando: 2</span>
                </Link>
            </Content>
            <img src={logo} alt="Logo"/>
        </Container>
    )
}

export default Navbar;