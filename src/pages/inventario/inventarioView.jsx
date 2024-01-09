import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import Inventario from "./Inventario";

export function Home() {

  const navigate = useNavigate();

  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Inventario
              </Typography>
              <Inventario
			        	url="http://127.0.0.1:8000/api/productos/"//Campbiar por el link a la API
			        	headers={[
			        		"Id",
			        		"Producto",
			        		"Stock",
			        		"Stock min.",
			        		"Marca",
			        		"Costo",
			        		"PVP",
			        		"Fecha Compra",
			        		"Categoría",
			        		"Imagen",
			        	]}
			        	table={[
			        		"nombreProducto",
			        		"stock",
			        		"stockMinimo",
			        		"marca",
			        		"costo",
			        		"precio",
			        		"fecha",
			        		"categoria",
			        	]}
			        />
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => {window.location.reload();}}>Refrescar Sección</MenuItem>
                <MenuItem>Extender Sección</MenuItem>
                <MenuItem onClick={() => {
                  localStorage.removeItem('token');
                  navigate("/auth/sign-in");}}
                  >Salir de la Sección</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
