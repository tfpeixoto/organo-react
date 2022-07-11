import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-social'>
        <ul>
          <li><a href='https://facebook.com' target='_blank' rel='noreferrer'><img src='./images/fb.png' alt='Facebook' /></a></li>
          <li><a href='https://twitter.com' target='_blank' rel='noreferrer'><img src='./images/tw.png' alt='Twitter' /></a></li>
          <li><a href='https://instagram.com' target='_blank' rel='noreferrer'><img src='./images/ig.png' alt='Instagram' /></a></li>
        </ul>
      </div>

      <div className='footer-marca'>
        <img src='/images/logo.png' alt='Organo' />
      </div>

      <div className='copy'>
        <p>Desenvolvido por Thiago Peixoto</p>
      </div>
    </div>
  )
}

export default Footer