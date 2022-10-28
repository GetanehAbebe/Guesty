import React from "react";

export interface UserProps {
  name: string;
  countries: string[];
  gender: string;
}

const User: React.FC<UserProps> = ({ name, countries, gender }) => {
  return (
    <tr className="joke">
      <td>{name}</td>
      <td>{gender}</td>
      <td>{countries.join(",")}</td>
    </tr>
  );
};

export default User;
