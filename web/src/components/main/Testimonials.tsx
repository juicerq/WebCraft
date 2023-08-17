'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Image from 'next/image'
import { CornerDividerTop } from './mainComponents/CornerDivider'

const testimonials = [
  {
    name: 'Toninho Rodrigues',
    feedBack:
      'As a fellow developer, I have had the pleasure of working with [Your Name] and I am thrilled with the exceptional service they provided. Their expertise, professionalism, and attention to detail were outstanding. ',
  },
  {
    name: 'Xubi Rodrigo',
    feedBack:
      'As a fellow developer, I have had the pleasure of working with [Your Name] and I am thrilled with the exceptional service they provided. Their expertise.',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="section-spacing relative flex w-screen flex-col items-center justify-around gap-28 py-28">
      <CornerDividerTop />
      <div className="flex flex-col gap-4">
        <h3 className="w-full text-center font-main text-3xl text-mainPalette-text 2xl:text-5xl">
          Relatos dos nossos{' '}
          <span className="text-mainPalette-primaryButton">clientes</span>
        </h3>
        <p className="w-full text-center text-lg text-zinc-600">
          A satisfação dos nossos clientes é a nossa maior conquista
        </p>
      </div>
      {testimonials && (
        <div className="flex w-full flex-col items-center justify-center">
          <div
            className="relative flex h-[340px] flex-col items-center justify-center rounded-md bg-mainPalette-bgAlt p-8 md:h-[300px] md:w-[540px] lg:h-72 lg:flex-row 2xl:w-[740px]"
            key={testimonials[currentIndex].name}
          >
            <motion.div
              className="absolute -top-14 h-28 w-28 rounded-full border-2 border-mainPalette-primaryButton lg:bottom-56"
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Image
                src={`https://source.unsplash.com/random/150x150?woman=${currentIndex}`}
                width={150}
                height={150}
                alt="a"
                className="rounded-full object-center"
              />
            </motion.div>
            {/* FeedBack */}
            <div className="flex w-full flex-col items-start gap-8 pt-6 text-center md:text-center">
              <motion.p
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-zinc-400 lg:leading-relaxed"
              >
                {testimonials[currentIndex].feedBack}
              </motion.p>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="w-full text-center"
              >
                <h4 className="font-main text-mainPalette-primaryButton md:text-lg">
                  {testimonials[currentIndex].name}
                </h4>
              </motion.div>
            </div>
          </div>
          <div className="m-6 flex gap-10">
            <button
              className="flex cursor-pointer items-center justify-center rounded-full bg-mainPalette-bgAlt p-1 text-white active:scale-95 active:bg-mainPalette-accent lg:hover:bg-mainPalette-accent"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1,
                )
              }
            >
              <HiChevronLeft size={35} />
            </button>
            <button
              className="flex cursor-pointer items-center justify-center rounded-full bg-mainPalette-bgAlt p-1 text-white active:scale-95 active:bg-mainPalette-accent lg:hover:bg-mainPalette-accent"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1,
                )
              }
            >
              <HiChevronRight size={35} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}