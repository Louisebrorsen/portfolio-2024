/* Dette er en snyde database
En database er en samling af data, som er organiseret på en sådan måde, at det er nemt at hente og opdatere data.
Dette gør at man kun skal opdatere data ét sted, og så vil det blive opdateret alle steder, hvor dataen bliver brugt.
*/

import { ref } from 'vue'
import image1 from '../assets/img/moffe.png'


const getPortlolioItems = () => {
    
    const portfolioItems = ref([
      {
        id: 1,
        title: 'Familie som blomster',
        description: 'Et billede tegnet af mig, som viser min familie som deres måneds blomst.',
        image: image1,
        category: 'ccge'
    
      },
      {
        id: 2,
        title: 'Portfolio Item 2',
        description: 'This is the second portfolio item',
        image: 'https://via.placeholder.com/150',
        link: 'https://www.google.com',
        category: 'photo'
      },
      {
        id: 3,
        title: 'Portfolio Item 3',
        description: 'This is the third portfolio item'
      },
      {
        id: 4,
        title: 'Portfolio Item 2',
        description: 'This is the second portfolio item'
      }  
    ])

    return { portfolioItems }
}

export default getPortlolioItems





