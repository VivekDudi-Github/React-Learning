import React from 'react'

function Logo(width = "100px") {
  return (
    <div className='text-white -translate-y-3 font-serif'><img className=' max-w-16 contrast-150 invert'
     src='data:image/png;base64,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'
    />Logo</div>
  )
}

export default Logo
