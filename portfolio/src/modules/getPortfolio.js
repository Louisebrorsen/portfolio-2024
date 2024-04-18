/* Dette er en snyde database
En database er en samling af data, som er organiseret på en sådan måde, at det er nemt at hente og opdatere data.
Dette gør at man kun skal opdatere data ét sted, og så vil det blive opdateret alle steder, hvor dataen bliver brugt.
*/

import { ref } from 'vue'
import image1 from '../assets/img/moffe.png'
import image2 from '../assets/img/mom.png'
import image3 from '../assets/img/Thecakeshop.png'
import image4 from '../assets/img/trapholt.png'
import image5 from '../assets/img/sten-port.png'
import image6 from '../assets/img/IMG_7107.jpeg'
import image7 from '../assets/img/Rocketship Logo - day 1.jpg'

const getPortlolioItems = () => {
    
    const portfolioItems = ref([
      {
        id: 1,
        title: 'Familie "portæt"',
        description: 'Familie "portæt" hvor vi er repræsenteret af hver af vores månedsblomst.',
        description2: 'Ville overaske min morfar med et billede af os alle sammen, hvor vi hver især er repræsenteret af vores månedsblomst. Jeg har lavet billedet i fresco og illustrator. Ideen kom ud fra at et billede af os sammen ikke var tiltalende at have stående fremme, derfor tænkte jeg det kunne være et godt elternativ, da han er natur glad',
        image: image1,
        category: 'ccge'
    
      },
      {
        id: 2,
        title: 'Familie "portæt"',
        description: 'Familie "portæt" hvor vi er repræsenteret af hver af vores månedsblomst.',
        description2: 'Ville overaske min mor med vores lille kerne af familien samlet. Jeg har lavet billedet i fresco og illustrator.',   
        image: image2,
        category: 'ccge'
      },
      {
        id: 3,
        title: 'Thecakeshop hjemmeside',
        description: 'Første projekt i forbindelse med webudvikling.',
        description2: 'Denne hjemmeside er det første projekt jeg har lavet i forbindelse med webudvikling. Jeg har lavet hjemmesiden med html og scss, og har stået for at designe og kode den.',
        image: image3, 
        link: 'https://thecakeshop.dk',
        category: 'web'        
      },
      {
        id: 4,
        title: 'Eksamens projekt Trapholt',
        description: 'Eksamens projekt for Trapholt.',
        description2: 'Til vores første sem. eksamen skulle vi lave en rapport for Trapholt, hvor vi skulle lave en ny hjemmeside til dem, samt grafisk materiale. Jeg har primært været den der har stået for at kode hjemmesiden.',
        image: image4,
        category: 'project',
        pdfURL:'https://firebasestorage.googleapis.com/v0/b/portfolio-louisebrorsen.appspot.com/o/trapholt-report.pdf?alt=media&token=bc6ddfa2-b15d-4127-a533-df57a7cc50ed',
        link: 'https://eksamentrapholt.dk/'
      },  
      {
        id: 5,
        title: 'Fjernelse af baggrund',
        description: 'Fjernelse af baggrund af billede.',
        description2: 'Jeg har fjernet baggrunden på dette billede, for at øve mig i at bruge Photoshop.',
        image: image5,
        category: 'ccvf',
      },  
      {
        id: 6,
        title: 'Billede af nattehimmel',
        description: 'Billede af nattehimmel med stjerner.',
        image: image6,
        category: 'ccvf',
      },  
      {
        id: 7,
        title: 'Logo challenge',
        description:'Uddrag fra 30 dages logo challenge.',
        description2: 'Jeg har vlagt at deltage i en 30 dages logo challenge, for at udfordre mig selv og for at blive bedre til at designe logoer. og benytte de forskellige design programmer',
        image: image7,
        link: 'https://dribbble.com/louisebrorsen',
        category: 'project',
      },  
    ])

    return { portfolioItems }
}

export default getPortlolioItems



