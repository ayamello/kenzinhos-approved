import { useState } from "react";
import { useHabits } from "../../Providers/Habits";
import { ButtonContainer, MainContainer, TitleContainer } from "./styles";
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Rating } from "@material-ui/lab";

const AchievedSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const HabitCard = ({ habit }) => {
  const [achieved, setAchieved] = useState(habit.achieved);
  const [howMuch, setHowMuch] = useState(habit.how_much_achieved);

  const id = habit.id;
  const how_much_achieved = Number(howMuch);

  const data = {
    achieved,
    how_much_achieved,
    id,
  };

  const defaultDifficulty = () => {
    if (habit.difficulty === "muito-facil") {
      return 1;
    }
    if (habit.difficulty === "facil") {
      return 2;
    }
    if (habit.difficulty === "medio") {
      return 3;
    }
    if (habit.difficulty === "dificil") {
      return 4;
    }
    if (habit.difficulty === "muito-dificil") {
      return 5;
    }
  };

  const { deleteHabit, updateHabit } = useHabits();

  return (
    <MainContainer>
      <TitleContainer>
        <h3>{habit.title}</h3>
        <p>
          Categoria: <span>{habit.category}</span>
        </p>
        <p>
          Frequência: <span>{habit.frequency}</span>
        </p>
      </TitleContainer>
      <TitleContainer>
        <h4>Dificuldade</h4>
        <Rating name="read-only" defaultValue={defaultDifficulty} readOnly />
      </TitleContainer>
      <TitleContainer>
        <p>Quanto você evoluiu?</p>
        <AchievedSlider
          name="simple-controlled"
          value={howMuch}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          min={0}
          max={100}
          onChange={(event, newValue) => {
            setHowMuch(newValue);
          }}
        />
        <h5>Conseguiu realizar?</h5>
        <div className="formCompleted">
          <input 
            type="checkbox" 
            className="check" 
            id="yesOption" 
            defaultValue={habit.achieved} 
            checked={achieved} 
            onChange={((e) => setAchieved(!achieved))}
          />
          <label htmlFor="yesOption" className="yesOption">Sim</label>

          <input 
            type="checkbox" 
            className="check" 
            id="noOption" 
            defaultValue={habit.achieved} 
            checked={!achieved} 
            onChange={((e) => setAchieved(!achieved))}
          />
          <label htmlFor="noOption">Não</label>
        </div>
      </TitleContainer>
      <ButtonContainer>
        <button className="update" onClick={() => updateHabit(data)}>
          Atualizar
        </button>
        <button className="delete" onClick={() => deleteHabit(habit.id)}>
          Excluir
        </button>
      </ButtonContainer>
    </MainContainer>
  );
};

export default HabitCard;