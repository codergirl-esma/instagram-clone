import React, { useState } from 'react';



export default function Input({label, ...props}) {
    const [show, setShow] = useState(false)

  return (
    <label className='block relative'>
    <input type='text'  required={true} className='bg-zinc-50 border rounded text-xs focus:border-gray-300 w-full h-[38px] valid:pt-[12px]  peer p-[8px]' {...props} />
    <small className='absolute top-2 left-[9px] text-gray-400 cursor-text pointer-events-none transition-all peer-valid:text-[10px] peer-valid:top-1'>{label}</small> 
    {props?.type === 'password' && (
        <button type='button' onClick={() => setShow(show => !show)} className='absolute top-0 right-0 h-full flex items-center'>
            {show ? 'Hide' : 'Show'}

        </button>
    )}
    </label>
  )
}
