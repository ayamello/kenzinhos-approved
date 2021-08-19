import { Container } from './styles';
import { Dehaze } from '@material-ui/icons';

const MenuBurger = ({viewNavbar, setViewNavbar}) => {
    return(
        <Container>
            {viewNavbar === false &&
                <button onClick={() => setViewNavbar(true)}>
                    <Dehaze />
                </button>
            }
        </Container>
    );
}

export default MenuBurger;