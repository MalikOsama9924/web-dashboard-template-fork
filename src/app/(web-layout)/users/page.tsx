"use client";

import ErrorMsg from "@/components/ui/ErrorMsg/ErrorMsg";
import Spinner from "@/components/ui/Spinner/Spinner";
import UserList from "@/modules/user/components/UserList/UserList";
import { useGetAllUsers } from "@/modules/user/hooks";

const Users = () => {
  // queries
  const { data: users, isLoading, error } = useGetAllUsers();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <ErrorMsg
        message={error.message}
        description="Please try again."
      />
    );
  }

  if (!users) {
    return <div>No users found</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">Users ({users.totalCount})</h2>
      <div>
        <ul className="list-decimal">
          {users.data.map((user) => (
            <UserList
              key={user._id}
              email={user.email}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
