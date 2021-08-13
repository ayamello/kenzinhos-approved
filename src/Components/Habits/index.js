import { useHabits } from "../../Providers/Habits";
import {
    MainContainer,
  } from "./styles";

import HabitCard from "../HabitCard";

const Habits = () => {
    const {habits} = useHabits();

    return (
        <MainContainer>
            <h3>Hábitos</h3>
            <div>

            {
            habits&&
            habits.map((habit) => <HabitCard habit={habit} key={habit.id}/>)}
            </div>

        </MainContainer>
    )
}

export default Habits