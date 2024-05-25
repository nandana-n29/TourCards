import './Tours';
import Card from './Card';



function Tours({tours , removeTour})
{
    return(
        <div className='container'>
        <div><h2 className='title'>Plan With Nandana</h2></div>
        <div className='cards'>
            {
                tours.map((tour) =>
                {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    // jb bhi map function use krte ho tb "key which is unique" pass krna hi krna hai;
                    // map is gen used with list of data which we have
                })
            }
        </div>
        
        
        </div>
    );

}

export default Tours;

