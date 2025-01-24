import Link from "next/link";

import { CodeTag } from "@/components";

export const FullStackDevCodeTag = () => {
  return (
    <CodeTag>
      &lt;html&gt;
      <br />
      &nbsp;&lt;body&gt;
      <br />
      &nbsp;&nbsp;&lt;div id=&quot;myDiv&quot;&gt;&lt;/div&gt;
      <br />
      &nbsp;&nbsp;&lt;script&gt;
      <br />
      &nbsp;&nbsp;&nbsp;var myDiv = document.getElementById(&quot;myDiv&quot;);
      <br />
      &nbsp;&nbsp;&nbsp;myDiv.innerHTML =&nbsp;
      <Link
        className="hover:text-title-primary-color hover:cursor-pointer"
        href="/"
      >
        &quot;&lt;p&gt;Desenvolvedor Full Stack!&lt;/p&gt;&quot;;
      </Link>
      <br />
      &nbsp;&nbsp;&lt;/script&gt;
      <br />
      &nbsp;&lt;/body&gt;
      <br />
      &lt;/html&gt;
    </CodeTag>
  );
};
