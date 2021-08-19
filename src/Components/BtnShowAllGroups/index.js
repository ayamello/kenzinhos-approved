import { ShowAllGroups } from './styles';
import { Autorenew } from '@material-ui/icons';

const BtnShowAllGroups = ({ShowAllGroupsBtn}) => {
  return (
    <ShowAllGroups>
      <button onClick={ShowAllGroupsBtn}>
        Mostrar todos os grupos <Autorenew />
      </button>
    </ShowAllGroups>
  );
};

export default BtnShowAllGroups;