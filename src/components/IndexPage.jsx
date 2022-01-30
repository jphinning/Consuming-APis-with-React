import React from 'react'
import { VStack, Box, StackDivider, Circle, Center} from '@chakra-ui/react'
import { Input, Text, Heading } from '@chakra-ui/react'

const IndexPage = () => {

  return (
    <VStack
      spacing={10}
      align='strech'
    >
      <Center h='150px' margin='10'>
        <Heading as='h1' size='4xl' isTruncated>
          <Text color='teal'>Dollar/Real</Text> & BTC/Dollar Exchange Rates
        </Heading>
      </Center>
    </VStack>
  )
}

export default IndexPage