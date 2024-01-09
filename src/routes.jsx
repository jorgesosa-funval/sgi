import {
    HomeIcon,
    TableCellsIcon,
    ServerStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Compras, Productos } from "@/pages/dashboard"; //Compras
import { Login } from "@/pages/auth";

const icon = {
    className: "w-5 h-5 text-inherit",
};

const rolSeccion = parseInt(sessionStorage.getItem("rol"));

export const routes = [
    {
        layout: "dashboard",
        pages: [
            {
                icon: <HomeIcon {...icon} />,
                rol: rolSeccion,
                name: "dashboard",
                path: "/home",
                element: <Home />,
            },
             {
               icon: <TableCellsIcon {...icon} />,
               rol: 1,
               name: "productos",
               path: "/produtos",
               element: <Productos />,
             },
            // {
            //   icon: <TableCellsIcon {...icon} />,
            //   rol: 2,
            //   name: "ventas",
            //   path: "/ventas",
            //   element: <Ventas />,
            // },
            {
                icon: <TableCellsIcon {...icon} />,
                rol: rolSeccion,
                name: "compras",
                path: "/compras",
                element: <Compras />,
            },
            // {
            //   icon: <TableCellsIcon {...icon} />,
            //   rol: 1,
            //   name: "usuarios",
            //   path: "/usuarios",
            //   element: <Usuarios />,
            // },
        ],
    },
    {
        title: "Ir al Loging",
        layout: "auth",
        pages: [
            {
                icon: <ServerStackIcon {...icon} />,
                rol: rolSeccion,
                name: "login",
                path: "/login",
                element: <Login />,
            },
        ],
    },
];

export default routes;
