import './piechart.css'


// This component displays custom pie chart for each product created using only div and css
const PieChart = ({product}) => {

  // Set different color for the pie chart based on the product description
  let colors = []
  if(product.description === "finance"){
    colors = ["silver", "grey"]
  } else if(product.description === "analytics"){
    colors=["black", "grey"]
  } else{
    colors = ["gold", "grey"]
  }

return (
  <div className="product-pie">
    <h3>{product.name}</h3>
    <div className='colors-info'>
      <div>
        <div className='color' style={{background: `${colors[0]}`, width: "50px",}}></div>
        <div>Target Left</div>
      </div>
      <div>
        <div className='color' style={{background: `${colors[1]}`, width: "50px",}}></div>
        <div>Target Achieved</div>
      </div>
    </div>

    {/* Calculate the size of the different charts */}
    <div className="chart-container">
      <div class="pie" style={{
         width: "100%",
         aspectRatio: "1",
         backgroundImage: `conic-gradient(${colors[0]} ${(((product.signupGoal-product.schools.length) / product.signupGoal) * 100)}%, ${colors[1]} ${((product.schools.length / product.signupGoal) * 100)}%)`,
         borderRadius: "50%",
      }}>

        {/* Tool tip to be shown when you hover on the chart */}
        <div className='tool-tip-text'>
          <div>Product Target: {product.signupGoal}</div>
          <div>Target Achieved: {product.schools.length}</div>
          <div>Target Left: {product.signupGoal - product.schools.length}</div>
        </div>
      </div>
    </div>
   </div>
  );
};
export default PieChart;