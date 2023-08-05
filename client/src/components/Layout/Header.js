import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GiShoppingCart } from "react-icons/gi";
import "./style.css";
// import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage, removeUserFromLocalStorage } from '../../utils/localstorage';

import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';





const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const Links = ['Dashboard', 'Projects', 'Team']


    // const [auth , setAuth] = useAuth();
    const navigate = useNavigate();
    const user = getUserFromLocalStorage();

    const handleLogout = () => {

        localStorage.removeItem("user");
        toast.success("Logout Success!!")
        setTimeout(() => {

            navigate('/login');
        }, 1000)


    }


    const handleClick = () => {
        navigate("/")
    }
    return (

        // <nav className="navbar navbar-expand-lg bg-body-tertiary" onClick={handleClick}>
        //     <div className="container-fluid">
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon" />
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        //             <Link to="/" className="navbar-brand" > <GiShoppingCart />  Affworld </Link>
        //             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <NavLink
        //                         to="/"
        //                         className="nav-link"

        //                     >
        //                         Home
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink
        //                         to="/offers"
        //                         className="nav-link"

        //                     >
        //                         Offers
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink
        //                         to="/advertisers"
        //                         className="nav-link"

        //                     >
        //                         Advertisers
        //                     </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink
        //                         to="/advitisors"
        //                         className="nav-link"

        //                     >
        //                         Advitisors
        //                     </NavLink>
        //                 </li>
        // {
        //     !user ? (<>
        //         <li className="nav-item">
        //             <NavLink to="/signup" className="nav-link" >
        //                 Register
        //             </NavLink>
        //         </li>
        //         <li className="nav-item">
        //             <NavLink to="/login" className="nav-link" >
        //                 Login
        //             </NavLink>
        //         </li>
        //     </>) : (<>
        //         <li className="nav-item">
        //             <NavLink onClick={handleLogout} className="nav-link" >
        //                 Logout
        //             </NavLink>
        //         </li>
        //     </>)
        // }


        //             </ul>

        //         </div>
        //     </div>
        // </nav>
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Text
                            onClick={handleClick}
                            fontSize="2xl"
                            fontFamily="Poppins"
                            css={{
                                background: "linear-gradient(110.29deg, #2E5CFF 11.11%, #973DF0 60.96%)",
                                textFillColor: "text",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                "-webkit-text-fill-color": "transparent",
                                fontWeight: 700,
                                "&:hover": {
                                    cursor: "pointer",
                                },
                            }}
                        >
                            AffWorld
                        </Text>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            <NavLink
                                to="/"
                                className="nav-link"

                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/offers"
                                className="nav-link"

                            >
                                Offers
                            </NavLink>

                            <NavLink
                                to="/advitisors"
                                className="nav-link"

                            >
                                Advitisors
                            </NavLink>
                           

                            <NavLink
                                to="/advertisers"
                                className="nav-link"

                            >
                                Advertisers
                            </NavLink>




                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>

                        {
                            !user ? (<>
                                <Button
                                    variant={'solid'}
                                    colorScheme={'teal'}
                                    size={'sm'}
                                    mr={4}
                                    onClick={handleLogout}
                                >
                                    Login
                                </Button>
                                <Button
                                    variant={'solid'}
                                    colorScheme={'teal'}
                                    size={'sm'}
                                    mr={4}
                                    onClick={handleLogout}
                                >
                                    Signup
                                </Button>
                            </>) : (<>
                                <Button
                                    variant={'solid'}
                                    colorScheme={'teal'}
                                    size={'sm'}
                                    mr={4}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </>)
                        }



                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://avatars.githubusercontent.com/u/74814381?u=057d0be8b86510e32498e6e15f847b89a0620053&v=4'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>View Profile</MenuItem>
                                <MenuItem>Edit Profile</MenuItem>
                                <MenuDivider />
                                <MenuItem>Overview</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            <NavLink
                                to="/"
                                className="nav-link"

                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/offers"
                                className="nav-link"

                            >
                                Offers
                            </NavLink>
                            <NavLink
                                to="/advitisors"
                                className="nav-link"

                            >
                                Advitisors
                            </NavLink>


                            <NavLink
                                to="/advertisers"
                                className="nav-link"

                            >
                                Advertisers
                            </NavLink>




                        </Stack>
                    </Box>
                ) : null}
            </Box>



        </>




    )
}

export default Header












// const NavLink = (props: Props) => {
//   const { children } = props
//   return (
//     <Box
//       as="a"
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//       }}
//       href={'#'}>
//       {children}
//     </Box>
//   )
// }

// export default function WithAction() {
//   const { isOpen, onOpen, onClose } = useDisclosure()

//   return (
//     <>
    //   <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
    //     <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
    //       <IconButton
    //         size={'md'}
    //         icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
    //         aria-label={'Open Menu'}
    //         display={{ md: 'none' }}
    //         onClick={isOpen ? onClose : onOpen}
    //       />
    //       <HStack spacing={8} alignItems={'center'}>
    //         <Box>Logo</Box>
    //         <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
    //           {Links.map((link) => (
    //             <NavLink key={link}>{link}</NavLink>
    //           ))}
    //         </HStack>
    //       </HStack>
    //       <Flex alignItems={'center'}>
    //         <Button
    //           variant={'solid'}
    //           colorScheme={'teal'}
    //           size={'sm'}
    //           mr={4}
    //           leftIcon={<AddIcon />}>
    //           Action
    //         </Button>
    //         <Menu>
    //           <MenuButton
    //             as={Button}
    //             rounded={'full'}
    //             variant={'link'}
    //             cursor={'pointer'}
    //             minW={0}>
    //             <Avatar
    //               size={'sm'}
    //               src={
    //                 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
    //               }
    //             />
    //           </MenuButton>
    //           <MenuList>
    //             <MenuItem>Link 1</MenuItem>
    //             <MenuItem>Link 2</MenuItem>
    //             <MenuDivider />
    //             <MenuItem>Link 3</MenuItem>
    //           </MenuList>
    //         </Menu>
    //       </Flex>
    //     </Flex>

    //     {isOpen ? (
    //       <Box pb={4} display={{ md: 'none' }}>
    //         <Stack as={'nav'} spacing={4}>
    //           {Links.map((link) => (
    //             <NavLink key={link}>{link}</NavLink>
    //           ))}
    //         </Stack>
    //       </Box>
    //     ) : null}
    //   </Box>

    //   <Box p={4}>Main Content Here</Box>
//     </>
//   )
// }