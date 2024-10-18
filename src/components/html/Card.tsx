import { CustomButton } from "./Button";

export default function Card() {
  return (
    <div>


    <CustomButton variants="primary" onClick={() => console.log("Clicked on card component")}>
       Save
    </CustomButton>


    </div>
  )
}
