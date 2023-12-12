import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addDiscount } from '../../../../../features/dashboard/action';

function NewDiscount() {
  const [dropPro,setDropPro] = useState({status:false,value:null,id:null});
  const products = useSelector(state => state.dashboard.products) || [];
  const loading = useSelector(state => state.dashboard.discountsLoading);
  const discountRef = useRef();
  const dispatch = useDispatch();
  const formKeyNotSubmit = (e) => {
    if(e.key === 'Enter' && e.target.type !== 'textarea' | e.target.type.button)
    {
        e.preventDefault();
        e.stopPropagation()
    }
  }
  
  const addDiscountHandle =  () => {
    let discount = discountRef.current.value;
    switch(true)
    {
      case discount === '' : toast.warn('مقدار را وارد کنید')
      break;
      case discount > 100 || discount === "0" : toast.warn('مقدار صحیح نیست')
      break;
      case dropPro.id === null : toast.warn('محصول را انتخاب کنید')
      break;
      default : sendDiscount(discount)
    }
  }

  const sendDiscount = value => {
    dispatch(addDiscount({id:dropPro.id,value}))
  }

  return (
    <div className='flex flex-col 2xl:w-[70%] w-full opacity-motion'>
        <div className='w-full bg-[#C0D9DB] p-2'>
            <h1 className='font-semibold text-lg text-stone-800'>ایجاد</h1>
        </div>
        <form  className='flex flex-col items-center bg-[#ffffff70] px-2 py-5 w-full gap-8 z-10 opacity-90' onKeyDown={(e)=>formKeyNotSubmit(e)}>
        {/* discount */}
        <div className='flex flex-col gap-2 w-full'>
            <label htmlFor="discount" className='font-semibold text-[#2e424a]'>مقدار</label>
            <input type="number" className='p-1  outline-[#0ab694] w-full' ref={discountRef} required={true} name='discount'/>
        </div>
            {/* products */}
            <div className='w-full flex-col sm:flex-row flex justify-start items-start gap-3'>
            <div className='flex flex-col gap-3 justify-center items-start'>
            <button type='button' onClick={()=>{
                setDropPro({status:!dropPro.status,value:dropPro.value})
            }} className='text-sm w-fit bg-yellow-600 py-1 px-2 border-2 border-[#BABCBE] hover:bg-yellow-500 transition-all rounded-md text-white font-bold'>محصولات</button>
            {
                dropPro.value !== null
                ? <div className='bg-transparent p-2 w-fit rounded-sm font-bold text-white border-dashed border-white border-2'>{dropPro.value}</div>
                :<span className='text-rose-600 font-bold'> محصول انتخاب نشده است!</span>
            }
            </div>
                <ul className='bg-white px-2 cate-scroll overflow-hidden max-h-[10rem] overflow-y-scroll transition-all duration-300 rounded-sm' style={{height:dropPro.status?'fit-content':'0px',padding:dropPro.status?'3px':'0px'}}>
                {
                    products.map((pro,i)=>(
                        <li key={i} className='cursor-pointer flex items-center gap-1 hover:text-purple-600 hover:font-bold transition-all'
                        onClick={(e)=>{
                            setDropPro({status:false,value:pro.title,id:pro.id})
                        }}
                        >
                            <span>{pro.title}</span>
                        </li>
                    ))
                }
            </ul>
            </div>
        <button onClick={(e)=>addDiscountHandle()} type='button' className='w-[50%] mt-5 bg-[#01d5ab] transition-all duration-300 hover:shadow-[0px_0px_5px_1px_rgba(0,0,0,0.2)] hover:bg-[#00dfb2] text-white font-bold text-lg py-1 rounded-sm'>
          {
            loading
            ?
            <img src="/img/Rolling-0.8s-200px.svg" alt="loading..." className='w-[30px] mx-auto'/>
            :
            <span>ثبت</span>
          }
        </button>
        </form>
    </div>
  )
}

export default NewDiscount;