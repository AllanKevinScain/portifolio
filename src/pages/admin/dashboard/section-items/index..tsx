import { EmptyState, Text } from '@/components';
import { Link } from 'react-router';
import { Item } from './item';

interface SectionItemsProps {
  name: string;
  urlNavigate: '/projects' | '/technologies' | '/differentials' | '/works';
  items: { id: string; name: string; description: string }[];
}

export function SectionItems(props: SectionItemsProps) {
  const { name, items = [], urlNavigate } = props;

  return (
    <>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 h-100 w-200 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <Text variant="h2" className="mb-14 font-extrabold sm:text-4xl">
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
