import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ChatBot from "@/components/Chatbot";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <ChatBot />
      </div>
    </main>
  );
}
