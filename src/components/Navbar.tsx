import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const linkList = [
        {
            name: 'Dashboard',
            link: '/',
        },
        {
            name: 'Create Ads',
            link: '/create-ads',
        },
    ]
    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            width={'100%'}
            height={'50px'}
            boxShadow={'0 3px 10px rgb(0 0 0 / 0.2)'}
            padding={'20px'}
            textTransform={'uppercase'}
        >
            <Link to="/">
                <Typography
                    variant={'h1'}
                    fontSize={'1.25rem'}
                    fontWeight={'700'}
                >
                    App Logo
                </Typography>
            </Link>
            <Box display={'flex'} gap={'40px'} alignItems={'center'}>
                {linkList.map((linkItem) => (
                    <Link to={linkItem.link}>
                        <Typography
                            key={linkItem.name + 22}
                            variant={'h4'}
                            fontSize={'1rem'}
                            fontWeight={'300'}
                        >
                            {linkItem.name}
                        </Typography>
                    </Link>
                ))}
            </Box>
        </Box>
    )
}

export default Navbar
