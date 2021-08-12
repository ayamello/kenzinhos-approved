import CreateHabitsModal from "../../Components/CreateHabitsModal"
import Habits from "../../Components/Habits"

const Dashboard = () => {
    return(
        <div>
            <CreateHabitsModal/>
            <Habits/>
        </div>
    );
}

export default Dashboard;