import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
// import { BiMenu} from 'react-icons/bi';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        zIndex={'overlay'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="purple"
        p={'0'}
        borderRadius={'full'}
        h={'10'}
        w={'10'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>VIDEO HUB</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/'}>Home</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/videos'}>Videos</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/uploads'}>Upload Videos</Link>
                </Button>
              </VStack>

              <HStack
                pos={'absolute'}
                bottom={'10'}
                w={'full'}
                justifyContent={'space-evenly'}
              >
                <Button onClick={onClose} colorScheme="purple">
                  <Link to={'/login'}>LogIn</Link>
                </Button>
                <Button
                  onClick={onClose}
                  colorScheme={'purple'}
                  variant="outline"
                >
                  <Link to={'/signup'}>SignUp</Link>
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
