import Body from "./components/Body";
import Header from "./components/Header";
// import store to my app
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {

  return (
    // provide store to my app
    <Provider store={store}> 
    <div>
    <Header />
    {/* if path is "/" body will render over here */}
    <RouterProvider router={appRouter} /> 
    </div>
    </Provider>
  );
};


export default App;


