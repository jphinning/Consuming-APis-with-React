import React from "react"
import { Button } from "@chakra-ui/react"
import { Flex, useColorMode } from "@chakra-ui/react"
import { IconButton } from '@chakra-ui/react'
import { MoonIcon } from "@chakra-ui/icons"

const ToggleDarkMode = () => {

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Flex justify='flex-end' m='5' gap='6px'>
      <Button onClick={toggleColorMode} colorScheme='teal'>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>

      <IconButton
        variant='outline'
        colorScheme='teal'
        aria-label='Dark Mode'
        fontSize='20px'
        icon={<MoonIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  )
}

export default ToggleDarkMode