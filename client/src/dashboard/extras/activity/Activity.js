import './activity.css'

const Activity = () => {
  return (
    <div className='activities'>
        <h3>Activities</h3>
        <div>
            <div className='activity'>
                <div className='icon lightgold'><i class="bi bi-bounding-box-circles"></i></div>
                <div className='details'>
                    <div className='descr'>
                        <div>Total Products</div>
                        <div>3</div>
                    </div>
                    <div className='outer'><div className='inner gold'></div></div>
                </div>
            </div>

            <div className='activity'>
                <div className='icon lightgreen'><i class="bi bi-buildings-fill"></i></div>
                <div className='details'>
                    <div className='descr'>
                        <div>Total Schools</div>
                        <div>500</div>
                    </div>
                    <div className='outer'><div className='inner green'></div></div>
                </div>
            </div>

            <div className='activity'>
                <div className='icon lightblue'><i class="bi bi-card-list"></i></div>
                <div className='details'>
                    <div className='descr'>
                        <div>New Registration</div>
                        <div>3</div>
                    </div>
                    <div className='outer'><div className='inner blue'></div></div>
                </div>
            </div>

            <div className='activity'>
                <div className='icon lightpurple'><i class="bi bi-cash-coin"></i></div>
                <div className='details'>
                    <div className='descr'>
                        <div>Total Revenue</div>
                        <div>1000</div>
                    </div>
                    <div className='outer'><div className='inner purple'></div></div>
                </div>
            </div>

            <div className='activity'>
                <div className='icon lightred'><i class="bi bi-currency-dollar"></i></div>
                <div className='details'>
                    <div className='descr'>
                        <div>Net Profit</div>
                        <div>3000</div>
                    </div>
                    <div className='outer'><div className='inner red'></div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Activity