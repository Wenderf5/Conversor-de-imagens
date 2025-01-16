import { createBrowserRouter } from "react-router";

//Pages
import { App } from "../App";
import { Home } from "../pages/Home";
import { Convert } from "../pages/Convert";
import { Resize } from "../pages/Resize";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/convert',
                element: <Convert />
            },
            {
                path: '/resize',
                element: <Resize />
            }
        ]
    }
]);