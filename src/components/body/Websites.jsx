


const Websites = () => {
  return (
    <div>
        <h1 className="font-roboto font-bold text-3xl sm:text-4xl md:text-5xl text-green-700">sustainable <br />
        example websites</h1>

        <div className="grid md:grid-cols-2 m-auto gap-14 mx-10 my-16">
            <div>
              <img className="shadow-xl m-auto" src="https://everythinggreen.org/assets/google-0effc151.png" alt="Website 1" />
              <div className="mt-5">
                <h2 className="font-bold text-green-800 text-xl">Google</h2>
                <p className="text-lg text-green-800 ">0.26gm/per visit</p>
              </div>
            </div>
            
            <div>
              <img className="shadow-xl m-auto" src="https://everythinggreen.org/assets/facebook-cdaf40bf.png" alt="Website 1" />
              <div className="mt-5">
                <h2 className="font-bold text-green-800 text-xl">Facebook</h2>
                <p className="text-lg text-green-800 ">0.21gm/per visit</p>
              </div>
            </div>
            
            <div>
              <img className="shadow-xl m-auto" src="https://everythinggreen.org/assets/alphabet-2dd8e6ce.png" alt="Website 1" />
              <div className="mt-5">
                <h2 className="font-bold text-green-800 text-xl">Alphabet</h2>
                <p className="text-lg text-green-800 ">0.094gm/per visit</p>
              </div>
            </div>
            
            <div>
              <img className="shadow-xl m-auto" src="https://everythinggreen.org/assets/red-inc-e83de883.png" alt="Website 1" />
              <div className="mt-5">
                <h2 className="font-bold text-green-800 text-xl">Red-Inc</h2>
                <p className="text-lg text-green-800 ">0.230gm/per visit</p>
              </div>
            </div>
            
        </div>

    </div>
  )
}

export default Websites