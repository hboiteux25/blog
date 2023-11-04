import logosvg from '../../svg/blogger-logo.png'

function Header(){

    const descLogo = "Essa é logo do blog"

    return(
        <>
            <header className="flex-space-between">
                <div className="Logo border">
                    <img src={logosvg} alt="{descLogo}" width="50px"></img>
                </div>
                <div className="search">
                    <input type='text' name="search" className='input-search'/>
                </div>
                <div className="menu">
                    <ul className='menu'>
                        <li><a href='#' className='nav-link'>Category</a></li>
                        <li><a href='#' className='nav-link'>About</a></li>
                        <li><a href='#' className='nav-link'>Contact</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;