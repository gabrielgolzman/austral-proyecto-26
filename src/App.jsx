import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import BooksContainer from "./components/biz/booksContainer/BooksContainer";
import NewBook from "./components/biz/newBook/NewBook"
import { BOOKS } from "./data";
import Login from "./components/auth/login/Login";
import Dashboard from "./components/biz/dashboard/Dashboard";
import NotFound from "./components/routes/notFound/NotFound";
import Protected from "./components/routes/protected/Protected";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogIn = () => {
    setIsSignedIn(true);
  }

  // JSX
  return (
    <>
      <div className="d-flex align-items-center flex-column">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="library" replace />} />
            <Route path="login" element={<Login onLogin={handleLogIn} />} />
            <Route element={<Protected isSignedIn={isSignedIn} />}>
              <Route path="library" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )

}

export default App;