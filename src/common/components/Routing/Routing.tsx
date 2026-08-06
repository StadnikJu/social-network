import { Route, Routes } from "react-router-dom";
import { Profile } from '@/features/profile/ui/Profile';
import { Dialogs } from "@/features/messenger/ui/Dialogs";
import { News } from "@/features/News";
import { Music } from "@/features/Music";
import { Settings } from "../Settings";

export const Path = {
  Profile: "/profile",
  Dialogs: "/messages",
  DialogsDetail: "/messages/:id",
  News: "/news",
  Music: "/music",
  Settings: "/settings",
} as const;

export const Routing = () => (
  <Routes>
    <Route path={Path.Profile} element={<Profile />} />
    <Route path={Path.Dialogs} element={<Dialogs />} />
    <Route path={Path.DialogsDetail} element={<Dialogs />} />
    <Route path={Path.News} element={<News />} />
    <Route path={Path.Music} element={<Music />} />
    <Route path={Path.Settings} element={<Settings />} /> 
  </Routes>
);
