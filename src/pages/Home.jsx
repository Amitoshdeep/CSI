import React from 'react';
import { motion } from 'framer-motion';
import CircularText from "../components/reactbits/CircularText";
import ScrollVelocity from "../components/reactbits/ScrollVelocity";
import TypedParagraphAuto from "../components/TypedParagraphAuto";

export default function Home() {
  const velocity = 100;

  const imgLogo = [
    { name: "chitkara", url: "/imgs/culogo.png", loc: "https://ca.chitkara.edu.in/" },
    { name: "csi-logo", url: "/imgs/csi-logo.png", loc: "https://csi-india.org/" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative min-h-screen"
    >

      {/* Hero img */}
      <div className='hero relative px-4 z-10 pt-5'>

        {/* Main Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='w-full aspect-[16/9]
          mask-[url("src/assets/layout/Imgage.png")] bg-[url("imgs/hero.png")]
          bg-no-repeat bg-cover mask-no-repeat mask-contain relative p-4'
        >

          {/* Logo Inside Hero Banner */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.18 }
              }
            }}
            className='flex gap-5 items-center h-20 p-3 bg-black/25 backdrop-blur-[3px] w-max rounded-2xl'
          >
            {imgLogo.map((img, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.75 },
                  show: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.18, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className='h-15 aspect-square cursor-pointer'
                onClick={() => window.open(img.loc)}
              >
                <img
                  src={img.url}
                  alt={img.name}
                  className='h-full w-full object-cover rounded-xl'
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Paragraph Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className='w-1/2 h-2/6 absolute bottom-20 pt-8 flex flex-col gap-4 p-4'
        >
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-6xl text-black font-Aldo'
          >
            Computer Society of India
          </motion.h1>

          {/* Type js */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='text-xl'
          >
            <TypedParagraphAuto
              strings={[
                "The Indian computer industry is represented by the Computer Society of India. A small group of computer professionals founded it on March 6th, 1965, and it has since expanded to become the national organization that represents computer experts. It has 100,000 members, 511 student clubs, and 72 chapters spread around across India.",
                "The Computer Society of India is a nonprofit organization that brings together professionals to discuss ideas and share opinions. The Computer Society of India is a nonprofit organization that brings together professionals to discuss ideas and exchange opinions. Members from a wide range of fields are dedicated to advancing the theory and methods of computer engineering and technology system, science and engineering, information processing, and associated arts and sciences."
              ]}
              typeSpeed={15}
              backSpeed={15}
              backDelay={2800}
              loop={true}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLLER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='mb-10'
      >
        <ScrollVelocity
          texts={['CSI CHITKARA', 'STUDENT CHAPTER']}
          velocity={velocity}
          className=""
        />
      </motion.div>

      {/* Bottom Section */}
      <div className='starterDiv z-10 py-4 px-8'>
        <div className='flex justify-between w-full'>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>Random</p>
          </motion.div>

          {/* CircularText (if needed) */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <CircularText
              text="CSI*STUDENT*CHAPTER*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class"
            />
          </motion.div> */}
        </div>
      </div>

    </motion.div>
  );
}
