import { useEffect, useState } from 'react'
import {
  
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm very ambitious full-stack developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.I was keen in front-end
            tech HTML,CSS,Javascript along with Reactjs and Vuejs framworks, Nodejs
            and Expressjs for server-side rendering and finally MongoDb and firebase 
            for database managament.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.I'm also keen and 
            enthusiastic to learn new tech.
          </p>
          <p>
            If I need to define myself in one sentence that would be a final year student from
            IIT(ISM) who is tech-obsessed and constantly learning new technologies
            and
            currently embracing web developing and web stack building.
          </p>
          <p className='skills'>
            My Skills:

          </p>
          <p>HTML,CSS,Javascript,C++,Java,python,Reactjs,Vuejs,Nodejs,Expressjs,MongoDb,Firebase,api</p>
          <p>Authentication,DSA,Data Visualization,Chai(for Quality assurance),git</p>
        </div>

        
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
