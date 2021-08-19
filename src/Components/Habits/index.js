import CreateHabitsModal from '../CreateHabitsModal'
import { useHabits } from '../../Providers/Habits';
import { Container, MainContainer, TitleContainer } from './styles';
import HabitCard from '../HabitCard';

const Habits = () => {

    const {habits} = useHabits();

    return (
        <Container> 
            <TitleContainer>
                <h3>Hábitos</h3>
            <CreateHabitsModal/>
        </TitleContainer>
        <MainContainer>
            <div>
            {
            habits&&
            habits.map((habit) => <HabitCard habit={habit} key={habit.id}/>)
            }
            </div>
        </MainContainer>
        </Container>

    )
}

export default Habits