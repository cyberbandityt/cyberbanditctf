
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const skills = document.querySelector('#skills')

const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const skillsContent = document.querySelector('#skills-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '400px',
    height: '400px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    mount: aboutContent,
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '400px',
    height: '400px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    mount: contactContent,
  })
})

skills.addEventListener('click', () => {
  const skillsBox = new WinBox({
    title: 'My skills',
    width: '400px',
    height: '400px',
    top:50,
    right:50,
    left:50,
    x: "center",
    y: "center",
    mount: skillsContent,
  })
})
