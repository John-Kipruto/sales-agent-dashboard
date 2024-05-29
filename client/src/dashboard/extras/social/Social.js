import './social.css'

const Social = () => {
  return (
    <div className='socials'>
        <h3>Socials</h3>
        <div>
            <div className='activity'>
                <div className='icon'><i class="bi bi-facebook"></i></div>
                <div className='details'>
                    <div className='descr'>
                        <div>Facebook</div>
                        <div><span className='up'></span><i class="bi bi-arrow-up"></i>50%</div>
                    </div>
                    <div className='stats'>1.5k Likes - 598 Shares</div>
                </div>
            </div>

            <div className='activity'>
                <div className='icon'><i class="bi bi-instagram"></i></div>
                <div className='details'>
                    <div className='descr'>
                        <div>Instagram </div>
                        <div><span className='down'></span><i class="bi bi-arrow-down"></i>10%</div>
                    </div>
                    <div className='stats'>1k Subscribers</div>
                </div>
            </div>

            <div className='activity'>
                <div className='icon'><i class="bi bi-twitter"></i></div>
                <div className='details'>
                    <div className='descr'>
                        <div>Twitter</div>
                        <div><span className='up'></span><i class="bi bi-arrow-up"></i>30%</div>
                    </div>
                    <div className='stats'>2k Likes - 598 Shares</div>
                </div>
            </div>

            <div className='activity'>
                <div className='icon'><i class="bi bi-youtube"></i></div>
                <div className='details'>
                    <div className='descr'>
                        <div>Youtube Ads</div>
                        <div><span className='up'></span><i class="bi bi-arrow-up"></i>10%</div>
                    </div>
                    <div className='stats'>1k Likes - 500 Shares</div>
                </div>
            </div>

            <div className='activity'>
                <div className='icon'><i class="bi bi-linkedin"></i></div>
                <div className='details'>
                    <div className='descr'>
                        <div>Linked In Ads</div>
                        <div><span className='down'></span><i class="bi bi-arrow-down"></i>5%</div>
                    </div>
                    <div className='stats'>2.3k Likes - 1k Shares</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Social