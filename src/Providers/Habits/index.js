import { createContext, useState, useContext } from 'react';
import api from '../../Services/api';
import { toast } from 'react-toastify';

const HabitsContext = createContext();

export const HabitsProvider = ({children}) => {

    const [habits, setNewHabits] = useState([]);
    
    const loadHabits = () =>{

      const token = JSON.parse(localStorage.getItem('@Kenzinho:token'));

        api
        .get('habits/personal/', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }).then((response) => setNewHabits(response.data))
          .catch((err) => 
            toast.error('Hábitos não pode ser carregado'));
    };

    const deleteHabit = (id) =>{

        const token = JSON.parse(localStorage.getItem('@Kenzinho:token'));
        const newHabits = habits.filter((habit) => habit.id !== id);

        api
        .delete(`habits/${id}/`,{
            headers: {
            Authorization: `Bearer ${token}`,
            }
        })
        .then((response) => {
          setNewHabits(newHabits);
          toast.error('Hábito excluído');
          loadHabits()
        })
        .catch((err) => toast.error('Não foi possível excluir o hábito.'));

    };

    const updateHabit = (data) =>{

        const token = JSON.parse(localStorage.getItem('@Kenzinho:token'));

        const {
            how_much_achieved,
            achieved,
            id,
        } = data

        api
        .patch(`habits/${id}/`,
            {
                how_much_achieved: how_much_achieved,
                achieved: achieved,
            }
            ,
            {
                headers: {
                Authorization: `Bearer ${token}`,
                }
            })
            .then(loadHabits())
            .then(toast.info('Hábito atualizado'))
            .catch((err) => toast.error('Não foi possível atualizar o hábito.'));

    };

    return(
        <HabitsContext.Provider value={{habits, deleteHabit, updateHabit, loadHabits}}>
            {children}
        </HabitsContext.Provider>
    )
}

export const useHabits = () => useContext(HabitsContext);