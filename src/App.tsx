import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register_page from './Components/pages/Register_page';
import Root_page from './Components/pages/Root_page';
import Login_page from './Components/pages/Login_page';
import Choose_page from './Components/pages/Choose_page';
import Vote_page from './Components/pages/Vote_page';
import Roots_page from './Components/pages/Roots_page';
import Infomation_Page from './Components/pages/Information_page';
import EditProfile_Page from './Components/pageEdit/Editprofile_page';
import Vote2_page from './Components/pages/Vote2_page';
import Rang_page from './Components/pageRang/Rangtoday_page';
import Rangseven_page from './Components/pageRang/Rangseven_page';
import Rangthree_page from './Components/pageRang/Rangthree_page';
import EditImage_Page from './Components/pageEdit/EditImage_page';
import EditImageing_Page from './Components/pageEdit/Editimageing_page';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root_page />,
    children: [
      {
        path: "/regis",
        element: <Register_page />
      },
      {
        path: "/login",
        element: <Login_page />
      },
    ],
  },
  {
  path: "/",
  element: <Roots_page />,
  children: [
    {
      path: "/choose",
      element: <Choose_page />
    },
    {
      path: "/vote",
      element: <Vote_page />
    },
    {
      path: "/info",
      element: <Infomation_Page />
    },
    {
      path: "/editimage",
      element: <EditImage_Page />
    },
    {
      path: "/editimageing",
      element: <EditImageing_Page />
    },
    {
      path: "/editprofile",
      element: <EditProfile_Page />
    },
    
    {
      path: "/vote2",
      element: <Vote2_page />
    },
    {
      path: "/rangtoday",
      element: <Rang_page />
    },
    {
      path: "/rangseven",
      element: <Rangseven_page />
    },
    {
      path: "/rangthree",
      element: <Rangthree_page />
    },
  ],
}
]);

function App() {

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App;
