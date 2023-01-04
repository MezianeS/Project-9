import React from 'react'
import { ImTwitter, ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
const CTA = () => {
  return (
    <div>
        <div className="container pnine__cta--all flex mt-28">
            <ImTwitter size={26} className="fill-blue-500" />
            <FiInstagram size={26} className="fill-blue-500"/>
            <ImFacebook size={26} className="fill-blue-500"/>
        </div>
    </div>
  )
}

export default CTA