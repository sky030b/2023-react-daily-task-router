import './App.css';
import { HashRouter, NavLink, useNavigate, Outlet, useParams } from 'react-router-dom';
import { Routes, Route } from 'react-router'
import { Fragment } from 'react';

// LogOut 元件
const LogOut = () => {
  const navigate = useNavigate();
  return <button onClick={() => {navigate('/login')}}>登出</button>
}

// 父層元件
const Post = () => {
  return <div>
    <h3>Post 頁面</h3>
    <Outlet />
  </div>
}

// 子層元件
const PostId = () => {
  let params = useParams();
  params.userId = "xxxx"
  return <p>Post: {params.userId}</p>;
}

const Todo = () => {
  return (
    <Fragment>
      <p>這是 Todo 頁面</p>
      <LogOut />
    </Fragment>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
          <NavLink to="/post/post123">
            <p>Post 詳細頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
