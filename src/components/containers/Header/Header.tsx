import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import logoLarge from '/public/static/logos/logo-large.svg'

import {
    HeaderContainer,
    RightContainer,
    LeftContainer,
    LoginLink,
    SignUpLink
} from "./Header.styled";


const Header = () => {
    return (
        <HeaderContainer>
            <LeftContainer>
                <Image src={logoLarge} alt={'Provineer Logo'} title={'Provineer Logo'}/>
            </LeftContainer>

            <RightContainer>
                <Link href='/login/login' passHref>
                    <LoginLink>Login</LoginLink>
                </Link>
                <Link href='/register/register' passHref>
                    <SignUpLink>Sign Up</SignUpLink>
                </Link>
            </RightContainer>

        </HeaderContainer>
    );
};

export default Header;