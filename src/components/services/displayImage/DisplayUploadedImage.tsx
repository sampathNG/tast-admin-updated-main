'use client'
import React from 'react'
import image from '/public/images/uploadedImg.png'
import cross from '/public/images/cross.svg'
import Image from 'next/image'
const DisplayUploadedImage = () => {
    return (
        <div className='relative rounded-md'>
            <Image src={image} width={200} height={300} className='w-full  rounded-md' alt='img' />
            <button><Image className='absolute top-0 right-0 m-2' src={cross} width={40} height={40} alt='cross' /></button>
        </div>
    )
}

export default DisplayUploadedImage