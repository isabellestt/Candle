import chevron from "../../../../src/assets/chevron-right-black.svg";

type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return (
    <button className="inline-flex items-center gap-0 bg-[#FF9C25] border-4 rounded-xl px-[14px] py-[11px] hover:cursor-pointer">
      <div className="font-extrabold text-[16px] tracking-[-0.5px] text-black whitespace-nowrap">
        {text}
      </div>
      <img src={chevron} alt="Button to demo page" />
    </button>
  );
}

export default Button;
