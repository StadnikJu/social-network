import { useAppDispatch, useAppSelector } from "@/common/hooks";
import {
  fetchUsersTC,
  followAC,
  selectCurrentPage,
  selectPageSize,
  selectTotalCount,
  selectUsers,
  setCurrentPageAC,
  unfollowAC,
} from "../model/users-slice";
import { UserCard } from "./UserCard/UserCard";
import { useEffect } from "react";
import { Pagination } from "@/common/components";
import s from "./Users.module.css";

export const UsersPage = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  const pageSize = useAppSelector(selectPageSize);
  const totalCount = useAppSelector(selectTotalCount);
  const currentPage = useAppSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchUsersTC({ currentPage, pageSize }));
  }, [currentPage, pageSize]);

  const followHandler = (userId: number) => dispatch(followAC(userId));
  const unfollowHandler = (userId: number) => dispatch(unfollowAC(userId));
  const onPageChanged = (page: number) => dispatch(setCurrentPageAC(page));

  const pagesCount = Math.ceil(totalCount / pageSize);

  return (
    <div className={s.usersGridWrapper}>
      <div className={s.usersList}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onFollow={followHandler}
            onUnfollow={unfollowHandler}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        pagesCount={pagesCount}
        pageSize={pageSize}
        changePageSize={() => {}}
        setCurrentPage={onPageChanged}
      />
    </div>
  );
};
