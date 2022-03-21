import React from 'react'
import Header from './Header'

const Admin = () => {
  return (
    <div>
        <Header/>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-md-2'>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Option 1
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body"><ul className="list-group">
                <li className="list-group-item">sub option 1</li>
                <li className="list-group-item">sub option 2</li>
                <li className="list-group-item">sub option 3</li>
                <li className="list-group-item">sub option 4</li>
                <li className="list-group-item">sub option 5</li>
                </ul></div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Option 2
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    <ul className="list-group">
                    <li className="list-group-item">sub option 1</li>
                    <li className="list-group-item">sub option 2</li>
                    <li className="list-group-item">sub option 3</li>
                    <li className="list-group-item">sub option 4</li>
                    <li className="list-group-item">sub option 5</li>
                    </ul>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Option 3
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                    <ul className="list-group">
                    <li className="list-group-item">sub option 1</li>
                    <li className="list-group-item">sub option 2</li>
                    <li className="list-group-item">sub option 3</li>
                    <li className="list-group-item">sub option 4</li>
                    <li className="list-group-item">sub option 5</li>
                    </ul>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                {/* RIGHT SIDE */}
                <div className='col col-md-10'>
                    {/* ROW 1 */}
                    <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">9949</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">283</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">283</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">283</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* ROW 2 */}
                    <div className='row'>
                        <div className='col-md-6'>
                            <h4>Table 1</h4>
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Make</th>
                            <th scope="col">Model</th>
                            <th scope="col">Year</th>
                            <th scope="col">Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Honda</td>
                            <td>Accord</td>
                            <td>2009</td>
                            <td>$700</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Toyota</td>
                            <td>Camry</td>
                            <td>2012</td>
                            <td>$1000</td>
                            </tr>
                           
                        </tbody>
                        </table>
                        </div>
                        <div className='col-md-6'>
                            <h4>Table 2</h4>
                        <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Make</th>
                            <th scope="col">Model</th>
                            <th scope="col">Year</th>
                            <th scope="col">Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Honda</td>
                            <td>Accord</td>
                            <td>2009</td>
                            <td>$700</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Toyota</td>
                            <td>Camry</td>
                            <td>2012</td>
                            <td>$1000</td>
                            </tr>

                        </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin