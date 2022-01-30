import React from 'react'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Circle
} from '@chakra-ui/react'

const StatHolder = ({name, price, timeStamp, codein}) => {

  const priceAPI = price
  const codeinAPI = codein
  //Fix the currency parameter, for some reason codein is undefined when the component renders
  const currencyValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: codeinAPI || 'USD'}).format(priceAPI)

  return (
    <Circle m='20px' border='solid teal' textAlign={'center'} p='20px' borderRadius='20' bg='teal.400' color='white'>
      <Stat>
        <StatLabel>{name}</StatLabel>
        <StatNumber>{currencyValue}</StatNumber>
        <StatHelpText>{timeStamp}</StatHelpText>
      </Stat>
    </Circle>
  )
}

export default StatHolder