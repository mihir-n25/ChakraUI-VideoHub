import { Button, Container, Heading, Input, VStack ,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <form>
        <VStack
            alignItem={'strech'}
            spacing={'8'}
            w={['full','96']}
            m={'auto'}
            my={'16'}
            >

            <Heading>Welcome Back</Heading>

            <Input placeholder={'Email'} type={'email'} required focusedBorderColor={'purple'}
            />
            <Input placeholder={'Password'} type={'password'} required focusedBorderColor={'purple'}
            />

            <Button variant={'ghost'} alignSelf={'flex-end'}>
                <Link to={'/forgetpassword'}>Forget Password</Link>
            </Button>

            <Button colorScheme={'purple'} type={'submit'}>
                LogIn
            </Button>
 <hr />
            <Text  alignSelf={'flex-end'}>New User?
            <Button variant={'link'} colorScheme={'purple'}  alignSelf={'flex-end'}>
                <Link to={'/signUp'}>Sign Up</Link>
            </Button>
            </Text>
        </VStack>
    </form>

    </Container>
  )
}

export default LogIn