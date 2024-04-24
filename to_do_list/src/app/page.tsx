import Image from "next/image";
import Todo from "@/components/Todo";
import Header from "@/components/Header";

export default function Home() {
  // const navigate = useNavigate()
  // const handleClick=()=>{
  //   navigate("https://github.com/Mansi-bhandari1501")
  // }
  return (
    <div>
      <Header />
      <Todo />
    </div>
  );
}
