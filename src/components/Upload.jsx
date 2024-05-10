import React from 'react'
import {VStack,
    Container,
    HStack,
    Input,
    Button
} from '@chakra-ui/react'
import {AiOutlineCloudUpload} from 'react-icons/ai'

const Upload = () => {
  return (
    <Container maxW={'container.xl'}
    h={'100vh'}
    p={'16'}>

    <VStack
        color={'purple.500'} h={'full'} justifyContent={'center'}
>
        <AiOutlineCloudUpload size={'12vh'}/>

        <form>
            <HStack>
                <Input required type={'file'} css={{
                    "&::file-selector-button":{
                        display:'none',
                        border:'none',
                        height:'100%',
                        marginLeft:'-18px',
                        color: 'purple',
                        backgroundColor: 'white',
                        cursor:'pointer',
                    }
                }}/>
                <Button colorScheme='purple' type={'submit'}>Upload</Button>
            </HStack>
        </form>
    </VStack>
    

    </Container>
  )
}

export default Upload