import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component {
   renderWeahter(cityData){
      const name = cityData.city.name;
      const temp = cityData.list.map(weather => weather.main.temp);
      const pressure = cityData.list.map(weather => weather.main.pressure);
      const humidity = cityData.list.map(weather => weather.main.humidity);

      return(
         <tr key={ name } >
            <td>{ name }</td>
            <td><Chart data = { temp} color="red" units= 'K'/></td>
            <td><Chart data = { pressure } color="green" units= 'hPa'/></td>
            <td><Chart data = { humidity } color="orange" units= '%'/></td>
         </tr>
      );
   }


   render(){
      return(
         <table className='table table-hover'>
            <thead>
               <tr>
                  <th>City</th>
                  <th>Tempreture (K)</th>
                  <th>Pressure (hPa)</th>
                  <th>Humidity(%)</th>
               </tr>
            </thead>
            <tbody>

                     {this.props.weather.map(this.renderWeahter)}

            </tbody>
         </table>
      );
   }
}


function mapStatetoProps({ weather}){ // equal to passing "state"  iin parameters
   return { weather }; // { weather} === { weather : state.weather }
}


export default connect(mapStatetoProps)(WeatherList);
