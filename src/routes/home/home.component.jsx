import { LinkedIn,Email,GitHub } from '@mui/icons-material';

import './home.styles.css'

const  Home = ()  =>{
    return(
     <div className='home'>
        <div className='about'>
            <h2>Hi, I am  Stefan</h2>
            <div className='prompt'><p>Frontend Developer </p>

            </div>
            
        </div>

        <div className='skills'>
            <h1>Welcome </h1>
            <ol className='list'>
                <li className='item'>
                    <h2></h2>
                    <p>
                    My portfolio is built using React, a popular JavaScript library for building user interfaces. 
                    I used React to create a single-page application that showcases my skills, projects, and experience as a developer.
                    </p>
                    <p>

                    The portfolio is designed with a responsive layout, which means it looks great on any device, 
                    whether you're viewing it on a desktop computer or a mobile device. The navigation menu is easy to use and allows you to quickly access different sections of
                     the portfolio.
                    </p>
                    <p>
                     The projects section showcases some of my most recent work, with images, descriptions, and links to the live sites or repositories.
                    
                    </p>
                </li>
            </ol>
        </div>
     </div>   
    )
};

export default Home;