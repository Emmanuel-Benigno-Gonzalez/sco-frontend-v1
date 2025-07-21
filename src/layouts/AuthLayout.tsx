import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
        <header>
            <h1> Layout de Autneticacion </h1>
        </header>
        
        <main>

            <Outlet/>

        </main>

        <footer>
            
        </footer>

    </>
  )
}
