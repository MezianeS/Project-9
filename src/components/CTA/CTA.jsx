import React from 'react'
import { ImTwitter, ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
const CTA = () => {
  return (
    <div>
        <div className="container pnine__cta--all flex mt-28 justify-center">
            <a href=""><ImTwitter size={22} className="cta--icons" /></a>
            <a href=""><FiInstagram size={22} className="cta--icons"/></a>
            <a href=""><ImFacebook size={22} className="cta--icons"/></a>
        </div>
    </div>
  )
}

export default CTA