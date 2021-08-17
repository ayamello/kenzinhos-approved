import { useState } from "react";
import { InputContainer } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import { useGroupsUser } from "../../Providers/GroupsUserProvider";
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
    <>
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
        <button
          className="AllGroupsButton"
          onClick={() => getGroups(token)}
        >
          Mostrar todos os meus grupos
        </button>
      </InputContainer>
    </>
  );
};

export default SearchBar;
