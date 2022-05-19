import type { NextPage } from 'next'
import Head from 'next/head'
import { About, Projects, Bio, Online, Loader } from '../components'
import NewHead from '../utilities/useHead'

const Home: NextPage = () => {
  return (
    <div>
      <NewHead title='Home' />
      <About />
      <Bio />
      <Online />
    </div>
  )
}

export default Home
