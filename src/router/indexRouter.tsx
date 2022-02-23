import React from 'react';
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';
import Login from '../views/login/login';
import NewSandBox from '../views/sandbox/NewSandBox';
import Home from '../views/sandbox/home/Home';
import RightList from '../views/sandbox/right-manage/RightList';
import RoleList from '../views/sandbox/right-manage/RoleList';
import UserList from '../views/sandbox/user-manage/UserList';
import Nopermission from '../views/sandbox/nopermission/Nopermission';

const RouterConfig = () => {
  const elment = useRoutes([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: localStorage.getItem('token') ? <NewSandBox /> : <Navigate replace to="/login" />,
      children: [
        {
          path: '/',
          element: <Navigate replace to="/home" />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/user-manage/list',
          element: <UserList />
        },
        {
          path: '/right-manage/role/list',
          element: <RoleList />
        },
        {
          path: '/right-manage/right/list',
          element: <RightList />
        },
        {
          path: '*',
          element: <Nopermission />
        }
      ]
    }
  ]);
  return elment;
};

const IndexRouter = () => {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
};

export default IndexRouter;
