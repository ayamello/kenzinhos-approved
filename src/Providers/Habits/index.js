import { createContext, useEffect, useState, useContext } from 'react';

import api from '../../Services/api'

const HabitsContext = createContext();

export const HabitsProvider = ({children}) => {

    const [habits, setNewHabits] = useState([])

    const [token] = useState(JSON.parse(localStorage.getItem("@Kenzinho:token")) || "");

    const createHabit = (data) =>{

        const { 
            title, 
            category,
            difficulty,
            frequency,
            achieved,
            how_much_achieved,
            user } = data;

        api
        .post('habits/',
              { 
                title: title,
                category: category, 
                difficulty: difficulty,
                frequency: frequency,
                achieved: achieved,
                how_much_achieved: how_much_achieved, 
                user: user,
              }
            ,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            }, 
            ).then(e => console.log(e))
             .catch((e) => console.log(e));;

    }

    const deleteHabit = (id) =>{

        const newHabits = habits.filter((habit) => habit.id !== id);

        api
        .delete(`habits/${id}/`,{
            headers: {
            Authorization: `Bearer ${token}`,
            }
        }).then((response) => setNewHabits(newHabits));

    }

    const updateHabit = (data) =>{

        const {
            how_much_achieved,
            achieved,
            id,
        } = data

        const newHabits = habits.filter((habit) => habit.id !== id);

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
            }).catch((e) => console.log(e));

    }

    useEffect(() => {

        api
      .get('habits/personal/', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }).then((response) => setNewHabits(response.data))
        .catch((e) => console.log(e));

      }, [habits]);


    return(
        <HabitsContext.Provider value={{habits, createHabit,}}>
            {children}
        </HabitsContext.Provider>
    )
}

export const useHabits = () => useContext(HabitsContext);