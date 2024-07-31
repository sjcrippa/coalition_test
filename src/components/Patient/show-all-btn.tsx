import { alert } from "@/lib/alert";

export default function ShowAllBtn() {
  return (
    <section className="flex justify-center mx-8 mt-10">
      <button
        onClick={alert}
        className="px-10 py-[11px] bg-active hover:bg-opacity-80 rounded-[41px]"
      >
        <span className="text-dark font-bold text-sm hover:scale-110">Show All Information</span>
      </button>
    </section>
  );
};
