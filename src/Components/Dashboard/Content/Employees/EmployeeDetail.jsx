import React, { useEffect, useState } from 'react';
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment-jalaali';
import { updateUserInfo } from '../../../../features/userPanel/action';
import { choiceEmployee } from '../../../../features/dashboard/action';
import Cookies from 'js-cookie';

function EmployeeDetails({ setShowDetails , showDetails }) {
    const roles = useSelector(state => state.dashboard.roles);
    const loading = useSelector(state => state.userPanel.isLoading);
    const userInfo = JSON.parse(Cookies.get("user"));
    const userRole = roles.find(role => role.id === showDetails.role_id)
    const [role,setRole] = useState(userRole?.title);
    let loginDate = showDetails.created_at;
    let updateDate = showDetails.updated_at;
    const dispatch = useDispatch();
 
    loginDate = moment(loginDate, 'YYYY/MM/DD HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss');
    updateDate = moment(updateDate, 'YYYY/MM/DD HH:mm:ss').format('jYYYY/jMM/jDD HH:mm:ss');
function choicerecruitment(status){
    dispatch(choiceEmployee({user:userInfo.id , status}))
}
  

  return (
    <div className='p-3 sm:p-10 w-full flex justify-center'>
    <div className='w-full 2xl:w-[70%] rounded-md bg-[#ffffffc9] flex flex-col gap-8 py-5 px-3'>
        <div className='pb-3 flex items-center justify-between' style={{borderBottom:'solid 1px black'}}>
            <h1 className='font-semibold text-xl text-stone-800'>جزئیات</h1>
            <MdCancel className='text-red-600 font-bold text-3xl transition-all hover:text-red-500' onClick={(e)=>setShowDetails("")}/>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>نام:</span>
            <span className='pr-5'>{ showDetails.first_name }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>نام خانوادگی:</span>
            <span className='pr-5'>{ showDetails.last_name }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>نام کاربری:</span>
            <span className='pr-5'>{ showDetails.username }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>شماره موبایل:</span>
            <span className='pr-5'>{ showDetails.mobile }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>ایمیل:</span>
            <span className='pr-5'>{ showDetails.email }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>شماره کارت:</span>
            <span className='pr-5'>{ showDetails.card_number }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>کد ملی:</span>
            <span className='pr-5'>{ showDetails.code_meli }</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>تاریخ ورود:</span>
            <span className='pr-5 font-[shabnamBold]'>{loginDate}</span>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-semibold text-[#2e424a]'>تاریخ ویرایش:</span>
            <span className='pr-5 font-[shabnamBold]'>{updateDate}</span>
        </div>
        <div class="d-flex align-items-center justify-content-center vh-100">
    <button class="btn btn-danger btn-lg text-white">Click Me</button>
    <div className="btn bg-success btn-lg text-white  " onClick={()=> choicerecruitment('accepted')}> تایید برای استخدام </div>
    <div className="btn btn-danger btn-lg text-white" onClick={()=> choicerecruitment('rejected')}> عدم تایید برای استخدام </div>
  </div>
     
    </div>
</div>
  )
}

export default EmployeeDetails;