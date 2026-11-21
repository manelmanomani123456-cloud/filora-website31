import { AlertCircle, ChevronDown } from "lucide-react";
import { useId, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const control = cn(
  "w-full rounded-md border border-rouge/25 bg-white px-4 text-body text-ink",
  "placeholder:text-ink/45 transition-colors duration-200",
  "hover:border-rouge/50 focus:border-rouge focus:outline-none focus-visible:ring-2 focus-visible:ring-rose",
  "aria-[invalid=true]:border-rouge aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-rose",
  "disabled:cursor-not-allowed disabled:bg-peach/50 disabled:opacity-60",
);

type FieldProps = {
  label?: string;
  hint?: string;
  error?: string;
};

/** Label, control slot, hint and error message. Used by Input, Textarea and Select. */
function Field({ id, label, hint, error, children }: FieldProps & { id: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="font-heading text-small font-bold text-rouge">
          {label}
        </label>
      )}
      {children}
      {error ? (
        <p id={`${id}-msg`} role="alert" className="flex items-center gap-1.5 text-small text-rouge">
          <AlertCircle size={16} aria-hidden="true" />
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-msg`} className="text-small text-ink/65">
            {hint}
          </p>
        )
      )}
    </div>
  );
}

const describedBy = (id: string, f: FieldProps) => (f.error || f.hint ? `${id}-msg` : undefined);

export function Input({
  label,
  hint,
  error,
  iconStart,
  className,
  id,
  ...props
}: Omit<ComponentProps<"input">, "id"> & FieldProps & { id?: string; iconStart?: ReactNode }) {
  const uid = useId();
  const fid = id ?? uid;
  return (
    <Field id={fid} label={label} hint={hint} error={error}>
      <div className="relative">
        {iconStart && (
          <span className="pointer-events-none absolute inset-y-0 start-4 flex items-center text-rouge/70">
            {iconStart}
          </span>
        )}
        <input
          id={fid}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(fid, { hint, error })}
          className={cn(control, "h-11", iconStart ? "ps-11" : undefined, className)}
          {...props}
        />
      </div>
    </Field>
  );
}

export function Textarea({
  label,
  hint,
  error,
  className,
  id,
  ...props
}: Omit<ComponentProps<"textarea">, "id"> & FieldProps & { id?: string }) {
  const uid = useId();
  const fid = id ?? uid;
  return (
    <Field id={fid} label={label} hint={hint} error={error}>
      <textarea
        id={fid}
        rows={4}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(fid, { hint, error })}
        className={cn(control, "py-3", className)}
        {...props}
      />
    </Field>
  );
}

export function Select({
  label,
  hint,
  error,
  className,
  id,
  children,
  ...props
}: Omit<ComponentProps<"select">, "id"> & FieldProps & { id?: string }) {
  const uid = useId();
  const fid = id ?? uid;
  return (
    <Field id={fid} label={label} hint={hint} error={error}>
      <div className="relative">
        <select
          id={fid}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(fid, { hint, error })}
          className={cn(control, "h-11 appearance-none pe-10", className)}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 end-4 my-auto text-rouge/70"
        />
      </div>
    </Field>
  );
}
