/* ---- Components ---- */
import Header from '../header/header.component'

/* ---- Styles ---- */
import { LayoutContainer } from './layout.styles'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  )
}

export default Layout
