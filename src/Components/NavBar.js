'use client'

import React from 'react'
import Link from 'next/link'
import { GithubIcon, FacebookIcon, TwitterIcon, LinkedInIcon } from './Icons.js'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = '' }) => {
  return (
    <Link href={href} className={`group ${className}`}>
      {title}
      <span className="h-[1px] inline-block w-0 group-hover:w-full bg-red-700 shadow-neon absolute left-0 -bottom-0.5 transition-[width] ease duration-300">
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className="px-4 md:px-32 py-4 md:py-10 font-medium flex flex-col md:flex-row items-center justify-between">
      <nav className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
        <CustomLink
          href="#Home "
          title="Home"
          className="relative mb-4 md:mb-0"
        />

        <CustomLink
          href="#Sobre"
          title="Sobre"
          className="relative mb-4 md:mb-0"
        />
        <CustomLink
          href="#Projetos"
          title="Projetos"
          className="relative mb-4 md:mb-0"
        />
        <CustomLink
          title="Contato"
          href="#Contato"
          className="relative mb-4 md:mb-0"
        />
      </nav>

      <nav className="flex space-x-4 mt-4">
        <motion.a
          href="https://twitter.com/UniEVANGELICA"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/company/ftt-unievangelica?originalSubdomain=br"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/company/ftt-unievangelica?originalSubdomain=br"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://pt-br.facebook.com/fttunievangelica/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 mx-3"
        >
          <FacebookIcon />
        </motion.a>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]"></div>
    </header>
  )
}

export default NavBar
