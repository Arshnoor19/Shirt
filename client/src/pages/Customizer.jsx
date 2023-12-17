import React, {useState , useEffect} from 'react'
import { AnimatePresence,motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from '../config/config'
import state from '../store'
import {download} from '../assets'
import {downloadCanvasToImage, reader } from '../config/helpers'
import {EditorTabs , DecalTypes} from '../config/constants.js'
import { FilterTabs } from '../config/constants.js'
import { fadeAnimation,slideAnimation } from '../config/motion'
import { AIPicker,ColorPicker,FilePicker,Tab,CustomButton } from '../components'

const customizer = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
          {!snap.intro && (
            <>
             <motion.div>
                
             </motion.div>
            </> 
          )}
    </AnimatePresence>
  )
}

export default customizer