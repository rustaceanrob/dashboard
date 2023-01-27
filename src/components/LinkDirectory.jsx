import React from 'react'
import { GrHadoop } from 'react-icons/gr'
import { SiAmazonaws, SiAwsamplify, SiVuedotjs,
    SiGmail, SiFirebase, SiGooglecloud, SiStackoverflow, SiApachespark,
    SiGooglecolab, SiReact, SiGithub, SiLinkedin, SiElectron, SiHeroku,
    SiYoutube ,SiGooglemeet, SiZoom, SiTailwindcss, SiTensorflow, SiPytorch,
    SiPandas, SiScikitlearn, SiBootstrap, SiAngularjs, SiTwitter ,SiNuxtdotjs} from 'react-icons/si'

export default function LinkDirectory() {
  return (
        <div className='text-white flex  md:flex col-span-3 justify-center items-center'>
            <a href='https://aws.amazon.com/console/' target="_blank"><SiAmazonaws size={30} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://aws.amazon.com/amplify/' target="_blank"><SiAwsamplify size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://firebase.google.com/docs' target="_blank"><SiFirebase size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://hadoop.apache.org/docs/stable/' target="_blank"><GrHadoop size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 xl:flex hidden"/></a>
            <a href='https://spark.apache.org/docs/latest/' target="_blank"><SiApachespark size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 xl:flex hidden"/></a>
            <a href='https://cloud.google.com/' target="_blank"><SiGooglecloud size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://colab.research.google.com/' target="_blank"><SiGooglecolab size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://www.tensorflow.org/api_docs' target="_blank"><SiTensorflow size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://pytorch.org/docs/stable/index.html' target="_blank"><SiPytorch size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://pandas.pydata.org/docs/' target="_blank"><SiPandas size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 lg:flex hidden"/></a>
            <a href='https://scikit-learn.org/stable/modules/classes.html' target="_blank"><SiScikitlearn size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 lg:flex hidden"/></a>
            <a href='https://reactjs.org/docs/getting-started.html' target="_blank"><SiReact size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://www.electronjs.org/docs/latest/' target="_blank"><SiElectron size={30} className="m-2 cursor-pointer hover:scale-110 duration-100 lg:flex hidden"/></a>
            <a href='https://docs.angularjs.org/guide' target="_blank"><SiAngularjs size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 lg:flex hidden"/></a>
            <a href='https://nuxtjs.org/docs/get-started/installation' target="_blank"><SiNuxtdotjs size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 lg:flex hidden"/></a>
            <a href='https://v2.tailwindcss.com/docs' target="_blank"><SiTailwindcss size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 lg:flex hidden"/></a>
            <a href='https://getbootstrap.com/docs/4.1/getting-started/introduction/' target="_blank"><SiBootstrap size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 lg:flex hidden"/></a>
            <a href='https://vuejs.org/guide/introduction.html' target="_blank"><SiVuedotjs size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://stackoverflow.com/' target="_blank"><SiStackoverflow size={25} className="m-2 cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://dashboard.heroku.com/' target="_blank"><SiHeroku size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 xl:flex hidden"/></a>
            <a href='https://github.com/' target="_blank"><SiGithub size={25} className="m-2 cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://twitter.com/?lang=en' target="_blank"><SiTwitter size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://www.linkedin.com/feed/' target="_blank"><SiLinkedin size={25} className="m-2 cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://www.youtube.com/' target="_blank"><SiYoutube size={25} className="m-2 cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://meet.google.com/' target="_blank"><SiGooglemeet size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
            <a href='https://zoom.us/' target="_blank"><SiZoom size={25} className="m-2 cursor-pointer hover:scale-110 duration-100"/></a>
            <a href='https://mail.google.com/' target="_blank"><SiGmail size={25} className="m-2 cursor-pointer hover:scale-110 duration-100 md:flex hidden"/></a>
        </div>
  )
}
