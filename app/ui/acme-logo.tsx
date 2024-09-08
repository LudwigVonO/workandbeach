import { lusitana } from '@/app/ui/fonts'; 
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src='/logo.png' alt='Parlange logo'width={400} height={100}/>
    </div>
  );
}
