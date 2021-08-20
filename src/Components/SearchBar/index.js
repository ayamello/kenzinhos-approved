import { useState } from "react";
import { InputContainer, Button, Container } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { useAuth } from "../../Providers/Auth";
import { useGroupsUser } from "../../Providers/GroupsUser";

const SearchBar = ({ groups, setNewGroups, setIsNewGroups }) => {
  const [groupName, setGroupName] = useState("");

  const { token } = useAuth();
  const { getGroups } = useGroupsUser();

  const findGroup = (groupName) => {
    if (
      groups.find(
        (group) => group.name.toUpperCase() === groupName.toUpperCase()
      )
    ) {
      setNewGroups(
        groups.filter(
          (group) => group.name.toUpperCase() === groupName.toUpperCase()
        )
      );
      setIsNewGroups(true);
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

      <Button className="AllGroupsButton">
        <button
          onClick={() => {
            setIsNewGroups(false);
            getGroups(token);
          }}
        >
          Meus grupos
        </button>
      </Button>
    </Container>
  );
};

export default SearchBar;
