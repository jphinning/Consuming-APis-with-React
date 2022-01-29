import React from 'react'
import DollarAPI from './DolarRealAPI'
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
      divider={<StackDivider borderColor='gray.200' />}
      spacing={10}
      align='strech'
    >
      <Center h='150px' color='black' margin='10'>
        <Heading as='h1' size='4xl' isTruncated>
          (4xl) React pure Flavor & not Next
        </Heading>
      </Center>

      <Box display='flex' justifyContent={'center'}>
        <Input placeholder='Basic usage' width={'500px'}/>
      </Box>

      <Box paddingInline={'100px'}>
        <Table variant='striped' size='md' colorScheme={'facebook'}>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>dasfa</Td>
              <Td>afas (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </VStack>
  )
}

export default IndexPage