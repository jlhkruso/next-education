import { UserValid } from "@/app/ui/sections/userValid/userValid";
import { TextScrollAnimation } from "@/app/ui/sections/textScrollAnimation/textScrollAnimation";
export default function Page() {
  return (
    <>
      <h1>:user-valid</h1>
      <a href="https://codepen.io/web-dot-dev/pen/KKJxpLE" target="_blank">
        Codepen
      </a>
      <p>Valid = green</p>
      <p>Invalid = red</p>
      {<UserValid />}
      <h1>Text scroll animation</h1>
      <a href="https://codepen.io/web-dot-dev/pen/JjxvwqG" target="_blank">
        Codepen
      </a>
      {<TextScrollAnimation />}
    </>
  );
}
