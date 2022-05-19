import Head from 'next/head'
import React from 'react'

interface Props {
    title: string,
}
const NewHead: React.FC<Props> = ({ title}) => (
    <Head>
        <title>{title} - Luv Makin</title>
        <meta name='description' content='Luv Makin a creative web developer portfolio. Luv Makin is a third year Computer Science undergraduate from Chitkara University of Engineering and Technologies, Punjab, Chandigarh.' />
    </Head>
)

export default NewHead
