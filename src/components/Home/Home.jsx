import Banner from './Banners/Banner'
import {
  comingSoon,
  tales,
  mysteries,
  voice,
  extraOrd,
  creatures,
  jumboSliderData,
  dramaSeries,
  severWN,
  comSeries,
  amazPlanet,
  nonFi,
  kidsFam,
} from '../../db';

import { Box } from '@chakra-ui/react'
import { Footer } from './Footer/Footer'
import MiniBanner from './MiniBanner/MiniBanner'
import { CardCarousel } from './MiniCard/CardCarousel'

function Home() {
  return (
    <Box top="30px" mt={70}>
      <Banner />
      <CardCarousel
        data={comingSoon}
        title={'Coming Soon'}
        minititle={'Add to your Up Next watchlist today.'}
      />
      <CardCarousel data={tales} title={'Eerie Tales'} />
      <CardCarousel data={mysteries} title={'Mysteries & Whodunits'} />
      <CardCarousel data={voice} title={'Finding Thier Voice'} />
      <MiniBanner data={jumboSliderData} />
      <CardCarousel data={extraOrd} title={'Extraordinary People'} />
      <CardCarousel data={creatures} title={'Creatures & Critters'} />
      <CardCarousel data={dramaSeries} title={'All Drama Series'} />
      <CardCarousel
        data={severWN}
        title={'Severance: Watch Now'}
        minititle={
          'Adam Scott stars in a darkly thrilling new series from Ben Stiller.'
        }
      />
      <CardCarousel data={comSeries} title={'All Comedy Series'} />
      <CardCarousel
        data={amazPlanet}
        title={'Our Amazing Planet'}
        minititle={'Explore nature documentary films and series.'}
      />
      <CardCarousel data={nonFi} title={'All Nonfiction Series'} />
      <CardCarousel
        data={kidsFam}
        title={'Kids and Family'}
        minititle={
          'Discover shows and movies filled with wonder and imagination.'
        }
      />
      <Footer />
    </Box>
  )
}

export default Home
