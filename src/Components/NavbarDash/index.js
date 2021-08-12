import { Container, Content } from './style';
import logo from '../../Assets/Img/logosimplified.png';
import groups from '../../Assets/Img/groups.png';
import profile from '../../Assets/Img/profile.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <Container>
            <Content>
                <Link to="/dashboard-profile">
                    <img src={profile} alt="Imagem de usuário"/>
                    <h4>Perfil</h4>
                    <span>Kenzinho</span>
                </Link>

                <Link to="/dashboard-groups">
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