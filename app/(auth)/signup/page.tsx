import Link from "next/link"
import SignUpForm from "./form"

export const metadata = {
  title: 'Sign Up'
}

export default function SignUp({
  // params,
  searchParams,
}: {
  // params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (<div className="flex rounded-3xl bg-white shadow-xl w-[90%] h-[90%]">
    <div className="rounded-s-3xl bg-gradient-to-b from-[#0CCA9A] to-[#0DCA78] w-[40%] h-full flex flex-col items-start space-y-12 p-8">
      <Link href={`/`} className=" font-bold text-2xl space-s-1"><span className="text-white">{"SEU"}</span><span className="text-[#232323]/70">{"EDU"}</span></Link>
      <div className="grow mx-auto flex flex-col items-center justify-center space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-5xl font-bold">{"Welcome Back!"}</div>
          <hr className="border-b-[3px] border-white w-12" />
          <div className="text-center text-2xl text-white/90">{"To keep connected with us please login with your personal info"}</div>
        </div>
        <Link href="/signin" className="border-2 border-white rounded-full px-12 py-2 font-bold">{"Sign In"}</Link >
      </div>
    </div>
    <div className="rounded-e-3xl w-[60%] h-full p-8 flex flex-col items-center text-[#232323]/70 border-[#232323]/50">
      <div className="grow flex flex-col items-center justify-center space-y-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-5xl font-bold text-[#0DCA78]">{"Create Account"}</div>
          <hr className="border-b-[3px] border-[#0DCA78] w-12" />
          <div className="flex items-center space-s-4">
            <button className="border-2 rounded-full h-12 aspect-square flex items-center justify-center text-xl font-bold">{"f"}</button>
            <button className="border-2 rounded-full h-12 aspect-square flex items-center justify-center text-xl font-bold">{"in"}</button>
            <button className="border-2 rounded-full h-12 aspect-square flex items-center justify-center text-xl font-bold">{"G+"}</button>
          </div>
          <div>{"or use you email for registration"}</div>
          <SignUpForm />
        </div>
      </div>
      <div className="flex items-center space-s-2">
        <Link href={`/privacy-policy`}>{"Privacy policy"}</Link>
        <div className="rounded-full w-2 h-2 bg-[#232323]/70"></div>
        <Link href={`/terms`}>{"Terms & Condetions"}</Link>
      </div>
    </div>
  </div>)
}