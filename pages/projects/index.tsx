import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import NewHead from '../../utilities/useHead'

const Works = [
    { id: '-project-item-1', image: '/assets/-pandacover-voidlist.png', title: 'VoidList', desc: 'A todo list app with user authentication and user friendly UI' },
    { id: '-project-item-2', image: '/assets/-pandacover-goalsetter.png', title: 'GoalSetter', desc: 'A goal setting app with user authentication and goal tracking feature.' },
    { id: '-project-item-3', image: '/assets/-pandacover-tracker.png', title: 'Expense Tracker', desc: 'An app that track your expenses so you don&apos;t have to.' },
    { id: '-project-item-4', image: '/assets/-pandacover-swiggy.png', title: 'Swiggy Clone', desc: 'Swiggy website&apos;s homepage clone website.' },
    { id: '-project-item-5', image: '/assets/-pandacover-sudoku.png', title: 'Sudoku', desc: 'A simple sudoku game with validation option.' },
    { id: '-project-item-6', image: '/assets/-pandacover-pokemon.png', title: 'Pokemon Wiki', desc: 'Pokemon wiki website.' },
]

const Projects: NextPage = () => {
    return (
        <>
        <NewHead title='Projects' />
        <div className='mt-8'>
            <h1 className='font-bold text-xl pb-[2px] border-b-4 border-gray-400 w-fit'>My Personal Projects</h1>
            <ul className='grid grid-cols-2 gap-4 pt-8'>
                { Works.map(item => (
                    <li key={item.id} className='mb-4'>
                        <Link href='/' passHref>
                            <a className='text-center group'>
                                <figure className='relative w-full h-28 flex items-center justify-center'>
                                   <Image className='object-contain rounded-lg group-hover:scale-110 transition' src={item.image} alt='One of my project' layout='fill' /> 
                                </figure>
                                <div>
                                <h1 className='text-xl font-medium py-2'>{item.title}</h1>
                                <p className='px-4 text-sm'>{item.desc}</p>
                                </div>
                            </a>
                        </Link>
                    </li>
                )) }
            </ul>
        </div>
        </>
    )
}

export default Projects
