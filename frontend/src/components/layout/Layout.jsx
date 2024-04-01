

import Navbar from '../navbar/Navbar'

function Layout({children, isLoggin}) {
  return (
    <div>
        <Navbar isLoggin={isLoggin}/>
     
        {children}
    </div>
  )
}

export default Layout