import { EmptyState, Text } from "@/components";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
import { Item } from "./item";

interface SectionItemsProps {
  name: string;
  urlNavigate: "/projects" | "/technologies" | "/differentials" | "/works";
  items: { id: string; name: string; description: string }[];
}

export function SectionItems(props: SectionItemsProps) {
  const { name, items = [], urlNavigate } = props;

  return (
    <>
      <div className="absolute inset-0 -z-10">
        <div
          className={twMerge(
            "absolute left-1/2 -translate-x-1/2 top-0",
            "w-200 h-100",
            "bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]",
            "blur-[140px]",
            "rounded-full",
          )}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <Text variant="h2" className="mb-14 sm:text-4xl font-extrabold">
          {name}
        </Text>

        <ul className="flex w-full flex-col">
          {items.length !== 0 &&
            items.map((i, index) => (
              <Link key={i.id} to={`${urlNavigate}/${i.id}`}>
                <Item index={index} {...i} />
              </Link>
            ))}

          {items.length === 0 && (
            <EmptyState description="Nenhuma habilidade cadastrada!" />
          )}
        </ul>
      </div>
    </>
  );
}
