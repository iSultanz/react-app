import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="bg-gray-200 max-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="ml-auto">
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            height="32"
            width="32"
            alt="Flowbite Logo"
          />
        </div>
      </div>
    </main>
  );
}
