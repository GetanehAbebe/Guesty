import React from "react";
import { UserProps } from "./User";
import User from "./User";

export interface UsersProps {
  usersList: UserProps[] | [];
}

const Users: React.FC<UsersProps> = ({ usersList }) => {
  return (
    <table className="jokes">
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Countries [id]</th>
        </tr>
      </thead>
      <tbody>
        {usersList.length
          ? usersList.map(({ name, gender, countries }, index) => {
              return (
                <User
                  name={name}
                  gender={gender}
                  countries={countries}
                  key={`${countries.join("-")}-${index}`}
                />
              );
            })
          : null}
      </tbody>
    </table>
  );
};

export default Users;
