import Image from "next/image";

const Landing = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/assets/basketball.jpg)" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Glass Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-10 max-w-xl w-full text-center text-white shadow-2xl">
          <Image
            src="/images/auth/logo.png"
            alt="Logo"
            width={96}
            height={96}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Coming Soon
          </h1>
          <p className="text-lg md:text-xl">
            We’re working hard to launch our{" "}
            <strong className="text-green-500">KBA</strong>!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
