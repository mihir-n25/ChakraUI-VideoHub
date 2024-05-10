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
            w={['full','100']}
            m={'auto'}
            my={'16'}
            >

            <Heading>Welcome To Video Hub</Heading>

            <Input placeholder={'Name'} type={'text'} required focusedBorderColor={'purple'}
            />

            <Input placeholder={'Email'} type={'email'} required focusedBorderColor={'purple'}
            />

            <Input placeholder={'Password'} type={'password'} required focusedBorderColor={'purple'}
            />

            <Button colorScheme={'purple'} type={'submit'}>
                Sign Up
            </Button>

            <Text  alignSelf={'flex-end'}>Already Used? {' '}
            <Button variant={'link'} colorScheme={'purple'}  alignSelf={'flex-end'}>
                <Link to={'/login'}>LogIn</Link>
            </Button>
            </Text>
        </VStack>
    </form>

    </Container>
  )
}

export default LogIn