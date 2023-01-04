import React from 'react'
import { ImTwitter, ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
const CTA = () => {
  return (
    <div>
        <div className="container pnine__cta--all flex mt-28 justify-center">
            <ImTwitter size={26} className="fill-blue-500 ml-2 mr-2" />
            <FiInstagram size={26} className="fill-blue-500 ml-2 mr-2"/>
            <ImFacebook size={26} className="fill-blue-500 ml-2 mr-2"/>
        </div>
    </div>
  )
}

export default CTA