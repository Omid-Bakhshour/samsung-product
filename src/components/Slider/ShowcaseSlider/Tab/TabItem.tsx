import React from 'react'

type Props = {
    title: string
}

function TabItem({
    title
}: Props) {
  return (
    <li>
        <button>
            {title}
            <span className='' />
        </button>
    </li>
  )
}

export default TabItem