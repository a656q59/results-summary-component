import React, {useState}from 'react';
import data from './data.json';

function App(props) {
  const [items] = useState(data);
  return (
    <div className="md:flex md:items-center md:justify-center md:h-screen md:max-w-xl md:mx-auto">
      <section className="md:flex bg-white shadow md:rounded-br-3xl md:rounded-tr-3xl ">            
      <div className="  md:flex-1 md:rounded-3xl text-center  bg-div p-8 text-white rounded-b-3xl">
          <p  className="mb-6">Your Result</p>
          <div className='flex items-center justify-center'>
            <p className="bg-circle w-20 h-20 md:w-40 md:h-40 flex items-center justify-center gap-1 rounded-full">
              <span className='flex flex-col'><span className='text-4xl font-bold md:text-6xl'>76</span> <span className='text-xs' >of 100</span></span> 
            </p>
          </div>
        <div className='z-40'>
          <h2 className='my-6 text-white font-bold text-lg md:text-2xl'>Great</h2>
          <p >You scored higher than 65% of the people who have taken these tests</p>
        </div>
      </div>



      <div className=' md:flex-1 p-8 md:rounded-br-3xl md:rounded-tr-3xl '>

        <h2 className='text-slate-700 mb-2 text-lg font-bold'>Summary</h2>
        <div>
          {items.map((item,index) => (
              <div key={index} className="my-4 flex items-center justify-between py-4 px-5 rounded-xl"style={{backgroundColor:item.color}}>
                {console.log(item.color2)}
                <h3 style={{color:item.color2}} className="flex items-center gap-2"><img src={item.icon} alt="{item.category}" /> {item.category}</h3>
                <p className="flex items-center gap-2 text-slate-500"><span className='text-slate-700 font-bold'>{item.score}</span>/100</p>
              </div>
          ))}
        </div>

        <button className='bg-slate-700 text-white rounded-full py-4 w-full hover:bg-indigo-600 tansition-all duration-200'>Continue</button>


      </div>
      </section>
    </div>
  );
}

export default App;