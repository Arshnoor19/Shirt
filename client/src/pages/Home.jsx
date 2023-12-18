import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { CustomButton } from '../components'

import {
    headContentAnimation,
    headContainerAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img
                      src='./threejs.png'
                      alt='logo'
                      className='w-8 h-8 object-contain'

                    />

                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                       <h1 className='head-text'>
                           LET'S <br className='xl:block hidden'/> DO IT!
                       </h1>
                    </motion.div>
                    <motion.div  {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-grey-600 text-base'>
                            This is a Awesome Shirt designing Webpage in which u are 
                            going to build your own shirt <strong>unleash your imagination</strong>{''}
                            and define your style.
                        </p>

                        <CustomButton
                          type = 'filled'
                          title ='customize'
                          handleClick={()=> state.intro= false}
                          CustomStyles='w-full px-4 py-2.5 font-bold text-sm'
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home