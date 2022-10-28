import React, { useState } from "react";
import { connect } from "react-redux";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import Users from "../components/user/Users";
import { getUserData } from "../redux/actions/userAction";
import { UserProps } from "../components/user/User";

interface SearchProps {
  usersList: UserProps[];
  getUser: Function;
}

const Search: React.FC<SearchProps> = ({ usersList, getUser }) => {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    setName("");
    const isExist = usersList.filter(
      (user: UserProps) => user.name === name
    ).length;

    if (!isExist) {
      getUser(name);
    }
  };

  return (
    <div>
      <form>
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button onClick={handleSubmit} type="submit">
          Sumbit
        </Button>
      </form>
      {<Users usersList={usersList || []} />}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: (name: string) => dispatch(getUserData(name)),
  };
};
const mapStateToProps = (state: any) => ({
  usersList: state.users.list,
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
