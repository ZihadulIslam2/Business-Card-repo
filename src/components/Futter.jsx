import { Facebook, Github, Instagram } from 'lucide-react'

const Futter = () => {
  const HandelFacebookClick = () => {
    window.open('https://www.facebook.com', '_blank')
  }
  const HandelGithubClick = () => {
    window.open('https://www.github.com', '_blank')
  }
  const HandelInstagrameClick = () => {
    window.open('https://www.instagram.com', '_blank')
  }

  return (
    <>
      <div className="flex bg-cyan-900 m-0 p-0 ">
        <button onClick={HandelFacebookClick} className="p-8 ">
          <Facebook />
        </button>
        <button onClick={HandelGithubClick} className="p-8">
          <Github />
        </button>
        <button onClick={HandelInstagrameClick} className="p-8">
          <Instagram />
        </button>
      </div>
    </>
  )
}
export default Futter
