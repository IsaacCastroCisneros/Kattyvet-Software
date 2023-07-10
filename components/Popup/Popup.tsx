"use client"
import { appContext } from '@/app/context/AppContext'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'

export const Popup = () => 
{ 
  const{popup,setPopup}=useContext(appContext)  

  return (
    <>
      {popup.show && (
        <>
          <div className="fixed bg-[#000] opacity-[.6] top-0 left-0 h-[100%] w-[100%] z-[9999]"
           onClick={()=>setPopup(prev=>{return{...prev,show:false}})}
           ></div>
            <div className='fixed left-[50%] translate-x-[-50%] z-[99999] top-[50%] translate-y-[-50%] bg-bg px-[3rem] py-[1.5rem] rounded-[1rem]'>
             <strong className='text-[2.2rem] block mb-[1rem]'>
               {popup.title}
             </strong>
              <button
                className="absolute top-[1rem] right-[1rem]"
                onClick={() =>
                  setPopup((prev) => {
                    return { ...prev, show: false };
                  })
                }
              >
                <FontAwesomeIcon size='2xl' className="text-[#fff]" icon={faXmark} />
              </button>
                {popup.content}
            </div>
        </>
      )}
    </>
  );
}
