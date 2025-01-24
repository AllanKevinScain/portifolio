import { CodeTag } from "@/components";

export const Logo = () => {
  return (
    <div className="flex flex-row gap-4">
      <img
        className="h-8 w-auto bg-boxes-secondary-background p-1 rounded-lg"
        src="/code_icon.png"
        alt="Your Company"
      />
      <CodeTag className="py-1">
        <p>Allan Kevin Scain</p>
      </CodeTag>
    </div>
  );
};
