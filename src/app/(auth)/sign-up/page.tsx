import Link from 'next/link';
// import { FaGoogle, FaFacebook } from 'react-icons/fa';
import Image from 'next/image';

const SignupPage = () => {
  const sliderImagesUp = [
    '/images/munzarin.svg',
    '/images/ikbalSir.svg',
    '/images/ayman.svg',
    '/images/mashrafe.svg',
    '/images/jemes.svg',
    '/images/mim.svg',
  ];
  const sliderImagesDown = [
    '/images/tahsan.svg',
    '/images/nisho.svg',
    '/images/farhan.svg',
    '/images/mehezabin.svg',
    '/images/jhankar.svg',
  ];

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* ! Image Sliders */}
      <div className="absolute inset-0 flex justify-left overflow-hidden z-0">
        <div className="relative w-1/2 h-full">
          <ImageSlider direction="up" images={sliderImagesUp} />
          <ImageSlider direction="down" images={sliderImagesDown} />

          <div className="pointer-events-none absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10" />

          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </div>
      </div>
      <div className="space-y-2 absolute top-10 left-10 z-20">
        <button><Link href="/" className="text-xl text-slate-600 hover:text-slate-900">
          ← Back to Star Connect
        </Link></button>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl">
          {/* Header */}
          {/* <div className="space-y-2 text-center">
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
              ← Back to Star Connect
            </Link>
            <h1 className="text-4xl font-bold text-slate-900">
              <span className="text-purple-600">STAR</span>CONNECT
            </h1>
            <p className="text-slate-600">Create your free account</p>
          </div> */}

          {/* Social Login */}
          {/* <div className="space-y-4">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-slate-700 transition hover:border-slate-400">
              <FaGoogle className="text-lg" />
              Continue with Google
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-slate-700 transition hover:border-slate-400">
              <FaFacebook className="text-lg" />
              Continue with Facebook
            </button>

            <div className="relative flex items-center">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="mx-4 flex-shrink text-slate-500">or</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>
          </div> */}

          {/* Signup Form */}
          {/* <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your e-mail"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="mb-1 block text-sm font-medium text-slate-700">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="+880 123 45678"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Your password"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 px-4 py-3 font-medium text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            >
              Sign up
            </button>
          </form> */}

          {/* Footer */}
          <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/login" className="text-purple-600 hover:underline">
              Sign in
            </Link>
          </p>
          <p className="text-center text-xs text-slate-500">
            You acknowledge that you read, and agree to our{' '}
            <Link href="/terms" className="text-purple-600 hover:underline">
              Terms of Service
            </Link>{' '}
            and our{' '}
            <Link href="/privacy" className="text-purple-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
};


const ImageSlider = ({ direction, images }: { direction: 'up' | 'down'; images: string[] }) => {
  const allImages = [...images, ...images];
  const isUp = direction === 'up';

  const duration = images.length * 20;
  console.log('duration', duration);

  return (
    //! 56px - 366px = 310px
    //! 366 + 20 = 386px => left-[386px]
    <div className={`absolute h-full overflow-hidden ${isUp ? 'left-14' : 'left-[386px]'}`}>
      <div
        style={{ animationDuration: `${duration}s` }}
        className={`flex flex-col gap-5 animate-vertical-scroll ${isUp ? 'animation-normal' : 'animation-reverse'
          }`}
      >
        {allImages.map((img, index) => (
          <div
            key={index}
            className={`relative  ${index % 2 === 0 ? 'h-[232px]' : 'h-[440px]'} w-[310px]`}
          >
            <Image
              src={img}
              alt={`Slider image ${index + 1}`}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default SignupPage;




// const ImageSlider = ({ direction, images }: { direction: 'up' | 'down'; images: string[] }) => {
//   const allImages = [...images, ...images];
//   const isUp = direction === 'up';

//   const duration = images.length * 10;
//   const durationClass = `duration-${duration}s`;

//   return (
//     // 56px - 366px = 310px
//     //! 366 + 20 = 386px => left-[386px]
//     <div className={`absolute h-full overflow-hidden ${isUp ? 'left-14' : 'left-[386px]'}`}>
//       <div
//         className={`flex flex-col gap-5 animate-vertical-scroll ${isUp ? 'animation-normal' : 'animation-reverse'
//           } ${durationClass}`}
//       >
//         {allImages.map((img, index) => (
//           <div
//             key={index}
//             className={`relative  ${index % 2 === 0 ? 'h-[232px]' : 'h-[440px]'} w-[310px]`}
//           >
//             <Image
//               src={img}
//               alt={`Slider image ${index + 1}`}
//               fill
//               className="object-cover rounded-lg"
//               sizes="(max-width: 768px) 100vw, 50vw"
//               quality={90}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
