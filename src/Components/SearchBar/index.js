import { useState } from "react";
import { InputContainer } from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = ({ groups, setGroups, getGroups }) => {
  const [groupName, setGroupName] = useState("");
  const userToken = JSON.parse(localStorage.getItem("@Kenzinho:token"));

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
        <button className='AllGroupsButton'onClick={() => getGroups(userToken)}>
          Mostrar todos os meus grupos
        </button>
      </InputContainer>
    </>
  );
};

export default SearchBar;
