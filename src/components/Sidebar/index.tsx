import React from 'react'
import styles from './styles.module.scss'
import { Accordion } from "../Accordion";
import { MovieSidebarItem } from "../MovieSidebarItem";


export const Sidebar = (props: any) => {
  const { sections } = props;
  return (
    <div className={`${styles.sidebar} flex flex-col md:w-1/4 w-full rounded-2xl`}>
      <div className="p-1.4 hidden md:block">
        <img className="rounded-xl" src="https://image.tmdb.org/t/p/w1066_and_h600_bestv2/2V5RR4Ps1i4x7ifjjDvlmrSYzvL.jpg" alt="" />
      </div>
      <div className="flex-grow text-white overflow-auto md:mb-6">
        <Accordion sections={sections} component={MovieSidebarItem}/>
      </div>
    </div>
  )
};
