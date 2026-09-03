export type User = {
  id: number;
  name: string;
  status: string | null;
  photos: {
    small: string | null;
    large: string | null;
  };
  followed: boolean;
};

export type UsersResponse = {
  items: User[];
  totalCount: number;
  error: string | null;
};
