"use client"

import React from 'react'

type Props = {
  onClickHandler?: () => void
  visible: boolean
  classname?: string
}

function ModalBackground({
  onClickHandler = () => {},
  visible,
  classname = ""
}: Props) {
  return (
    <div 
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black opacity-65 z-[1] ${classname}  ${visible ? "flex" : "hidden"}`}
        onClick={onClickHandler}
    />
  )
}

export default ModalBackground