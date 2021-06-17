import React, { useEffect, useState } from 'react'
import './GetData.css'
import Card from './Card'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: '30px',
    marginTop: '20px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function GetData() {
  const [data, setData] = useState([])
  const [cardDatao3, setCardDatao3] = useState({})
  const [cardDatano2, setCardDatano2] = useState({})

  const classes = useStyles()
  const [station, setStation] = useState('')

  const gatherData = (station) => {
    var o3 = data.find(function (val, idx) {
      if (val.location === station && val.parameter === 'o3') return true
    })

    var no2 = data.find(function (val, idx) {
      if (val.location === station && val.parameter === 'no2') return true
    })

    setCardDatao3(o3)
    setCardDatano2(no2)
    console.log(cardDatano2)
    console.log(cardDatao3)
  }

  const handleChange = (event) => {
    gatherData(event.target.value)
    setStation(event.target.value)
    console.log(station)
  }

  useEffect(() => {
    const getdata = async () => {
      const response = await axios(
        'https://docs.openaq.org/v2/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2021-06-12T13%3A41%3A00%2B00%3A00&limit=100&page=1&offset=0&sort=desc&radius=1000&country=GB&city=London&order_by=datetime'
      )
      setData(response.data.results)
    }
    getdata()
  }, [])

  // console.log(data[0])
  // console.log(cardDatao3)
  // console.log(cardDatano2)
  return (
    <div className='main'>
      <div className='getData'>
        <h1>
          London/<h6>{station}</h6>
        </h1>

        <FormControl variant='outlined' className={classes.formControl}>
          <InputLabel htmlFor='outlined-age-native-simple'>
            Station(sensor location)
          </InputLabel>
          <Select
            native
            value={station}
            onChange={handleChange}
            label='Station(sensor location)'
            inputProps={{
              name: 'station',
              id: 'outlined-age-native-simple',
            }}
          >
            <option aria-label='None' value=''></option>
            {data.map((val) => {
              return <option vlaue={val.location}>{val.location}</option>
            })}
          </Select>
        </FormControl>
      </div>

      <div className='cardPage'>
        {cardDatao3 && <Card obj={cardDatao3} />}
        {cardDatano2 && <Card obj={cardDatano2} />}
      </div>
    </div>
  )
}

export default GetData
