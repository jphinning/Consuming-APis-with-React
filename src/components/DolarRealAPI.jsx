import { useEffect, useState } from "react"
import axios from "axios"
import { Grid, GridItem } from '@chakra-ui/react'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  Circle,
  Center
} from '@chakra-ui/react'

const DollarAPI = () => {
  const [apiResUSD, setValueUSD] = useState([])
  const [apiResEUR, setValueEUR] = useState([])
  const [apiResBTC, setValueBTC] = useState([])

  useEffect(async () => {
    const apiRes = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    setValueUSD(apiRes.data.USDBRL)
    setValueEUR(apiRes.data.EURBRL)
    setValueBTC(apiRes.data.BTCBRL)
  }, [])

  return (
    <Grid templateColumns='repeat(3, 1fr)'  gap={6} mx='100px'>
      <GridItem>
        <Center m='20px' border='solid gray' textAlign={'center'} p='20px'>
          <Stat>
            <StatLabel>{apiResUSD.name} </StatLabel>
            <StatNumber>{apiResUSD.ask}</StatNumber>
            <StatHelpText>{apiResUSD.create_date}</StatHelpText>
          </Stat>
        </Center>
      </GridItem>

      <GridItem>
        <Center m='20px' border='solid gray' textAlign={'center'} p='20px'>
          <Stat>
            <StatLabel>{apiResEUR.name} </StatLabel>
            <StatNumber>{apiResEUR.ask}</StatNumber>
            <StatHelpText>{apiResEUR.create_date}</StatHelpText>
          </Stat>
        </Center> 
      </GridItem>

      <GridItem>
        <Center m='20px' border='solid gray' textAlign={'center'} p='20px'>
          <Stat>
            <StatLabel>{apiResBTC.name} </StatLabel>
            <StatNumber>{apiResBTC.ask}</StatNumber>
            <StatHelpText>{apiResBTC.create_date}</StatHelpText>
          </Stat>
        </Center>
      </GridItem>
    </Grid>
 
  )
}

export default DollarAPI