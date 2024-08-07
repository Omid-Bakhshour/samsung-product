import React from 'react'

type Props = {
    title: string
}

function TitleSection({
    title
}: Props) {

    const isTitleValid = title && title.length > 0
    if(!isTitleValid) {
        return <></>
    }
  return (
    <section className='w-full max-w-8xl  pt-[8.88vw] md:pt-[3.33vw] xl:pt-12 pb-[4.44vw] md:pb-[1.11vw] md:mx-auto  xl:pb-4 block' >
        <h2  className='max-w-[86.66vw] md:max-w-[96.66vw] xl:max-w-[1392px] w-full mx-auto text-center text-[7.22vw] md:text-[2.63vw] xl:font-[38px] leading-[1.33] md:leading-[1.22] font-bold' >{title}</h2>
    </section>
  )
}

export default TitleSection