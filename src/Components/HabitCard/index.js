import { useState } from 'react'
import { useHabits } from '../../Providers/Habits'
import { ButtonContainer, MainContainer, TitleContainer } from './styles'

const HabitCard = ({habit}) => {

const [achieved, setAchieved] = useState(habit.achieved);
const [howMuch, setHowMuch] = useState(habit.how_much_achieved);

const id = habit.id;
const how_much_achieved = Number(howMuch);

const data = {
    achieved,
    how_much_achieved,
    id   
};

const { deleteHabit,  updateHabit } = useHabits();

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
                <input type='number' 
                    defaultValue={habit.how_much_achieved}
                    onChange={((e) => setHowMuch(e.target.value))}/>
                <input type='checkbox'
                    defaultValue={habit.achieved} 
                    checked={achieved} 
                    onChange={((e) => setAchieved(!achieved))} />   
            </TitleContainer>
            <ButtonContainer>
                <button className='update'
                    onClick={() => updateHabit(data)}>
                    Atualizar
                </button> 
                <button className='delete'
                    onClick={() => deleteHabit(habit.id)}>
                    Excluir
                </button>
            </ButtonContainer>
        </MainContainer>
    )
};

export default HabitCard

