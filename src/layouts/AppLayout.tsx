import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navigation from '../components/Navigation'
import { PowerIcon } from '../components/icons/loginIcons'
import { NavLink } from 'react-router-dom'

export default function AppLayout() {



  return (
    <>

        <header className="header">

            <div className="contenedor">

                <div className="barra">

                    <NavLink
                        to={'/ops/registrar'}
                        key={'logo'}
                        className={() =>
                        `logo`
                        }
                    >
                        <h1 className="logo__nombre no-margin centrar-texto">SCO<span className="logo__bold">peraciones</span></h1>
                    </NavLink>

                    <Navigation/>

                    <div className='login'>
                        <p>Capturador ...</p>
                        <NavLink
                            to={'/auth/login'}
                            key={'/auth/login'}
                            className={() =>
                            `login__link`
                            }
                        >
                            <PowerIcon className="w-14 h-14"/>
                        </NavLink>
                        
                    </div>

                </div>

            </div>
            
        </header>



        <div className='layout' >

            <Sidebar/>

            <main className="main-contenedor">
                <Outlet/>
            </main>

        </div>

        

        <footer className="footer">
            <div className="contenedor">
                <div className="barra">

                    <NavLink
                        to={'/ops/registrar'}
                        key={'logo'}
                        className={() =>
                        `logo`
                        }
                    >
                        <h1 className="logo__nombre no-margin centrar-texto">SCO<span className="logo__bold">peraciones</span></h1>
                    </NavLink>

                    <nav className="navegacion">
                        <a href="https://siia-frontend-prueba.netlify.app/" className="navegacion__enlace" target="_blank">SIIA</a>
                        <a href="https://www.aeropuertodetoluca.com.mx/#" className="navegacion__enlace" target="_blank">AIT</a>
                    </nav>
                </div>
            </div>
        </footer>
    
    </>

  )
}
