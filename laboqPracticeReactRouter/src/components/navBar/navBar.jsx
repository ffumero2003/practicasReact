import AnchorsContactInfo from './anchorsContactInfo';
import Logo from '../navBar/logo'


function NavBar(){
  return(
    <div className="flex flex-row w-full  border border-black sticky top-0 z-50">
      <Logo />
      <AnchorsContactInfo />  
    </div>
  )
}

export default NavBar;