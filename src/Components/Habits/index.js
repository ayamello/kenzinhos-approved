import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useHabits } from "../../Providers/Habits";
import {
    TitleContainer,
    InputContainer,
    FormContainer,
    MainContainer,
  } from "./styles";


const Habits = () => {
    const history = useHistory();
    const {habits} = useHabits();

    return (
        <MainContainer>
            <h3>Hábitos</h3>
            {habits.map((habit) => <div>{habit.title}</div>)}
        </MainContainer>
    )
}

export default Habits