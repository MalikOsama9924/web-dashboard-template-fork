import React from "react";
import type { UserListType } from "./types";

const UserList: React.FC<UserListType> = ({ email }) => {
  return <li className="border-b border-gray-200 py-2">{email}</li>;
};

export default UserList;
