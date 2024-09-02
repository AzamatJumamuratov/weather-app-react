import Title from "../Leaf Components/Title";
import Creator from "./Creator/Creator";

export default function Header() {
  return (
    <header className="p-8 max-[695px]:px-0 max-[695px]:pt-8">
      <div className="wrapper flex justify-center items-center gap-8 flex-wrap max-[624px]:gap-2">
        <Title type="h1">Weather App by</Title>
        <Creator />
      </div>
    </header>
  );
}
