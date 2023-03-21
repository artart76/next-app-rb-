import Link from 'next/link';
// import { CgMenu } from 'react-icons/cg'; Меню иконка
import IconButton from '@mui/material/IconButton';
import { GrAppsRounded } from 'react-icons/gr';
import { AiOutlineLogin } from 'react-icons/ai';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';

const Header = () => {
    return (
        <header>
            <div>
                <Link href="/">
                    <IconButton color="inerhit">
                        <GrAppsRounded />
                    </IconButton>
                </Link>
            </div>
            <nav>
                
                <Link href='/addpost'>
                    <IconButton color='inerhit'>
                        <AiOutlineAppstoreAdd />
                    </IconButton>
                </Link>
                <Link href='/login'>
                    <IconButton color='inerhit'>
                        <AiOutlineLogin />
                    </IconButton>
                </Link>
                <Link href='/register'>
                <IconButton color='inerhit'>
                        <AiOutlineUserAdd />
                    </IconButton>
                </Link>
            </nav>
        </header>
    )
}

export default Header;