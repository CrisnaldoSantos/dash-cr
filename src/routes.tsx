import Dashboard from 'pages/Dashboard';
import { Login } from 'pages/Login';
import { UserList } from 'pages/Users';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { getAccessToken } from 'utils/dataStorage';

function RequireAuth({ children }: { children: JSX.Element }) {
  const token = getAccessToken();
  const location = useLocation();

  if (!token || token === '') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

function RedirectToDash() {
  const location = useLocation();
  return <Navigate to="/dashboard" state={{ from: location }} replace />;
}

function NoAuthToDash({ children }: { children: JSX.Element }) {
  const token = getAccessToken();
  const location = useLocation();

  if (token) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }
  return children;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <RedirectToDash />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/users"
          element={
            <RequireAuth>
              <UserList />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <NoAuthToDash>
              <Login />
            </NoAuthToDash>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
