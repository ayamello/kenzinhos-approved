import { useState } from "react";
import { InputContainer, Button, Container } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { useGroupsUser } from "../../Providers/GroupsUser";
import { useAuth } from "../../Providers/Auth";

const SearchBar = ({ groups }) => {
  const [groupName, setGroupName] = useState("");

  const { token } = useAuth();
  const { setGroups, getGroups } = useGroupsUser();

  const findGroup = (groupName) => {
    if (groups.find((group) => group.name === groupName)) {
      setGroups(groups.filter((group) => group.name === groupName));
    }
  };

  return (
    <Container>
      <InputContainer>
        <input
          placeholder="Meu Grupo"
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button
          onClick={() => {
            findGroup(groupName);
            setGroupName("");
          }}
        >
          <SearchIcon />
        </button>
      </InputContainer>

      <Button className="AllGroupsButton" >
        <button onClick={() => getGroups(token)}>Meus grupos</button>
      </Button>
    </Container>
  );
};

export default SearchBar;
