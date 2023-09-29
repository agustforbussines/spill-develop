import SpillLogo from '@/component/elements/SpillLogo'
import React from 'react'
import styles from './styles.module.scss'

import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Button from '@/component/elements/Button/component'
import Link from 'next/link'
const LayoutFooter = () => {
  const list = [
    {
      title: 'Spill',
      label: [
        { sub: 'Feature', path: '/' },
        { sub: 'Tentang Kami', path: '/' },
        { sub: 'Artikel', path: '/article' },
        { sub: 'Syarat dan Ketentuan', path: '/' },
      ],
    },
    {
      title: 'Product',
      label: [
        { sub: 'Tulis Review', path: '/' },
        { sub: 'Sarankan Product', path: '/' },
        { sub: 'Product Trending', path: '/' },
      ],
    },
  ]
  return (
    <footer className={styles.footer}>
      <div className="main-container">
        <div className={styles.stack}>
          {list.map((item, index) => (
            <div key={index} className={styles.leftStack}>
              <h1>{item.title}</h1>
              <div>
                {item.label.map((label, index) => (
                  <Link
                    href={label.path}
                    className="text-[#A6A6A6] font-bold text-label-lg"
                    key={index}
                  >
                    {label.sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {/* <div className={styles.sendEmailStack}>
            <div>
              <div className={styles.textWriteEmail}>
                Tulis Emailmu untuk dapatkan Informasi Terbaru
              </div>
              <p>We’ll share brewery news and events</p>
              <div className={styles.stackInputEmail}>
                <input
                  className={styles.inputSendEmail}
                  type="text"
                  placeholder="Your Email here"
                />
                <Button className="w-auto px-4 py-3 md:px-3 md:py-4 rounded-xl">
                  Submit
                </Button>
              </div>
            </div>
          </div> */}
        </div>
        <div className={styles.spillRight}>
          <div className={styles.logo}>
            <SpillLogo multiplySize={0.3} isDark={true} />
          </div>
          <div className={styles.itemsReserved}>
            <div className={styles.copyrights}>
              <p className="text-body-lg text-[#A6A6A6] text-center">
                © 2023 Spill. All Rights Reserved.
              </p>
            </div>
            <div className={styles.stackSosmed}>
              <div>
                <InstagramIcon />
              </div>
              <div>
                <LinkedInIcon />
              </div>
              <div>
                <WhatsAppIcon />
              </div>
              <div>
                <TwitterIcon />
              </div>
              <div>
                <FacebookIcon />
              </div>
              <div>
                <YouTubeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LayoutFooter
