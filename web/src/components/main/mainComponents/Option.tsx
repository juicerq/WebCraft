import useIsMobile from '@/hooks/useIsMobile'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface OptionProps {
  title: string
  children: ReactNode
  buttonName: string
  buttonLink: string
}

export default function Option(props: OptionProps) {
  const isMobile = useIsMobile()
  const initialValue = isMobile ? { opacity: 0 } : { opacity: 1 }
  const whileInViewValue = isMobile ? { opacity: [0, 1] } : { opacity: 1 }
  return (
    <motion.div
      viewport={{ once: true }}
      initial={initialValue}
      whileInView={whileInViewValue}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.2 }}
      className="flex flex-col gap-6"
    >
      <h4 className=" relative z-10 w-fit text-left text-5xl text-mainPalette-bg">
        {props.title}
      </h4>
      {props.children}
      {/* Button Craft */}
      <button className="button-hover w-full items-center justify-center rounded-md bg-mainPalette-primaryButton px-4 py-2 text-lg tracking-widest text-mainPalette-text shadow-md active:scale-95 md:w-1/3 md:px-12 lg:w-fit">
        <Link href={`/${props.buttonLink}`} className="">
          {props.buttonName}
        </Link>
      </button>
    </motion.div>
  )
}