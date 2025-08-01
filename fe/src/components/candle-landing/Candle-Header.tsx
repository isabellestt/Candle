import candleLogo from '../../assets/candle-logo.svg'
import chevron from '../../assets/chevron-right-black.svg'
import phone from '../../assets/landing-phone-mockup.svg'
import cardImg1 from '../../assets/card-img-1.png'
import cardImg2 from '../../assets/card-img-2.png'
import cardImg3 from '../../assets/card-img-3.png'
import { useState } from 'react'

export function CandleHeader() {

  const [isSubmitted, setIsSubmitted] = useState(false)

  let nextCardID = 1;
  let nextButtonID = 1;

  const cards = [
    { id: nextCardID++, header: "Be yourself.", body: "Just a space to chill, rant, cry, curse, overshare, whisper, spiral, whatever helps ✨", image: cardImg1, imageAlt: "A young man wearing glasses and headphones looks at his smartphone while a green speech bubble with message lines appears nearby, indicating he is engaged in text messaging or chat communication.", background: "#7FE56F", textCol: "text-black"},
    { id: nextCardID++, header: "Keep it private.", body: `What you say stays between you and Candle. Nothing’s saved unless you say so. 
And no, we don’t sell your data 💅🏻`, image: cardImg2, imageAlt: "Two encrypted message bubbles, one blue and one green. Each secured with a padlock icon, connected by a dotted line to illustrate secure, end-to-end encrypted messaging between users.", background: "#3E75FA", textCol: "text-white"},
    { id: nextCardID++, header: "Always available.", body: "No app to download (for now). You control when the conversation begins and ends with no pressure and no judgement 🧃", image: cardImg3, imageAlt: "A blue hand icon pointing at and touching an orange phone interface on a mobile device screen, demonstrating user interaction with our instant calling feature.", background: "#FF71DF", textCol: "text-black"},
  ]

  const buttons = [
    { id: nextButtonID++, text: "Talk to Candle", arrow: chevron},
    { id: nextButtonID++, text: "Try our Preview"},
    { id: nextButtonID++, text: "Join the Mailing List"}
  ]

  const cardList = cards.map(card => <Card key={card.id} header={card.header} body={card.body} image={card.image} imageAlt={card.imageAlt} background={card.background} textCol={card.textCol}></Card>)

  type CardProps = {
  header: string;
  body: string;
  image: string;
  imageAlt: string;
  background: string;
  textCol: string;
};

  function Card({header, body, image, imageAlt, background, textCol}: CardProps) {
    return (
      <div className='flex items-center flex-col gap-[20px] border-3 rounded-[36px] px-[42px] py-[30px] w-90'>
      <h2 className={`text-2xl font-bold text-center border-3 border-black rounded-[5px] px-[12px] py-[3px] bg-[${background}] ${textCol}`}>{header}</h2>
      <p className='text-center text-lg  mb-[24px]'>{body}</p>
      <img src={image} alt={imageAlt} />
      </div>
    )
  }

  type ButtonProps = {
  text: string;
};

  function Button({text}: ButtonProps) {
    return(
      <button className='inline-flex items-center gap-0 bg-[#FF9C25] border-4 rounded-xl px-[14px] py-[11px]'>
      <div className='font-extrabold text-[16px] tracking-[-0.5px] text-black whitespace-nowrap'>
        {text}
      </div>
      <img src={chevron} alt="Button to demo page" />
    </button>
    )
  }

  function getFormData(formData: FormData): void {
    const submitted = Object.fromEntries(formData);
    console.log(submitted)
    setIsSubmitted(true)
  }



  return(
    <>
    <section className='bg-[#3E75FA] py-6 px-8 flex place-content-between'>
      <img src={candleLogo} alt="Logo for Candle" />
      <Button text={buttons[0].text}></Button>
    </section>
    <main>
    <section className='bg-[#3E75FA] text-white text-center p-8'>
    <h1 className='text-6xl font-bold mb-4'>Talk it out</h1>
    <p className='text-2xl'>Speak freely with a voice companion that responds without anyone watching, judging, or interrupting.</p>
    </section>
    <section className='flex items-center'>
    <div id='wave' className='aspect-[960/300] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center'>
    <img className='rotate-4 scale-85' src={phone} alt="A smartphone mockup displaying a voice agent app interface with a logo in the top left and 'Login' button in the top right. The main screen features two large action buttons for initiating voice conversations with the two AI agents. Small terms and conditions text appears at the bottom of the interface." />
    </div>
    </section>
    <section>
      <h2 className='text-4xl font-bold mb-4 text-center'>Why Use Candle?</h2>
      <section className='flex flex-col items-center gap-8'>
        {cardList}
      </section>
    </section>
     <div id='wave-flipped' className='aspect-[960/300] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center'>
    </div>
    <section className='bg-[#3E75FA] flex flex-col items-center pt-4 pb-16'>
      <h2 className='text-4xl font-bold mb-4 text-center text-white px-24'>Your space, not ours.</h2>
      <p className='text-2xl text-center text-white p-8'>For when counsellors feel like too much, ChatGPT feels too robotic, and you’ve got intrusive thoughts with no one to share them with.</p>
      <Button text={buttons[1].text}></Button>
    </section>
    <section className='mb-16'>
      <h2 className='text-4xl font-bold mb-4 text-center pt-16'>Stay in the loop</h2>
      <p className='text-2xl text-center p-8'>We add new features all the time. Find out more and grow together with Candle.</p>

      {!isSubmitted ? (
        <form className='flex flex-col items-center gap-8' action={getFormData}>
        <label htmlFor="firstName"></label>
        <input className="focus:outline-none border-b-2 pb-4 pl-4 w-80 text-xl" type="text" id="firstName" name="firstName" placeholder='First Name'/>
        <label htmlFor="email"></label>
        <input className="focus:outline-none border-b-2 pb-4 pl-4 w-80 text-xl mb-8" type="email" id="email" name="email" placeholder='Email'/>
        <Button text={buttons[2].text}></Button>
      </form>
      ):(
        <div className='flex flex-col items-center gap-4 text-gray-400'>
      <strong>Thank you for joining our mailing list.</strong>
        </div>
      )}
      
    </section>
    </main>
    <section className='bg-[#7FE56F] py-16 flex flex-col gap-4 items-center  text-sm'>
      <img className='scale-200 mb-2' src={candleLogo} alt="Logo for Candle" />
      <span>© Candle, Inc.</span>
      <nav className='flex gap-4'>
        <div>Try Candle</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </nav>
    </section>
    </>
  )
}