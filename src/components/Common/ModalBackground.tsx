"use client"

import React from 'react'

type Props = {
  visible: boolean
  classname?: string
} & React.HTMLAttributes<HTMLDivElement>

function ModalBackground({
  visible = false,
  classname = "",
  ...props
}: Props) {
  return (
    <div 
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-65 z-[1] ${classname}  ${visible ? "block" : "hidden"}`}
        {...props}
    />
  )
}

export default ModalBackground