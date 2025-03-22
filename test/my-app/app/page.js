import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Navbar */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex items-center px-4">
          <h1 className="text-xl font-medium text-blue-600">OZUMI YASHODA</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-700 ml-4">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Commission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Me
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Logo Section */}
      <div className="text-center mt-8">
        <Image
          src="/logo.png"
          alt="Ozumi Yashoda Logo"
          width={80}
          height={80}
          className="mx-auto h-20"
        />
        {/* <h2 className="text-2xl font-semibold text-blue-700 mt-2">Ozumi yashoda</h2> */}
      </div>

      {/* Hero Section */}
      <section className="bg-[#D1E7DD] text-center mx-4 md:mx-auto mt-6 p-6 rounded-lg relative">
        <h2 className="text-2xl text-black font-bold">Hey there! Welcome to my website!</h2>
        <p className="text-gray-800 mt-4">
          I'm Ozumi Yashoda, a friendly and creative graphic designer. I'm all about building a community
          and helping new VTubers shine in the virtual world. Join me on this exciting journey of creativity
          and support, where we'll bring your virtual persona to life and create an amazing community together!
          <span className="ml-1">🤔</span>
        </p>
      </section>

      <div className="bg-white flex justify-center items-center p-2">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl text-black font-bold text-center mb-6">Silver Package</h2>
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-white">
                <th className="border border-gray-300 text-black px-4 py-2">#</th>
                <th className="border border-gray-300 text-black px-4 py-2">Silver</th>
                <th className="border border-gray-300 text-black px-4 py-2">Min</th>
                <th className="border border-gray-300 text-black px-4 py-2">Max</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, type: 'Half Body', min: '$550', max: '$800' },
                { id: 2, type: 'Half Body with Rigging', min: '$700', max: '$900' },
                { id: 3, type: 'Full Body', min: '$650', max: '$1050' },
                { id: 4, type: 'Full Body With Rigging', min: '$750', max: '$1100' },
              ].map((row, index) => (
                <tr key={row.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.id}</td>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.type}</td>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.min}</td>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white flex justify-center items-center p-2">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl text-black font-bold text-center mb-6">Gold Package</h2>
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-white">
                <th className="border border-gray-300 text-black px-4 py-2">#</th>
                <th className="border border-gray-300 text-black px-4 py-2">Gold</th>
                <th className="border border-gray-300 text-black px-4 py-2">Min</th>
                <th className="border border-gray-300 text-black px-4 py-2">Max</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, type: 'Half Body', min: '$550', max: '$800' },
                { id: 2, type: 'Half Body with Rigging', min: '$700', max: '$900' },
                { id: 3, type: 'Full Body', min: '$650', max: '$1050' },
                { id: 4, type: 'Full Body With Rigging', min: '$750', max: '$1100' },
              ].map((row, index) => (
                <tr key={row.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.id}</td>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.type}</td>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.min}</td>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white flex justify-center items-center p-2">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl text-black font-bold text-center mb-6">Platinum Package</h2>
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-white">
                <th className="border border-gray-300 text-black px-4 py-2">#</th>
                <th className="border border-gray-300 text-black px-4 py-2">Platinum</th>
                <th className="border border-gray-300 text-black px-4 py-2">Min</th>
                <th className="border border-gray-300 text-black px-4 py-2">Max</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, type: 'Half Body', min: '$550', max: '$800' },
                { id: 2, type: 'Half Body with Rigging', min: '$700', max: '$900' },
                { id: 3, type: 'Full Body', min: '$650', max: '$1050' },
                { id: 4, type: 'Full Body With Rigging', min: '$750', max: '$1100' },
              ].map((row, index) => (
                <tr key={row.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.id}</td>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.type}</td>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.min}</td>
                  <td className="border border-gray-300 text-black px-4 py-2">{row.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Art Examples Section */}
      <section id="art-examples" className="p-8 bg-white shadow-lg my-4 mx-4 rounded-lg">
        <h2 className="text-5xl text-black font-bold text-center mb-6">My Art Exmaples</h2>

        {/* 2D VTuber Models */}
        <div className="mb-6">
          <h3 className="text-4xl font-medium text-center text-black">2D VTuber Models</h3>
          <div className="min-h-screen bg-white flex justify-center items-center p-3">
            <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
              {/* Frame 1 */}
              <div className="border-2 border-gray-300 p-4 flex justify-center items-center bg-white shadow-lg rounded-lg">
                <Image
                  src="/banimage1.jpg"
                  alt="Image 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Frame 2 */}
              <div className="border-2 border-gray-300 p-4 flex justify-center items-center bg-white shadow-lg rounded-lg">
                <Image
                  src="/banimage2.jpg"
                  alt="Image 2"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Frame 3 */}
              <div className="border-2 border-gray-300 p-4 flex justify-center items-center bg-white shadow-lg rounded-lg">
                <Image
                  src="/banimage3.jpg"
                  alt="Image 3"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3D VTUBER MODELS */}
        <div className="mb-6">
          <h3 className="text-4xl font-medium text-center text-black">3D VTUBER MODELS</h3>
          <div className="min-h-screen bg-white flex justify-center items-center p-3">
            <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
              {/* Frame 1 */}
              <div className="border-2 border-gray-300 p-4 flex justify-center items-center bg-white shadow-lg rounded-lg">
                <Image
                  src="/banimage1.jpg"
                  alt="Image 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Frame 2 */}
              <div className="border-2 border-gray-300 p-4 flex justify-center items-center bg-white shadow-lg rounded-lg">
                <Image
                  src="/banimage2.jpg"
                  alt="Image 2"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Frame 3 */}
              <div className="border-2 border-gray-300 p-4 flex justify-center items-center bg-white shadow-lg rounded-lg">
                <Image
                  src="/banimage3.jpg"
                  alt="Image 3"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-4xl font-medium text-center text-black">- ILLUSTRATION - </h3>
        <div className="border-2 border-gray-300 p-4 flex justify-center items-center bg-white shadow-lg rounded-lg">
          <Image
            src="/illus.jpg"
            alt="Image 2"
            width={800}
            height={600}
            className="max-h-3xl w-full object-cover"
          />
        </div>
      </section>

      <div className="mb-6">
        <h3 className="text-4xl font-medium text-center text-black mt-6">3D VTUBER MODELS</h3>
        <div className="min-h-screen bg-white flex justify-center items-center p-3">
          <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
            {/* Frame 1 */}
            <div className="border-2 border-gray-300 p-4 flex justify-center items-center bg-white shadow-lg rounded-lg">
              <Image
                src="/comic1.jpg"
                alt="Image 1"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Frame 2 */}
            <div className="border-2 border-gray-300 p-4 flex justify-center items-center bg-white shadow-lg rounded-lg">
              <Image
                src="/comic2.jpg"
                alt="Image 2"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Frame 3 */}
            <div className="border-2 border-gray-300 p-4 flex justify-center items-center bg-white shadow-lg rounded-lg">
              <Image
                src="/comic3.jpg"
                alt="Image 3"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center mt-8">
        <p>店名: Ozumi Yashoda</p>
        <p>Art Gallery</p>
      </footer>
    </div>
  );
}
