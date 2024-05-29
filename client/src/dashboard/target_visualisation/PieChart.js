import './piechart.css'

const PieChart = ({product}) => {
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
    <div className="chart-container">
      <div class="pie" style={{
         width: "100%",
         aspectRatio: "1",
         backgroundImage: `conic-gradient(${colors[0]} ${(((product.goalTarget-product.schools.length) / product.goalTarget) * 100)}%, ${colors[1]} ${((product.schools.length / product.goalTarget) * 100)}%)`,
         borderRadius: "50%",
      }}>
        <div className='tool-tip-text'>
          <div>Product Target: {product.goalTarget}</div>
          <div>Target Achieved: {product.schools.length}</div>
          <div>Target Left: {product.goalTarget - product.schools.length}</div>
        </div>
      </div>
    </div>
   </div>
  );
};
export default PieChart;