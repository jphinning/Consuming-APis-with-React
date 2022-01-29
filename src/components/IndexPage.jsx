import React from 'react'
import { VStack, Box, StackDivider, Circle, Center} from '@chakra-ui/react'
import { Input, Text, Heading } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'



const IndexPage = () => {

  return (
    <VStack
      spacing={10}
      align='strech'
    >
      <Center h='150px' margin='10'>
        <Heading as='h1' size='4xl' isTruncated>
          (4xl) React pure Flavor & not Next
        </Heading>
      </Center>

      <Box display='flex' justifyContent={'center'}>
        <Input placeholder='Basic usage' width={'500px'}/>
      </Box>
    </VStack>
  )
}

export default IndexPage