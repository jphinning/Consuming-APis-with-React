import { useEffect, useState } from "react"
import axios from "axios"
import StatHolder from "./StatHolder"
import { Grid, GridItem } from '@chakra-ui/react'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Circle,
} from '@chakra-ui/react'

const DollarAPI = () => {
  const [apiResUSD, setValueUSD] = useState([])
  const [apiResEUR, setValueEUR] = useState([])
  const [apiResBTC, setValueBTC] = useState([])
  const [counter, setCounter] = useState(true)

  setTimeout(() => {
    setCounter(counter === true? false : true)
  }, 10000);

  useEffect(async () => {

    const apiRes = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-USD')

    setValueUSD(apiRes.data.USDBRL)
    setValueEUR(apiRes.data.EURBRL)
    setValueBTC(apiRes.data.BTCUSD)
  }, [counter])

  return (
    <Grid templateColumns='repeat(3, 1fr)'  gap={6} mx='100px'>
      <GridItem>
        <StatHolder name={apiResUSD.name} price={apiResUSD.ask} timeStamp={apiResUSD.create_date} codein={apiResUSD.codein}/>
      </GridItem>

      <GridItem>
        <StatHolder name={apiResEUR.name} price={apiResEUR.ask} timeStamp={apiResEUR.create_date} codein={apiResEUR.codein} />
      </GridItem>

      <GridItem>
        <StatHolder name={apiResBTC.name} price={apiResBTC.ask} timeStamp={apiResBTC.create_date} codein={apiResBTC.codein} />
      </GridItem>
    </Grid>
 
  )
}

export default DollarAPI