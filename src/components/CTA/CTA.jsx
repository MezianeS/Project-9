import React from 'react'
import { ImTwitter, ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
const CTA = () => {
  return (
    <div>
        <div className="container pnine__cta--all flex mt-28 justify-center">
            <ImTwitter size={26} className=" ml-3 mr-3" />
            <FiInstagram size={26} className="ml-3 mr-3"/>
            <ImFacebook size={26} className="ml-3 mr-3"/>
        </div>
    </div>
  )
}

export default CTA