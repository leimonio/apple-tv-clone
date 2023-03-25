import { Box } from '@chakra-ui/react'

import { Banner } from '../components/Banners/Banner'
import { BannerPlaceholder } from '../components/BannerPlaceholder/BannerPlaceholder';
import { HomeContent } from '../components/HomeContent/HomeContent'
import { Footer } from '../components/Footer/Footer'
import { Microfrontend } from '../components/Microfrontend/Microfrontend'

const MICRO_FRONTENDS = {
  HERO: {
    name: 'Hero',
    host: 'http://localhost:3001',
  },
}

function Home() {
  return (
    <Box top="30px" mt={68}>
      {/* <Banner /> */}
      <Microfrontend
        name={MICRO_FRONTENDS.HERO.name}
        host={MICRO_FRONTENDS.HERO.host}
        placeholder={BannerPlaceholder}
      />
      <HomeContent />
      <Footer />
    </Box>
  )
}

export default Home
