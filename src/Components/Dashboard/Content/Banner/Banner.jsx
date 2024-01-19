<<<<<<< HEAD
import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllBanner from './allBanner/AllBanner';
import NewBanner from './NewBaner/NewBanner';

function Banner({ currentItems , bannersLength }) {
  const [innerComponent,setInnerComponent] = useState(<></>);
  const Criterion = useSelector(state=> state.dashboard.bannerSwitch)
  useEffect(()=>{
    switch(Criterion)
    {
      case "all" : setInnerComponent(<AllBanner currentItems={currentItems} bannersLength={bannersLength}/>);
      break;
      case "new" : setInnerComponent(<NewBanner/>);
      break;
      default : setInnerComponent(<></>); 
    }
  },[Criterion])

  return (
    <div className='w-full p-3 md:p-10 flex flex-col items-center'>
      {
        innerComponent
      }
=======
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BannerPagination from './AllBannerPagination/AllBannerPagination';
import NewBanner from './NewBaner/NewBanner';


function Banner() {
    const [innerComponent,setInnerComponent] = useState(<></>);
    const Criterion = useSelector(state=> state.dashboard.bannerSwitch);
    useEffect(()=>{
        switch(Criterion)
        {
            case 'all' : setInnerComponent(<BannerPagination/>);
            break;
            case 'new' : setInnerComponent(<NewBanner/>)
            break;
            default : setInnerComponent(<></>)
        }
    },[Criterion])

  return (
    <div className='container mx-auto h-full p-3 md:p-10 flex flex-col justify-between items-center'>
        {
            innerComponent
        }
>>>>>>> 9bac44576d0de40b6e6ab9a79dbe177019705ee9
    </div>
  )
}

export default Banner;