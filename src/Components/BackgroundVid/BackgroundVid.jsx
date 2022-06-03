import React from 'react'

const BackgroundVid = () => {
  return (
    <>
    <div className="main-banner" id="top">
        <video autoplay muted loop id="bg-video">
            <source src="assets/img/nuevas/video.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
            <div className="caption">
                <h6></h6>
                <h2>Käse</h2>
                <div className="main-button scroll-to-section">
                   {/*  <a href="#features">Become a member</a> */}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default BackgroundVid