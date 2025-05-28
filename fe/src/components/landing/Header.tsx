import candlingLogo from '../../assets/candling-logo.png'

export function Header() {
  return (
    <nav>
      {/* landing-header */}
      <div className="landing-header p-[48px] flex justify-between mb-[150px]">
        {/* Logo */}
        <img
          className="logo h-[26px]"
          src={candlingLogo}
          alt="candling-logo"
        />
        {/* build-with-vapi */}
        <span className="build-with-vapi text-[20px] font-normal tracking-[0.03px] z-[1]">#BuildwithVapi</span>
      </div>
    </nav>
  )
}
