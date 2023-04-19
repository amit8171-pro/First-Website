import React from 'react'
import '../style/footer.scss'

function Footer() {
  return (
    <>
      <div className="container">
        <div className="row">
        <div className="col-lg-2 col-6">
                <img src="https://ciseco-nextjs.vercel.app/_next/static/media/logo.14d0e71d.svg"  alt="" className='py-3'/>
                <ul>
                    <li><a href=""><i class="bi bi-facebook pe-3 text-primary"></i>Facebook</a></li>
                    <li><a href=""><i class="bi bi-youtube pe-3 text-danger"></i>Youtube</a></li>
                    <li><a href=""><i class="bi bi-telegram pe-3 text-info"></i>Telegram</a></li>
                    <li><a href=""><i class="bi bi-twitter pe-3 text-primary"></i>Twitter</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-6">
                <ul>
                  <li> <h4 className='fs-6 py-4'>Getting started</h4></li>
                    <li><a href="">Release Notes</a></li>
                    <li><a href="">Upgrade Guide</a></li>
                    <li><a href="">Browser Support</a></li>
                    <li><a href="">Dark Mode</a></li>
                </ul>
            </div>
            <div className="col-lg-3 col-6">
                <ul>
                  <li> <h4 className='fs-6 py-4'>Explore</h4></li>
                    <li><a href="">Prototyping</a></li>
                    <li><a href="">Design systems</a></li>
                    <li><a href="">pricing</a></li>
                    <li><a href="">Security</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-6">
                <ul>
                  <li> <h4 className='fs-6 py-4'>Resources</h4></li>
                    <li><a href="">Best practices</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Developers</a></li>
                    <li><a href="">Learn design</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-6">
                <ul>
                  <li> <h4 className='fs-6 py-4'>Community</h4></li>
                    <li><a href="">Discussion Forums</a></li>
                    <li><a href="">Code of Conduct</a></li>
                    <li><a href="">Contributing</a></li>
                    <li><a href="">API Reference</a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
