import './bar-chart.css'


// This component displays custom bar graphs created using custom div elements and css
const BarChart = ({product}) => {

  // Get the total number of primary schools for a product
    let primary = product.schools.filter(school => school.type === "Primary").length

    // Get the total number of secondary schools
    let secondary = product.schools.filter(school => school.type === "Secondary").length

    // Get the total number of IGSCE schools
    let igsce = product.schools.filter(school => school.type === "IGSCE").length
    
    return (
      <div className="barchart-main">

        {/* Primary schools bar graph */}
        <div className="bar-contents">
          <div className="bar-container">
            <div className="bar">

              {/* Tooltip shown during hover */}
              <div className='tool-tip-text'>Primary: {primary}</div>

              {/* Calculate the height of the bar graph */}
              <div className="inner-bar primary" style={{height: `${(primary /product.schools.length) * 100}%`}}></div>
            </div>
          </div>

        {/* Secondary schools bar graph */}
          <div className="bar-container">
            <div className="bar">

              {/* Tooltip shown during hover */}
              <div className='tool-tip-text'>Secondary: {secondary}</div>

              {/* Calculate the height of the bar graph */}
              <div className="inner-bar secondary" style={{height: `${(secondary /product.schools.length) * 100}%`}}></div>
            </div>
          </div>


          {/* IGSCE bar graph */}
          <div className="bar-container">
            
            {/* Tooltip shown during hover */}
            <div className="bar">
              <div className='tool-tip-text'>IGSCE: {igsce}</div>

              {/* Calculate the height of the bar graph */}
              <div className="inner-bar igsce" style={{height: `${(igsce /product.schools.length) * 100}%`}}></div>
            </div>
          </div>
        </div>
        <div><h3>{product.name}</h3></div>
      </div>
    
    );
};
export default BarChart;