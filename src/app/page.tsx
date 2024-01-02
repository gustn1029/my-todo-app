'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
        <div className="w-full h-[100vh] grid place-items-center">
          <button className="block w-[200px] h-[50px] rounded-xl shadow-md bg-slate-500 text-white hover:bg-slate-800" onClick={()=>router.push('/todo')}>Go To Todo</button>
        </div>
  );
}
