import { Box } from '@chakra-ui/react'

import { Banner } from '../components/Banners/Banner'
import { HomeContent } from '../components/HomeContent/HomeContent'
import { Footer } from '../components/Footer/Footer'

function Home() {
  return (
    <Box top="30px" mt={68}>
      <Banner />
      <HomeContent />
      <Footer />
    </Box>
  )
}

export default Home
