import { createContext, useContext } from "react";
const UserContext = createContext("Unknown")

import "./App.css"
function App() {
  const userName = "Arturo Pérez";
  return (
    <UserContext.Provider value={userName}>
      <Layout userName={userName}>
        <p>Aquí va el contenido pasado a Layout a través de la prop especial 'children', aprovechamos para mostrar su funcionamiento en caso de que lo desconocieran 😉
        </p>
      </Layout>
    </UserContext.Provider>
  );
}
function Layout({ children }) {
  // no usa contexto
  return (
    <div>
      <main className="child">
        {children}
        <Header />
      </main>
    </div>
  )
}
function Header() {
  // no usa contexto
  return (
    <header>
      <UserInfo />
    </header>
  );
}
function UserInfo() {
  // aquí efectivamente usamos contexto
  const userName = useContext(UserContext)
  return <span style={{ fontWeight: '700', backgroundColor: 'burlywood', padding: '.4em' }}>User Name is {userName}</span >;
}
export default App

