/* Dette er en snyde database
En database er en samling af data, som er organiseret på en sådan måde, at det er nemt at hente og opdatere data.
Dette gør at man kun skal opdatere data ét sted, og så vil det blive opdateret alle steder, hvor dataen bliver brugt.
*/

import { ref } from 'vue'
import image1 from '../assets/img/moffe.png'
import image2 from '../assets/img/mom.png'
import image3 from '../assets/img/Thecakeshop.png'
import image4 from '../assets/img/trapholt.png'


const getPortlolioItems = () => {
    
    const portfolioItems = ref([
      {
        id: 1,
        title: 'Familie "portæt"',
        description: 'Familie "portæt" hvor vi er repræsenteret af hver af vores månedsblomst.',
        image: image1,
        category: 'ccge'
    
      },
      {
        id: 2,
        title: 'Familie "portæt"',
        description: 'Familie "portæt" hvor vi er repræsenteret af hver af vores månedsblomst.',
        image: image2,
        category: 'ccge'
      },
      {
        id: 3,
        title: 'Thecakeshop hjemmeside',
        description: 'Første projekt i forbindelse med webudvikling.',
        image: image3, 
        link: 'https://thecakeshop.dk',
        category: 'web'        
      },
      {
        id: 4,
        title: 'Eksamens projekt Trapholt',
        description: 'Eksamens projekt for Trapholt.',
        image: image4,
        category: 'project',
        link: 'https://eksamentrapholt.dk/'
      },  
      {
        id: 5,
        title: 'Eksamens projekt Trapholt',
        description: 'Eksamens projekt for Trapholt.',
        image: image4,
        category: 'project',
        link: 'https://eksamentrapholt.dk/'
      },  
    ])

    return { portfolioItems }
}

export default getPortlolioItems





