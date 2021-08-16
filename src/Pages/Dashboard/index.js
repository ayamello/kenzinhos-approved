import NavbarDash from "../../Components/NavbarDash";
import Habits from '../../Components/Habits';
import { useEffect } from 'react';
import { useHabits } from '../../Providers/Habits';


const Dashboard = () => {
    
    const { loadHabits } = useHabits()

    useEffect(() => {
            loadHabits()
        }   
      , []);

    return(
        <div>
            <NavbarDash />
            <Habits/>
        </div>
    );
};

export default Dashboard;