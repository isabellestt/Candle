import './Header.css'
import candlingLogo from '../../../assets/candling-logo.png'

export function Header() {
  return (
    <nav>
      {/* landing-header */}
      <div className="flex justify-between items-center mb-[150px] p-[48px]">
        {/* Logo */}
        <img
          className="logo"
          src={candlingLogo}
          alt="candling-logo"
        />
        {/* build-with-vapi */}
        <span className="build-with-vapi">#BuildwithVapi</span>
      </div>
    </nav>
  )
}
