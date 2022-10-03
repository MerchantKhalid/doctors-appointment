
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({date,setDate}) => {
    
    return (
       <section>
        <div style={{background:`url(${bg})`}} className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={chair} alt ='calendar' className="max-w-sm rounded-lg shadow-lg" />
    <div>
    <DayPicker
      mode="single"
      selected={date}
      onSelect={setDate}
      
    />
      
    </div>
   
  </div>
</div>
       </section>
    );
};

export default AppointmentBanner;