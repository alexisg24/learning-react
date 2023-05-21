import { AppMenu } from './components/AppMenu'
import { RoutesPath } from './components/RoutesPath'
import { UserProvider } from './context/UserProvider'

const MainApp = () => {
  return (
    <>
      <AppMenu />
      <hr />
      <UserProvider>
        <RoutesPath />
      </UserProvider>
    </>
  )
}

export { MainApp }
