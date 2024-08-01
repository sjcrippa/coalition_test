import TableDiagList from "./table-diag-list";

export default function DiagnosisList() {
  return (
    <section className="mt-8 mb-8 mx-8 bg-white shadow rounded-2xl">
      <h4 className="mt-5 ml-5 mb-10 text-2xl font-extrabold text-dark">Diagnosis List</h4>
      <TableDiagList />
    </section>
  );
};
