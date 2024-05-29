import './bar-chart.css'

const BarChart = ({product}) => {

    let primary = product.schools.filter(school => school.type === "Primary").length
    let secondary = product.schools.filter(school => school.type === "Secondary").length
    let igsce = product.schools.filter(school => school.type === "IGSCE").length
    
    return (
      <div className="barchart-main">
        <div className="bar-contents">
          <div className="bar-container">
            <div className="bar">
              <div className='tool-tip-text'>Primary: {primary}</div>
              <div className="inner-bar primary" style={{height: `${(primary /product.schools.length) * 100}%`}}></div>
            </div>
          </div>

          <div className="bar-container">
            <div className="bar">
              <div className='tool-tip-text'>Secondary: {secondary}</div>
              <div className="inner-bar secondary" style={{height: `${(secondary /product.schools.length) * 100}%`}}></div>
            </div>
          </div>

          <div className="bar-container">
            
            <div className="bar">
              <div className='tool-tip-text'>IGSCE: {igsce}</div>
              <div className="inner-bar igsce" style={{height: `${(igsce /product.schools.length) * 100}%`}}></div>
            </div>
          </div>
        </div>
        <div><h3>{product.name}</h3></div>
      </div>
    
    );
};
export default BarChart;