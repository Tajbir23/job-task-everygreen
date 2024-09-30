

const Subscribe = () => {
  return (
    <div className="my-10">
        <h1 className="font-roboto font-bold text-5xl text-green-700 mb-10">learn more about<br />
        web sustainability?</h1>

        <div className="px-16 py-10 border flex flex-col gap-5 mx-14 rounded-xl shadow-[0px_0px_30px_15px_#cbd5e0]">
            <h1 className="text-3xl font-semibold text-green-600">join the greenWeb newsletter</h1>
            <form className="flex gap-5">
                <input type="email" className="py-2 px-8 border w-full bg-slate-100 rounded-full" placeholder="your email address" />
                <button className="bg-black text-white px-8 py-2 flex items-center justify-center m-auto gap-2 rounded-full border-[2px] border-white shadow-[0px_0px_10px_2px_#38a169] hover:bg-green-800 font-bold hover:border-green-800">
             Subscribe
          </button>
            </form>
            <p className="text-gray-500 text-left">The greenWeb team will send you occasional updates on web accessibility and sustainability. There will be no spam, only high-quality information.</p>
        </div>
    </div>
  )
}

export default Subscribe