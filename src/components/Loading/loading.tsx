import { Skeleton } from "@/components/ui/skeleton";
import { MoonLoader } from "react-spinners";

export function LoadingSkeleton() {
  return (
    <section className="ml-5">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </section>
  );
};

export function LoadingSpinner() {
  return (
    <section className="w-full flex justify-center items-center">
      <MoonLoader size={40} />
    </section>
  )
}