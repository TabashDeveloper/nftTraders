import React,{useState} from 'react'
import CreateTrade from '../components/CreateTrade'
import Footer from '../components/Footer'

import WalletDetails from '../components/WalletDetails'
import WalletDetailsCard from '../components/WalletDetailsCard'


const Mytrades = ({wallet}) => {

  return (
    <div>
      <CreateTrade/>
      {wallet ? <WalletDetailsCard/> : "" }
      <WalletDetails wallet={wallet}/>
    </div>
  )
}

export default Mytrades
