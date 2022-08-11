import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Home } from "./pages/Home/Home";
import { Post } from "./pages/Post/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:issueNumber" element={<Post />} />
      </Route>
    </Routes>
  );
}
