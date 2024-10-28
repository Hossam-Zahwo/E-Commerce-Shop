
import { FaSun, FaMoon } from 'react-icons/fa'
function Dark({theme,setTheme,handleThemeSwitch}) {


  return (
    <div>
    <button onClick={handleThemeSwitch} className=' p-2  rounded-full flex items-center justify-center'>
        {theme === 'light' ? <FaMoon className='mr-2' /> : <FaSun className='mr-2' />}
    
      </button>
    </div>
  );
}

export default Dark;
