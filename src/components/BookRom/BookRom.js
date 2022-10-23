import React from 'react';

const BookRom = () => {
     return (
        <div>
            <h2 className='text-center text-3xl m-7  text-purple-400'> Deluxe Room For Couples</h2>
            <div className='m-5 lg:grid-cols-3 md:grid-cols-2 gap-10 sm:grid-cols-1 grid '>
               <div className="card lg:w-96 sm:w-60 bg-base-100 shadow-xl">
                    <figure><img src="https://www.kayak.com/rimg/himg/7b/5e/e2/expediav2-2111636-407837863-508248.jpg?width=1366&height=768&crop=true" alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">Deluxe!</h2>
                         <h5>Per day : 100$</h5>
                         <h5>Single couple</h5>
                         <h5>Basic Services</h5>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary">Book Now</button>
                         </div>
                    </div>
               </div>
               <div className="card lg:w-96 sm:w-60 bg-base-100 shadow-xl">
                    <figure><img src="https://image-tc.galaxy.tf/wijpeg-6kct3e07vioyscibys1rofqg8/lex-apr2019-1834b-flat-resized_wide.jpg?crop=0%2C51%2C979%2C551" alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">Deluxe!</h2>
                         <h5>Per day : 150$</h5>
                         <h5>Single & dual couple</h5>
                         <h5>Basic Services</h5>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary">Book Now</button>
                         </div>
                    </div>
               </div>
               <div className="card lg:w-96 sm:w-60 bg-base-100 shadow-xl">
                    <figure><img src="https://cache.marriott.com/content/dam/marriott-renditions/NYCLX/nyclx-guestroom-7628-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*" alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">Deluxe!</h2>
                         <h5>Per day : 120$</h5>
                         <h5>Single couple</h5>
                         <h5>Basic Services</h5>
                         <div className="card-actions justify-end">
                              <button className="btn btn-danger" disabled>Booked</button>
                         </div>
                    </div>
               </div>
               <div className="card lg:w-96 sm:w-60 bg-base-100 shadow-xl">
                    <figure><img src="https://images.getaroom-cdn.com/image/upload/s--OWwoC6oY--/c_limit,e_improve,fl_lossy.immutable_cache,h_940,q_auto:good,w_940/v1654792055/6eae92fe208b9bdd2eeaf27fa6df3b6592f52f55?atc=bc5da95f" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">Deluxe!</h2>
                         <h5>Per day : 320$</h5>
                         <h5>Single couple</h5>
                         <h5>Basic Services</h5>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary">Book Now</button>
                         </div>
                    </div>
               </div>
               <div className="card lg:w-96 sm:w-60 bg-base-100 shadow-xl">
                    <figure><img src="https://i.travelapi.com/hotels/2000000/1210000/1200100/1200035/d1eebb2d_z.jpg" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">Deluxe!</h2>
                         <h5>Per day : 220$</h5>
                         <h5>Single couple</h5>
                         <h5>Basic Services</h5>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary">Book Now</button>
                         </div>
                    </div>
               </div>
               <div className="card lg:w-96 sm:w-60 bg-base-100 shadow-xl">
                    <figure><img src="https://www.centralhotel.gr/sites/centralhotel/files/items/22.jpg" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">Deluxe!</h2>
                         <h5>Per day : 180$</h5>
                         <h5>Single couple</h5>
                         <h5>Basic Services</h5>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary" disabled>Booked</button>
                         </div>
                    </div>
               </div>

          </div>
        </div>
     );
};

export default BookRom;