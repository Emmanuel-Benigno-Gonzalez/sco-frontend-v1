import RegiOpsView from '../views/operaciones/RegiOpsView'
import ConsOpsView from '../views/operaciones/ConsOpsView'
import EditOpsView from '../views/operaciones/EditOpsView'
import RepoOpsView from '../views/operaciones/RepoOpsView'
import RegiMatrView from '../views/matriculas/RegiMatrView'
import ConsMatrView from '../views/matriculas/ConsMatrView'
import EditMatrView from '../views/matriculas/EditMatrView'
import { PlusIcon, SearchIcon, EditIcon, BarIcon } from '../components/icons/sidebarIcons'
import ResgAerpView from '../views/aeropuertos/RegiAeroView'
import ConsAerpView from '../views/aeropuertos/ConsAerpView'
import EditAerpView from '../views/aeropuertos/EditAerpView'
import RegiCompView from '../views/companias/RegiCompView'
import ConsCompView from '../views/companias/ConsCompView'
import EditCompView from '../views/companias/EditCompView'
import RegiAeroView from '../views/aeronaves/RegiAeroView'
import ConsAeroView from '../views/aeronaves/ConsAeroView'
import EditAeroView from '../views/aeronaves/EditAeroView'
import RegiCalfView from '../views/calificadores/RegiCalfView'
import ConsCalfView from '../views/calificadores/ConsCalfView'
import RegiUsuaView from '../views/usuarios/RegiUsuaView'
import ConstUsuaView from '../views/usuarios/ConstUsuaView'
import type { AppRoute } from '../types/routes'
import { 
  OPS_PATH,
  MTR_PATH,
  ARP_PATH,
  COM_PATH,
  AER_PATH,
  CLF_PATH,
  USE_PATH,
  PER_PATH 
} from '../lib/constants/routes'
import cierreOpsView from '../views/operaciones/reportes/cierreOpsView'
import MiPerfilView from '../views/perfil/MiPerfilView'
import ModiContraView from '../views/perfil/ModiContraView'
import ActuContraView from '../views/usuarios/ActuContraView'
import CapOpsView from '../views/operaciones/CapOpsView'
import LlegadasATDTabla from '../views/operaciones/LlegadasATDView'

