import { ButtonContainer, MainContainer, TitleContainer } from './styles'
import { useHabits } from '../../Providers/Habits'

const HabitCard = ({habit}) => {

const { deleteHabit } = useHabits()

    return(
        <MainContainer>
            <TitleContainer>
               <h4>{habit.title}</h4> 
                <p>categoria: {habit.category}</p>
                <p>frequência: {habit.frequency}</p>
            </TitleContainer>
            <TitleContainer>   
                <h4>{habit.difficulty}</h4>
            </TitleContainer>
            <TitleContainer>
                <p>Quanto você evoluiu?</p> 
                <input type='number' defaultValue={habit.how_much_achieved}/>
                <input type='checkbox' defaultValue={habit.achieved}/>   
            </TitleContainer>
            <ButtonContainer>
                <button className='update'>Atualizar</button>
                <button className='delete'onClick={() => deleteHabit(habit.id)}>Excluir</button>
            </ButtonContainer>
        </MainContainer>
    )
}

export default HabitCard

