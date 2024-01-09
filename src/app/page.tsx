"use client";
import { CodeTag } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const navigate = useRouter();
  const fullName = "Allan Kevin Scain";

  return (
    <main className="h-screen w-screen">
      <section className="relative w-screen h-[75vh]">
        <div className="absolute flex flex-row w-full h-full z-[-1]">
          <Image
            className="w-auto h-auto"
            src="https://media1.tenor.com/m/Z_Ah8rkdZ4YAAAAC/walking-code.gif"
            alt="my-gif"
            width={500}
            height={500}
            blurDataURL="/error.jpg"
            placeholder="blur"
            priority
            quality={100}
          />
          <div className="bg-black w-full h-full" />
        </div>
        <div className="flex flex-col gap-8 px-[5%] pt-[5%] lg:px-[20%]">
          <h1 className="text-[#F3EDE9] tracking-widest text-3xl lg:text-6xl">
            {fullName.split("").map((letter, index) => (
              <p
                key={`${index}-${letter}`}
                className="inline hover:uppercase hover:text-green-700"
              >
                {letter}
              </p>
            ))}
          </h1>
          <CodeTag>
            &lt;html&gt;
            <br />
            &nbsp;&lt;body&gt;
            <br />
            &nbsp;&nbsp;&lt;div id=&quot;miDiv&quot;&gt;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&lt;script&gt;
            <br />
            &nbsp;&nbsp;&nbsp;var miDiv =
            document.getElementById(&quot;miDiv&quot;);
            <br />
            &nbsp;&nbsp;&nbsp;miDiv.innerHTML =&nbsp;
            <a
              className="hover:text-green-500 hover:cursor-pointer"
              href="/teste"
            >
              &quot;&lt;p&gt;Desenvolvedor Full Stack!&lt;/p&gt;&quot;;
            </a>
            <br />
            &nbsp;&nbsp;&lt;/script&gt;
            <br />
            &nbsp;&lt;/body&gt;
            <br />
            &lt;/html&gt;
            <br />
          </CodeTag>
          <button
            className="w-40 bg-green-800 rounded-lg py-2 px-4 font-thin text-white transition-all hover:bg-zinc-800/30 hover:ring-[1px] hover:ring-green-700 hover:font-bold"
            onClick={() => navigate.push("/explore")}
          >
            Explore
          </button>
        </div>
      </section>
      <div className="w-full h-[25vh] bg-gradient-to-b from-black to-gray-900"></div>
    </main>
  );
}
