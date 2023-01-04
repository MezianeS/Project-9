import React from 'react'
import { ImTwitter, ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
const CTA = () => {
  return (
    <div>
        <div className="container pnine__cta--all flex mt-28 justify-center">
            <span><ImTwitter size={26} className="cta--icons" /></span>
            <span><FiInstagram size={26} className="cta--icons"/></span>
            <span><ImFacebook size={26} className="cta--icons"/></span>
        </div>
    </div>
  )
}

export default CTA