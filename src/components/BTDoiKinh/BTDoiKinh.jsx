import React, { Component } from 'react'
import './style.css'
import data from './dataGlasses.json'

export default class BTDoiKinh extends Component {

  state = {
    glass: {

    }

  }





  render() {
    console.log("data: ", data);

    return (
      <div className='bg'>
        <header>
          {/* <div className='bg-overlay'></div> */}
          <nav >
            <div className='overlay-nav pt-3'><h4 className='text-center m-0'>TRY GLASSES APP ONLINE</h4></div>

          </nav>
          <div className='content container mt-4 mb-4'>
            <div className='imgModel modelLeft'>
              <img width={250} src="./glassesImage/model.jpg" alt="." />
              <div className='contentProduct'>
                <h5 className='name-product'>FENDI F8750</h5>
                <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                <img className='glassTest' src="./glassesImage/v1.png" alt="." />



              </div>
            </div>
            <div className='imgModel modelRight'>
              {/* <h5>FENDI F8750</h5>
              <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p> */}
              <img width={250} src="./glassesImage/model.jpg" alt="." />
              {this.state.glass.id &&
               <div className='contentGlassRight'>
                <h5 className='name-product'>{this.state.glass.name}</h5>
                <p>{this.state.glass.desc}</p>


                <img className='glassTestRight' src={this.state.glass.url} alt="." />



              </div>
              }
              
             



            </div>
          </div>
          <div className='body-choose mb-5'>
            <div className='chooseGlasses container mt-3 mb-3' >
              <div className='row list-glasses'>
                {data?.map((glass) => {
                  return (
                    <img key={glass.id} className='col-2 glass pb-3 pt-3' src={glass.url} alt="" onClick={() => this.setState({
                      glass: glass
                    })} />
                  )
                })}


              </div>
            </div>



          </div>

        </header>
      </div>
    )
  }
}
