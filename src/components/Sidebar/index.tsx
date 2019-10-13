import React from 'react'
import styles from './styles.module.scss'

export const SideBare = ((props: any) => (props: any) => {

  return (
    <div className={`${styles.sidebar} `}>

    </div>
  )
})({
  sections: [{
    title: 'now playing',
    items: []
  }, {
    title: 'on TV',
    items: []
  }, {
    title: 'coming soon',
    items: []
  }]
});
