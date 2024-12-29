import { InfoIcon } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface InfoProps {
  children: ReactNode;
}

// Server component version of Info
function Info({ children }: InfoProps): ReactNode {
  return (
    <div className="group relative inline-block">
      <InfoIcon className="size-4 cursor-help" />
      <div className="invisible absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 transform rounded-md bg-fd-popover p-4 text-sm opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100">
        <div className="prose max-h-[400px] min-w-[220px] max-w-[400px] overflow-auto text-sm prose-no-margin">
          {children}
        </div>
      </div>
    </div>
  );
}

interface ObjectType {
  description?: ReactNode;
  type: string;
  typeDescription?: ReactNode;
  typeDescriptionLink?: string;
  default?: string;
}

// Helper function for class names
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// Constants for styling
const FIELD_CLASS = 'inline-flex flex-row items-center gap-1';
const CODE_BASE_CLASS = 'rounded-md bg-fd-secondary p-1 text-fd-secondary-foreground';
const CODE_PRIMARY_CLASS = 'bg-fd-primary/10 text-fd-primary';

export function TypeTable({ type }: { type: Record<string, ObjectType> }) {
  return (
    <div className="prose my-6 overflow-auto prose-no-margin">
      <table className="whitespace-nowrap text-sm text-fd-muted-foreground">
        <thead>
          <tr>
            <th className="w-[45%]">Prop</th>
            <th className="w-[30%]">Type</th>
            <th className="w-1/4">Default</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(type).map(([key, value]) => (
            <tr key={key}>
              <td>
                <div className={FIELD_CLASS}>
                  <code className={cn(CODE_BASE_CLASS, CODE_PRIMARY_CLASS)}>
                    {key}
                  </code>
                  {value.description ? <Info>{value.description}</Info> : null}
                </div>
              </td>
              <td>
                <div className={FIELD_CLASS}>
                  <code className={CODE_BASE_CLASS}>{value.type}</code>
                  {value.typeDescription ? (
                    <Info>{value.typeDescription}</Info>
                  ) : null}
                  {value.typeDescriptionLink ? (
                    <Link href={value.typeDescriptionLink}>
                      <InfoIcon className="size-4" />
                    </Link>
                  ) : null}
                </div>
              </td>
              <td>
                {value.default ? (
                  <code className={CODE_BASE_CLASS}>{value.default}</code>
                ) : (
                  <span>-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}