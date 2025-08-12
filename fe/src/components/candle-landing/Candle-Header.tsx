import candleLogo from "../../assets/candle-logo.svg";
import phone from "../../assets/landing-phone-mockup.svg";
import cardImg1 from "../../assets/card-img-1.png";
import cardImg2 from "../../assets/card-img-2.png";
import cardImg3 from "../../assets/card-img-3.png";
import { useState } from "react";
import { Link } from "react-router";
import Button from "./alt-components/Button";

export function CandleHeader() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  let nextCardID = 1;
  let nextButtonID = 1;

  const cards = [
    {
      id: nextCardID++,
      header: "Always By Your Side.",
      body: "Think of Candle as your non-judgmental best friend who’s available 24/7, even when everyone else is asleep.",
      image: cardImg1,
      imageAlt:
        "A young man wearing glasses and headphones looks at his smartphone while a green speech bubble with message lines appears nearby, indicating he is engaged in text messaging or chat communication.",
      background: "#6366F1",
      textCol: "text-white",
    },
    {
      id: nextCardID++,
      header: "Safe & Private.",
      body: `We know trust is a big deal. Your personal chats with Candle are private. We don’t show them to others, and you stay anonymous.`,
      image: cardImg2,
      imageAlt:
        "Two encrypted message bubbles, one blue and one green. Each secured with a padlock icon, connected by a dotted line to illustrate secure, end-to-end encrypted messaging between users.",
      background: "#14B8A6",
      textCol: "text-white",
    },
    {
      id: nextCardID++,
      header: "Support For No Cost.",
      body: "Take our demo for a spin and sign up for longer conversations and greater personalisation, its all free.",
      image: cardImg3,
      imageAlt:
        "A blue hand icon pointing at and touching an orange phone interface on a mobile device screen, demonstrating user interaction with our instant calling feature.",
      background: "#6366F1",
      textCol: "text-white",
    },
  ];

  const buttons = [
    { id: nextButtonID++, text: "Talk to Candle" },
    { id: nextButtonID++, text: "Try our Preview" },
    { id: nextButtonID++, text: "Join the Mailing List" },
  ];

  const cardList = cards.map((card) => (
    <Card
      key={card.id}
      header={card.header}
      body={card.body}
      image={card.image}
      imageAlt={card.imageAlt}
      background={card.background}
      textCol={card.textCol}
    ></Card>
  ));

  type CardProps = {
    header: string;
    body: string;
    image: string;
    imageAlt: string;
    background: string;
    textCol: string;
  };

  function Card({
    header,
    body,
    image,
    imageAlt,
    background,
    textCol,
  }: CardProps) {
    return (
      <div className="flex items-center flex-col gap-[20px] border-3 rounded-[36px] px-[42px] py-[30px] w-90">
        <h2
          className={`text-2xl font-bold text-center border-3 border-black rounded-[5px] px-[12px] py-[3px] bg-[${background}] ${textCol}`}
        >
          {header}
        </h2>
        <p className="text-center text-lg  mb-[24px]">{body}</p>
        <img src={image} alt={imageAlt} />
      </div>
    );
  }

  function getFormData(formData: FormData): void {
    const submitted = Object.fromEntries(formData);
    console.log(submitted);
    setIsSubmitted(true);
  }

  return (
    <>
      <section
        id="altLanding"
        className="bg-[#6366F1] py-6 px-8 flex place-content-between"
      >
        <img src={candleLogo} alt="Logo for Candle" />
        <Link to="/candle">
          <Button text={buttons[0].text}></Button>
        </Link>
      </section>
      <main>
        <section className="bg-[#6366F1] text-white text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Your 24/7 AI Friend for Life's Ups and Downs</h1>
          <p className="text-1xl">
            Feeling stressed from exams, fighting with friends, or just bored at 2 AM? Candle is an AI companion who’s always here to listen and chat. No judgements and no pressure, just a friendly voice whenever you need it.
          </p>
        </section>
        <section className="flex items-center">
          <div
            id="wave"
            className="aspect-[960/300] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center"
          >
            <img
              className="rotate-4 scale-85"
              src={phone}
              alt="A smartphone mockup displaying a voice agent app interface with a logo in the top left and 'Login' button in the top right. The main screen features two large action buttons for initiating voice conversations with the two AI agents. Small terms and conditions text appears at the bottom of the interface."
            />
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4 text-center">
            Why Use Candle?
          </h2>
          <section className="flex flex-col items-center gap-8">
            {cardList}
          </section>
        </section>
        <div
          id="wave-flipped"
          className="aspect-[960/300] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center"
        ></div>
        <section className="bg-[#6366F1] flex flex-col items-center pt-4 pb-16">
          <h2 className="text-3xl font-bold text-center mb-4 text-white px-24">
            You're not alone.
          </h2>
          <p className="text-1xl text-center text-white pb-8 px-8">
            1 in 3 youth in Singapore feel similar pressures and emotions. Candle is built specifically for teens, is judgment-free and endlessly patient, so you can truly be yourself while feeling heard and understood.
          </p>
          <Link to="/candle">
            <Button text={buttons[1].text}></Button>
          </Link>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center pt-16">
            Stay in the loop
          </h2>
          <p className="text-1xl text-center p-8">
            We add new features all the time. Find out more and grow together
            with Candle.
          </p>

          {!isSubmitted ? (
            <form
              className="flex flex-col items-center gap-8"
              action={getFormData}
            >
              <label htmlFor="firstName"></label>
              <input
                className="focus:outline-none border-b-2 pb-4 pl-4 w-80 text-xl"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
              />
              <label htmlFor="email"></label>
              <input
                className="focus:outline-none border-b-2 pb-4 pl-4 w-80 text-xl mb-8"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <Button text={buttons[2].text}></Button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4 text-gray-400">
              <strong>Thank you for joining our mailing list.</strong>
            </div>
          )}
        </section>
      </main>
      <section className="bg-white py-16 flex flex-col gap-4 items-center  text-sm">
        <img
          className="scale-200 mb-2"
          src={candleLogo}
          alt="Logo for Candle"
        />
        <span>© Candle, Inc.</span>
        <nav className="flex gap-4">
          <Link to="/candle">
            <div>Try Candle</div>
          </Link>
          <a href="#altLanding" onClick={() => alert("To be added!")}>
            Privacy Policy
          </a>
          <a href="#altLanding" onClick={() => alert("To be added!")}>
            Terms of Use
          </a>
        </nav>
      </section>
    </>
  );
}
