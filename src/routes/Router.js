import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsPage from "../pages/PostsPage/PostsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/posts/:id" element={<CommentsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}