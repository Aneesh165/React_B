import React from 'react'

function Product() {
  return (
    <div className='template_body'>
    <div className='template_item'>
        <div className='image'>
          <img src="https://rukminim2.flixcart.com/image/600/600/xif0q/shoe/3/z/t/-original-imagx9kwqhyqsgqz.jpeg" alt="Nike Shoe" />
        </div>
        <div className='detail'>
          <h2>NIKE</h2>
          <p>Best quality shoes that can last longer.</p>
          <h3>$120</h3>
        </div>
      </div>
    <div className='template_item'>
        <div className='image'>
          <img src="https://assets.ajio.com/medias/sys_master/root/20230415/ZU8n/6439f0b0907deb497ae7a4d7/-600Wx600H-466060513-black-MODEL.jpg" alt="Nike Shoe" />
        </div>
        <div className='detail'>
          <h2>PUMA</h2>
          <p>Best quality shoes that gives comforts.</p>
          <h3>$99</h3>
        </div>
      </div>
    <div className='template_item'>
        <div className='image'>
          <img src="https://www.dashingboot.com/cdn/shop/products/download-2022-06-09T123436.538.png" alt="Nike Shoe" />
        </div>
        <div className='detail'>
          <h2>NEW BALANCE</h2>
          <p>Best quality shoes that are expensive</p>
          <h3>$120</h3>
        </div>
      </div>
      </div>
  )
}

export default Product