import React from 'react'

const Map
 = () => {
  return (
    <div className='agency__container--cartebis'>  
        <div className='text-[black] flex'>Find our agency in Paris:
          <address>
            7 Av. du General Lemmonier
            <br />
            75001, Paris
          </address>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.8019434053886!2d2.3294062158910394!3d48.861987008407155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2f2faf1899%3A0x4041baaa9cfa6c2c!2s7%20Av.%20du%20G%C3%A9n%C3%A9ral%20Lemonnier%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1675089538011!5m2!1sfr!2sfr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}

export default Map
