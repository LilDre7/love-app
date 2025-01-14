import Image from "next/image";

export default function TheodorBlack() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-5 sm:my-10">
        <div className="aspect-square relative">
          <Image
            src="/image/catlistening.jpg"
            alt="Portrait photo 1"
            fill
            className="object-contain"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/image/bg2.jpg"
            alt="Portrait photo 2"
            fill
            className="object-contain"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/image/bg3.jpg"
            alt="Portrait photo 3"
            fill
            className="object-contain"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/image/bg4.jpeg"
            alt="Portrait photo 1"
            fill
            className="object-contain"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/image/bg5.jpeg"
            alt="Portrait photo 2"
            fill
            className="object-contain"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/image/bg6.jpeg"
            alt="Portrait photo 3"
            fill
            className="object-contain"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/image/bg7.jpeg"
            alt="Portrait photo 1"
            fill
            className="object-contain"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/image/bg8.jpeg"
            alt="Portrait photo 2"
            fill
            className="object-contain"
          />
        </div>
        <div className="aspect-square relative">
          <Image
            src="/image/bg9.jpeg"
            alt="Portrait photo 3"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