export const routeConfig: AppRoute[] = [
  {
    path: `/${OPS_PATH}/registrar`,
    label: 'Registrar',
    module: OPS_PATH,
    roles: [1, 2, 3],
    element: RegiOpsView,
    icon: PlusIcon,
    showInNav: true,
    showInSidebar: true,
  },
  {
    path: `/${OPS_PATH}/capturaOps`,
    label: 'Comercial',
    module: OPS_PATH,
    roles: [1, 2, 3],
    element: CapOpsView,
    icon: BarIcon,
    showInSidebar: true,
  },
  {
    path: `/${OPS_PATH}/atdllegada`,
    label: 'ATD Llegada',
    module: OPS_PATH,
    roles: [1, 2, 3],
    element: LlegadasATDTabla,
    icon: PlusIcon,
    showInSidebar: true,
  },
  {
    path: `/${OPS_PATH}/consultar`,
    label: 'Consultar',
    module: OPS_PATH,
    roles: [1, 2, 3],
    element: ConsOpsView,
    icon: SearchIcon,
    showInSidebar: true,
  },
  {
    path: `/${OPS_PATH}/ciclos`,
    label: 'Reportes',
    module: OPS_PATH,
    roles: [1, 2],
    element: EditOpsView,
    icon: EditIcon,
    showInSidebar: true,
  },
  {
    path: `/${OPS_PATH}/reportes`,
    label: 'Estadística',
    module: OPS_PATH,
    roles: [1, 2],
    element: RepoOpsView,
    icon: BarIcon,
    showInSidebar: true,
  },
  /* Reportes de Cierre de Operaciones */
  {
    path: `/${OPS_PATH}/reportes/cierreOps`,
    label: 'Estadística',
    module: OPS_PATH,
    roles: [1, 2],
    element: cierreOpsView,
    icon: BarIcon,
    showInSidebar: false,
  },
  /** Continua Modulos de Navegacion */
  {
    path: `/${MTR_PATH}/registrar`,
    label: 'Registrar',
    module: MTR_PATH,
    roles: [1, 2],
    element: RegiMatrView,
    icon: PlusIcon,
    showInNav: true,
    showInSidebar: true,
  },
  {
    path: `/${MTR_PATH}/consultar`,
    label: 'Consultar',
    module: MTR_PATH,
    roles: [1, 2],
    element: ConsMatrView,
    icon: SearchIcon,
    showInSidebar: true,
  },
  {
    path: `/${MTR_PATH}/editar`,
    label: 'Editar',
    module: MTR_PATH,
    roles: [1, 2],
    element: EditMatrView,
    icon: EditIcon,
    showInSidebar: true,
  },
  {
    path: `/${ARP_PATH}/registrar`,
    label: 'Registrar',
    module: ARP_PATH,
    roles: [1, 2],
    element: ResgAerpView,
    icon: PlusIcon,
    showInNav: true,
    showInSidebar: true,
  },
  {
    path: `/${ARP_PATH}/consultar`,
    label: 'Consultar',
    module: ARP_PATH,
    roles: [1, 2],
    element: ConsAerpView,
    icon: SearchIcon,
    showInSidebar: true,
  },
  {
    path: `/${ARP_PATH}/editar`,
    label: 'Editar',
    module: ARP_PATH,
    roles: [1, 2],
    element: EditAerpView,
    icon: EditIcon,
    showInSidebar: true,
  },
  {
    path: `/${COM_PATH}/registrar`,
    label: 'Registrar',
    module: COM_PATH,
    roles: [1, 2],
    element: RegiCompView,
    icon: PlusIcon,
    showInNav: true,
    showInSidebar: true,
  },
  {
    path: `/${COM_PATH}/consultar`,
    label: 'Consultar',
    module: COM_PATH,
    roles: [1, 2],
    element: ConsCompView,
    icon: SearchIcon,
    showInSidebar: true,
  },
  {
    path: `/${COM_PATH}/editar`,
    label: 'Editar',
    module: COM_PATH,
    roles: [1, 2],
    element: EditCompView,
    icon: EditIcon,
    showInSidebar: true,
  },
  {
    path: `/${AER_PATH}/registrar`,
    label: 'Registrar',
    module: AER_PATH,
    roles: [1, 2],
    element: RegiAeroView,
    icon: PlusIcon,
    showInNav: true,
    showInSidebar: true,
  },
  {
    path: `/${AER_PATH}/consultar`,
    label: 'Consultar',
    module: AER_PATH,
    roles: [1, 2],
    element: ConsAeroView,
    icon: SearchIcon,
    showInSidebar: true,
  },
  {
    path: `/${AER_PATH}/editar`,
    label: 'Editar',
    module: AER_PATH,
    roles: [1, 2],
    element: EditAeroView,
    icon: EditIcon,
    showInSidebar: true,
  },
  {
    path: `/${CLF_PATH}/registrar`,
    label: 'Registrar',
    module: CLF_PATH,
    roles: [1, 2],
    element: RegiCalfView,
    icon: PlusIcon,
    showInNav: true,
    showInSidebar: true,
  },
  {
    path: `/${CLF_PATH}/consultar`,
    label: 'Consultar',
    module: CLF_PATH,
    roles: [1, 2],
    element: ConsCalfView,
    icon: SearchIcon,
    showInSidebar: true,
  },
  {
    path: `/${USE_PATH}/registrar`,
    label: 'Registrar',
    module: USE_PATH,
    roles: [1],
    element: RegiUsuaView,
    icon: PlusIcon,
    showInNav: true,
    showInSidebar: true,
  },
  {
    path: `/${USE_PATH}/consultar`,
    label: 'Consultar',
    module: USE_PATH,
    roles: [1],
    element: ConstUsuaView,
    icon: SearchIcon,
    showInSidebar: true,
  },
  {
    path: `/${USE_PATH}/actualizar`,
    label: 'Modificar Contraseñas',
    module: USE_PATH,
    roles: [1],
    element: ActuContraView,
    icon: SearchIcon,
    showInSidebar: true,
  },
  {
    path: `/${PER_PATH}/perfil`,
    label: 'Mi Perfil',
    module: PER_PATH,
    roles: [1,2,3],
    element: MiPerfilView,
    icon: SearchIcon,
    showInNav: true,
    showInSidebar: true,
  },
  {
    path: `/${PER_PATH}/actualizar`,
    label: 'Cambiar contraseña',
    module: PER_PATH,
    roles: [1,2,3],
    element: ModiContraView,
    icon: SearchIcon,
    showInSidebar: true,
  }
]